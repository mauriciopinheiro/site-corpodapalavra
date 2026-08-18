import os
import shutil
import subprocess
import stat

def remove_readonly(func, path, _):
    os.chmod(path, stat.S_IWRITE)
    func(path)

# 1. Executar o build do projeto corpoDApalavra
print('-> Compilando o projeto corpoDApalavra (npm run build)...')
subprocess.run(['npm', 'run', 'build'], shell=True, check=True)

# 2. Caminhos do portal central
portal_dir = r'C:\Users\Maurício\Documents\FABRICA DE SOFTWARE\projetos\07-portais-presenca-digital\portal-mauricio-pinheiro'
portal_pub = os.path.join(portal_dir, 'public')
target_sub = os.path.join(portal_pub, 'corpo-da-palavra')

if not os.path.exists(portal_pub):
    raise RuntimeError(f'Diretório do portal central não encontrado: {portal_pub}')

# 3. Limpar apenas a subpasta corpo-da-palavra no portal central
if os.path.exists(target_sub):
    shutil.rmtree(target_sub, onerror=remove_readonly)

os.makedirs(target_sub, exist_ok=True)

# 4. Copiar a build para a subpasta corpo-da-palavra
dist_dir = os.path.abspath('dist')
shutil.copytree(dist_dir, target_sub, dirs_exist_ok=True)

# 5. Executar o deploy no Firebase a partir do portal central
print('-> Publicando via Portal Central para manter o site raiz e todos os subprojetos intactos...')
subprocess.run(['firebase', 'deploy', '--only', 'hosting', '--project', 'mauricio-pinheiro'], cwd=portal_dir, shell=True, check=True)

print('==================================================')
print('SUCESSO! O site raiz foi preservado e o projeto está em:')
print('https://mauricio-pinheiro.web.app/corpo-da-palavra/')
print('==================================================')
