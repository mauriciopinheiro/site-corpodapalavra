import os
import subprocess
import shutil
import stat

def remove_readonly(func, path, _):
    os.chmod(path, stat.S_IWRITE)
    func(path)

dist_dir = os.path.abspath('dist')
git_dir = os.path.join(dist_dir, '.git')
if os.path.exists(git_dir):
    shutil.rmtree(git_dir, onerror=remove_readonly)

subprocess.run(['git', 'init'], cwd=dist_dir, check=True)
subprocess.run(['git', 'config', 'user.name', 'Maurício Pinheiro'], cwd=dist_dir, check=True)
subprocess.run(['git', 'config', 'user.email', 'mauriciopinheiro@users.noreply.github.com'], cwd=dist_dir, check=True)
subprocess.run(['git', 'checkout', '-b', 'gh-pages'], cwd=dist_dir, check=True)
subprocess.run(['git', 'add', '-A'], cwd=dist_dir, check=True)
subprocess.run(['git', 'commit', '-m', 'deploy: update 5 dramatic moments on gh-pages'], cwd=dist_dir, check=True)
subprocess.run(['git', 'remote', 'add', 'origin', 'https://github.com/mauriciopinheiro/site-corpodapalavra.git'], cwd=dist_dir, check=True)
subprocess.run(['git', 'push', '-f', 'origin', 'gh-pages'], cwd=dist_dir, check=True)

print('gh-pages successfully pushed!')
