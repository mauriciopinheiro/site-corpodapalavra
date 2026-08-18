import urllib.request
import ssl
import sys

# Forçar saída utf-8 no stdout
sys.stdout.reconfigure(encoding='utf-8')
ctx = ssl.create_default_context()

def validar_url(url, termos_esperados):
    print("=" * 60)
    print(f"VERIFICANDO ENDEREÇO: {url}")
    print("=" * 60)
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Cache-Control": "no-cache"
        }
    )
    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            content = resp.read().decode("utf-8")
            print(f"STATUS HTTP: {resp.status} OK")
            print(f"Cache-Control: {resp.headers.get('Cache-Control')}")
            print(f"Last-Modified: {resp.headers.get('Last-Modified')}")
            print(f"Content-Length: {len(content)} bytes")
            print("\nMETADADOS ENCONTRADOS NO HTML:")
            for line in content.splitlines():
                l = line.strip()
                if any(k in l.lower() for k in ["<title>", "og:title", "og:description", "<h1", "meta name=\"description\""]):
                    print(f"  {l}")

            print("\nVALIDAÇÃO DE TERMOS-CHAVE:")
            for termo in termos_esperados:
                presente = termo.lower() in content.lower()
                status = "[OK]" if presente else "[FALHOU]"
                print(f"  {status} Termo '{termo}' presente: {presente}")
            print()
    except Exception as e:
        print(f"ERRO ao acessar {url}: {e}\n")

if __name__ == "__main__":
    validar_url(
        "https://mauricio-pinheiro.web.app/",
        ["Maurício Pinheiro", "Tecnologia, Arte e Educação", "Educador de Tecnologias e Artes", "ampulheta"]
    )
    validar_url(
        "https://mauricio-pinheiro.web.app/corpo-da-palavra/",
        ["corpoDApalavra", "Espaço de Tecnologias e Artes", "Sesc Santo André"]
    )
    validar_url(
        "https://mauricio-pinheiro.web.app/pira259anos/",
        ["PIRA 259", "Piracicaba"]
    )
