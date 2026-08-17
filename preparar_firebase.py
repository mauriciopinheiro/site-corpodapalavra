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
sub_dir = os.path.join(pub_dir, 'corpo-da-palavra')
shutil.copytree(os.path.abspath('dist'), sub_dir)

root_index = os.path.join(pub_dir, 'index.html')
with open(root_index, 'w', encoding='utf-8') as f:
    f.write('<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n'
            '  <meta charset="UTF-8">\n'
            '  <meta http-equiv="refresh" content="0;url=/corpo-da-palavra/">\n'
            '  <title>Redirecionando para corpoDApalavra</title>\n'
            '</head>\n<body>\n'
            '  <p>Redirecionando para <a href="/corpo-da-palavra/">corpoDApalavra — Sesc Santo André</a>...</p>\n'
            '</body>\n</html>\n')

print('firebase_public successfully generated with read-only handler!')
