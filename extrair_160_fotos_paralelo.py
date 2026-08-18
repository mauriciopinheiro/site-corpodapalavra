import os
import sys
import json
import easyocr
from PIL import Image
from concurrent.futures import ProcessPoolExecutor, as_completed

sys.stdout.reconfigure(encoding='utf-8')

FOTOS_DIR = r'C:\Users\Maurício\Documents\FABRICA DE SOFTWARE\projetos\02-cultura-eventos-sesc\exposicao-corpo-da-palavra\fotos'

def processar_foto(nome_arquivo):
    caminho = os.path.join(FOTOS_DIR, nome_arquivo)
    try:
        reader = easyocr.Reader(['pt', 'en'], gpu=False, verbose=False)
        img = Image.open(caminho)
        w, h = img.size
        if max(w, h) > 1600:
            ratio = 1600.0 / max(w, h)
            new_size = (int(w * ratio), int(h * ratio))
            img_resized = img.resize(new_size, Image.Resampling.BILINEAR)
            temp_path = f"temp_par_{os.getpid()}_{nome_arquivo}"
            img_resized.save(temp_path, quality=80)
            ocr_res = reader.readtext(temp_path)
            if os.path.exists(temp_path):
                try:
                    os.remove(temp_path)
                except:
                    pass
        else:
            ocr_res = reader.readtext(caminho)

        textos = [item[1].strip() for item in ocr_res if len(item[1].strip()) > 0]
        return nome_arquivo, textos, None
    except Exception as e:
        return nome_arquivo, [], str(e)

def main():
    files = sorted([f for f in os.listdir(FOTOS_DIR) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])
    total = len(files)
    print(f"Iniciando OCR Paralelo em {total} fotos com 12 processos...")

    resultados = {}
    txt_lines = []
    concluidos = 0

    with ProcessPoolExecutor(max_workers=12) as executor:
        futures = {executor.submit(processar_foto, f): f for f in files}
        for future in as_completed(futures):
            nome_arquivo, textos, erro = future.result()
            concluidos += 1
            if erro:
                print(f"[{concluidos}/{total}] ERRO em {nome_arquivo}: {erro}")
                resultados[nome_arquivo] = {'erro': erro}
            else:
                print(f"[{concluidos}/{total}] OK: {nome_arquivo} ({len(textos)} linhas)")
                resultados[nome_arquivo] = {
                    'linhas': textos,
                    'texto_completo': "\n".join(textos)
                }

    # Salvar resultados consolidados
    for f in files:
        if f in resultados and 'linhas' in resultados[f]:
            txt_lines.append(f"====================================================")
            txt_lines.append(f"FOTO: {f}")
            txt_lines.append(f"====================================================")
            txt_lines.extend(resultados[f]['linhas'])
            txt_lines.append("\n")

    with open('conteudo_completo_160_fotos_exposicao.json', 'w', encoding='utf-8') as f_out:
        json.dump(resultados, f_out, ensure_ascii=False, indent=2)

    with open('conteudo_completo_160_fotos_exposicao.txt', 'w', encoding='utf-8') as f_out:
        f_out.write("\n".join(txt_lines))

    print("=== OCR PARALELO DE 160 FOTOS CONCLUÍDO COM SUCESSO! ===")

if __name__ == '__main__':
    main()
