import os
import sys
import json
import easyocr
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

FOTOS_DIR = r'C:\Users\Maurício\Documents\FABRICA DE SOFTWARE\projetos\02-cultura-eventos-sesc\exposicao-corpo-da-palavra\fotos'
JSON_FILE = 'conteudo_completo_160_fotos_exposicao.json'
TXT_FILE = 'conteudo_completo_160_fotos_exposicao.txt'

files = sorted([f for f in os.listdir(FOTOS_DIR) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])
total = len(files)

# Carrega progresso anterior se houver
resultados = {}
if os.path.exists(JSON_FILE):
    try:
        with open(JSON_FILE, 'r', encoding='utf-8') as fp:
            resultados = json.load(fp)
    except:
        resultados = {}

print(f"Total de fotos: {total}. Já processadas anteriormente: {len(resultados)}")
reader = easyocr.Reader(['pt', 'en'], gpu=False, verbose=False)

for idx, nome_arquivo in enumerate(files):
    if nome_arquivo in resultados and len(resultados[nome_arquivo].get('linhas', [])) > 0:
        print(f"[{idx+1}/{total}] Pulando {nome_arquivo} (já processado).")
        continue

    caminho = os.path.join(FOTOS_DIR, nome_arquivo)
    try:
        img = Image.open(caminho)
        w, h = img.size
        if max(w, h) > 1200:
            ratio = 1200.0 / max(w, h)
            new_size = (int(w * ratio), int(h * ratio))
            img_resized = img.resize(new_size, Image.Resampling.BILINEAR)
            temp_path = f"temp_fast_{idx}.jpg"
            img_resized.save(temp_path, quality=70)
            ocr_res = reader.readtext(temp_path)
            if os.path.exists(temp_path):
                try:
                    os.remove(temp_path)
                except:
                    pass
        else:
            ocr_res = reader.readtext(caminho)

        textos = [item[1].strip() for item in ocr_res if len(item[1].strip()) > 0]
        resultados[nome_arquivo] = {
            'linhas': textos,
            'texto_completo': "\n".join(textos)
        }
        print(f"[{idx+1}/{total}] OK: {nome_arquivo} ({len(textos)} linhas)")

        # Salva incrementalmente a cada 10 fotos
        if (idx + 1) % 10 == 0 or idx == total - 1:
            with open(JSON_FILE, 'w', encoding='utf-8') as f_out:
                json.dump(resultados, f_out, ensure_ascii=False, indent=2)

    except Exception as e:
        print(f"[{idx+1}/{total}] ERRO em {nome_arquivo}: {e}")
        resultados[nome_arquivo] = {'erro': str(e)}

# Grava TXT final
txt_lines = []
for f in files:
    if f in resultados and 'linhas' in resultados[f]:
        txt_lines.append("====================================================")
        txt_lines.append(f"FOTO: {f}")
        txt_lines.append("====================================================")
        txt_lines.extend(resultados[f]['linhas'])
        txt_lines.append("\n")

with open(TXT_FILE, 'w', encoding='utf-8') as f_out:
    f_out.write("\n".join(txt_lines))

print("=== OCR FINALIZADO COM SUCESSO! ===")
