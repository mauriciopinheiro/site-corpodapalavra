import os
import shutil
import stat

def remove_readonly(func, path, _):
    os.chmod(path, stat.S_IWRITE)
    func(path)

pub_dir = os.path.abspath('firebase_public')
if os.path.exists(pub_dir):
    shutil.rmtree(pub_dir, onerror=remove_readonly)

os.makedirs(pub_dir, exist_ok=True)

# 1. Copiar a build completa diretamente para a raiz do firebase_public
dist_dir = os.path.abspath('dist')
shutil.copytree(dist_dir, pub_dir, dirs_exist_ok=True)

# 2. Copiar a build completa também para o subdiretório /corpo-da-palavra/
sub_dir = os.path.join(pub_dir, 'corpo-da-palavra')
shutil.copytree(dist_dir, sub_dir, dirs_exist_ok=True)

# 3. Garantir que não há pastas .git no deploy
git_in_pub = os.path.join(pub_dir, '.git')
if os.path.exists(git_in_pub):
    shutil.rmtree(git_in_pub, onerror=remove_readonly)

git_in_sub = os.path.join(sub_dir, '.git')
if os.path.exists(git_in_sub):
    shutil.rmtree(git_in_sub, onerror=remove_readonly)

print('firebase_public successfully generated for both root and /corpo-da-palavra/!')
