import glob
import os
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

import easyocr

print("Iniciando extração de texto OCR de todas as 32 fotos da exposição com EasyOCR...")
reader = easyocr.Reader(['pt', 'en'], gpu=False)

fotos = sorted(glob.glob("WhatsApp Image*.jpeg"))
resultados = {}

for idx, foto in enumerate(fotos, 1):
    print(f"[{idx}/{len(fotos)}] Processando {foto}...")
    try:
        linhas = reader.readtext(foto, detail=0)
        texto_unido = "\n".join(linhas)
        resultados[foto] = {
            "indice": idx,
            "linhas": linhas,
            "texto_completo": texto_unido
        }
        print(f"  -> {len(linhas)} linhas extraídas.")
    except Exception as e:
        print(f"  -> Erro ao processar {foto}: {e}")
        resultados[foto] = {"erro": str(e)}

with open("textos_extraidos_fotos_exposicao.json", "w", encoding="utf-8") as fp:
    json.dump(resultados, fp, ensure_ascii=False, indent=2)

with open("textos_extraidos_fotos_exposicao.txt", "w", encoding="utf-8") as fp:
    for foto, dados in resultados.items():
        fp.write(f"====================================================\n")
        fp.write(f"FOTO: {foto}\n")
        fp.write(f"====================================================\n")
        fp.write(dados.get("texto_completo", "") + "\n\n")

print("\nExtração concluída com sucesso! Salvo em 'textos_extraidos_fotos_exposicao.json' e 'textos_extraidos_fotos_exposicao.txt'")
