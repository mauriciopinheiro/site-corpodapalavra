import os
from PIL import Image, ImageDraw, ImageFont

def gerar_og_imagem():
    largura = 1200
    altura = 630

    cor_papel = (245, 243, 240)
    cor_tinta = (10, 10, 10)
    cor_vermelho = (209, 56, 40)
    cor_madeira = (216, 198, 165)
    cor_cinza = (120, 115, 110)

    img = Image.new('RGB', (largura, altura), color=cor_papel)
    draw = ImageDraw.Draw(img)

    # Textura sutil de retícula gráfica
    for x in range(30, largura - 30, 24):
        for y in range(30, altura - 30, 24):
            draw.point((x, y), fill=(210, 205, 198))

    # Moldura dupla editorial
    draw.rectangle([(25, 25), (largura - 25, altura - 25)], outline=cor_tinta, width=3)
    draw.rectangle([(32, 32), (largura - 32, altura - 32)], outline=cor_tinta, width=1)

    # Cruzes de corte nos 4 cantos
    def desenhar_marca_corte(cx, cy):
        draw.line([(cx - 10, cy), (cx + 10, cy)], fill=cor_vermelho, width=1)
        draw.line([(cx, cy - 10), (cx, cy + 10)], fill=cor_vermelho, width=1)
        draw.ellipse([(cx - 4, cy - 4), (cx + 4, cy + 4)], outline=cor_vermelho, width=1)

    desenhar_marca_corte(50, 50)
    desenhar_marca_corte(largura - 50, 50)
    desenhar_marca_corte(50, altura - 50)
    desenhar_marca_corte(largura - 50, altura - 50)

    # Fontes
    fonte_institucional = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 20)
    fonte_corpo = ImageFont.truetype('C:/Windows/Fonts/georgiai.ttf', 82)
    fonte_da = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 38)
    fonte_palavra = ImageFont.truetype('C:/Windows/Fonts/impact.ttf', 118)
    fonte_subtitulo = ImageFont.truetype('C:/Windows/Fonts/georgiai.ttf', 26)
    fonte_tagline = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 18)
    fonte_creditos = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 16)

    # Cabeçalho Institucional
    draw.rectangle([(60, 60), (largura - 60, 95)], fill=cor_madeira)
    draw.rectangle([(60, 60), (largura - 60, 95)], outline=cor_tinta, width=2)
    texto_cabecalho = "ESPAÇO DE TECNOLOGIAS E ARTES • SESC SANTO ANDRÉ"
    draw.text((75, 68), texto_cabecalho, fill=cor_tinta, font=fonte_institucional)

    tag_texto = "EXPOSIÇÃO CULTURAL"
    draw.rectangle([(largura - 290, 60), (largura - 60, 95)], fill=cor_tinta)
    draw.text((largura - 275, 68), tag_texto, fill=(245, 243, 240), font=fonte_institucional)

    # Bloco Central Monumental: corpo DA palavra
    draw.text((80, 155), "corpo", fill=cor_tinta, font=fonte_corpo)
    
    draw.rectangle([(335, 185), (425, 240)], fill=cor_vermelho)
    draw.rectangle([(335, 185), (425, 240)], outline=cor_tinta, width=2)
    draw.text((357, 190), "DA", fill=(255, 255, 255), font=fonte_da)

    draw.text((450, 135), "PALAVRA", fill=cor_tinta, font=fonte_palavra)

    # Linha divisória
    draw.line([(80, 290), (largura - 80, 290)], fill=cor_tinta, width=3)
    draw.line([(80, 295), (largura - 80, 295)], fill=cor_cinza, width=1)

    # Subtítulo Curatorial
    sub_texto = "Investigação sensorial sobre tipografia, livro, artes gráficas, gesto e espaço."
    draw.text((80, 325), sub_texto, fill=cor_tinta, font=fonte_subtitulo)

    # 4 Pilares
    pilares = "[ O SER LIVRO ]   [ O SER TIPOGRAFIA ]   [ O SER GRÁFICA ]   [ MATRIZES & CARIMBOS ]"
    draw.rectangle([(80, 395), (largura - 80, 445)], fill=(255, 255, 255), outline=cor_tinta, width=2)
    draw.text((95, 410), pilares, fill=cor_vermelho, font=fonte_tagline)

    # Rodapé e Autoria
    draw.line([(80, 520), (largura - 80, 520)], fill=cor_tinta, width=2)
    
    url_texto = "mauricio-pinheiro.web.app/corpo-da-palavra/"
    draw.text((80, 545), url_texto, fill=cor_tinta, font=fonte_institucional)

    credito_texto = "Concepção: Maurício Pinheiro (Sesc Piracicaba)"
    draw.text((largura - 520, 547), credito_texto, fill=cor_cinza, font=fonte_creditos)

    # Salvar
    os.makedirs('public', exist_ok=True)
    caminho_public = os.path.join('public', 'og-corpo-da-palavra.png')
    img.save(caminho_public, format='PNG', optimize=True)
    print(f"Imagem OG gerada com sucesso em: {caminho_public}")

    if os.path.exists('dist'):
        caminho_dist = os.path.join('dist', 'og-corpo-da-palavra.png')
        img.save(caminho_dist, format='PNG', optimize=True)
        print(f"Imagem OG copiada para: {caminho_dist}")

if __name__ == '__main__':
    gerar_og_imagem()
