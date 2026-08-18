import os
import sys
import json
import easyocr
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

fotos_dir = r'C:\Users\Maurício\Documents\FABRICA DE SOFTWARE\projetos\02-cultura-eventos-sesc\exposicao-corpo-da-palavra\fotos'
files = sorted([f for f in os.listdir(fotos_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])

print(f"Iniciando OCR em {len(files)} fotos de alta resolução...")
reader = easyocr.Reader(['pt', 'en'], gpu=False)

resultados = {}
txt_lines = []

for idx, f in enumerate(files):
    caminho = os.path.join(fotos_dir, f)
    print(f"[{idx+1}/{len(files)}] Processando {f}...")
    try:
        # Resize if image is huge to speed up OCR without loss of clarity
        img = Image.open(caminho)
        w, h = img.size
        if max(w, h) > 1800:
            ratio = 1800.0 / max(w, h)
            new_size = (int(w * ratio), int(h * ratio))
            img_resized = img.resize(new_size, Image.Resampling.LANCZOS)
            temp_path = f"temp_ocr_{idx}.jpg"
            img_resized.save(temp_path, quality=85)
            ocr_res = reader.readtext(temp_path)
            if os.path.exists(temp_path):
                os.remove(temp_path)
        else:
            ocr_res = reader.readtext(caminho)

        textos = [item[1] for item in ocr_res if len(item[1].strip()) > 0]
        resultados[f] = {
            'linhas': textos,
            'texto_completo': "\n".join(textos)
        }

        txt_lines.append(f"====================================================")
        txt_lines.append(f"FOTO: {f}")
        txt_lines.append(f"====================================================")
        txt_lines.extend(textos)
        txt_lines.append("\n")

        print(f"  -> {len(textos)} linhas extraídas.")
    except Exception as e:
        print(f"  -> Erro ao processar {f}: {e}")
        resultados[f] = {'erro': str(e)}

with open('conteudo_completo_160_fotos_exposicao.json', 'w', encoding='utf-8') as f_out:
    json.dump(resultados, f_out, ensure_ascii=False, indent=2)

with open('conteudo_completo_160_fotos_exposicao.txt', 'w', encoding='utf-8') as f_out:
    f_out.write("\n".join(txt_lines))

print("OCR de 160 fotos concluído com sucesso!")
