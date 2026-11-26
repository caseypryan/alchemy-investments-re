"""Find Alchemy text that matches sister-site text (8-word runs in common).

Usage: python3 -I overlap.py <alchemy_root> <other_root> [<other_root> ...]
Prints, per Alchemy file, the share of its 8-word runs found in the other
sites, plus the sister file with the most matches and a sample.
"""
import os
import re
import sys
from collections import Counter, defaultdict

N = 8
SKIP_DIRS = {'node_modules', '.next', '.git', '.claude', 'scraped', 'seo', 'docs', '.vercel', 'public', 'scripts', 'tests', '__tests__'}
EXTS = ('.json', '.tsx', '.mdx', '.md', '.ts')


def words(text):
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'className="[^"]*"', ' ', text)
    return re.findall(r"[a-z0-9']+", text.lower())


def files(root, subdirs):
    for sub in subdirs:
        base = os.path.join(root, sub)
        for dp, dns, fns in os.walk(base):
            dns[:] = [d for d in dns if d not in SKIP_DIRS]
            for fn in fns:
                if fn.endswith(EXTS) and 'package' not in fn:
                    yield os.path.join(dp, fn)


def shingles(path):
    try:
        w = words(open(path, errors='ignore').read())
    except OSError:
        return []
    return [' '.join(w[i:i + N]) for i in range(len(w) - N + 1)]


def looks_like_prose(s):
    code = ('classname', 'import', 'const', 'px', 'strokelinecap', 'viewbox', 'svg', 'schema org', 'type', 'flex', 'text gray')
    return not any(c in s for c in code)


if len(sys.argv) < 3:
    sys.exit('usage: text-overlap-check.py <alchemy_root> <other_root> [<other_root> ...]')

alchemy_root, others = sys.argv[1], sys.argv[2:]
index = defaultdict(set)
for other in others:
    # A missing or mistyped folder must not pass as "no copied text".
    scanned = 0
    for f in files(other, ['content', 'src', 'app', 'components', 'lib']):
        scanned += 1
        for s in shingles(f):
            if looks_like_prose(s):
                index[s].add(f)
    if scanned == 0:
        sys.exit(f'error: no text files found under {other} (expected content/, src/ or app/ inside it)')
    print(f'compared against {other}: {scanned} files')

rows = []
for f in files(alchemy_root, ['content', 'src/app', 'src/components']):
    sh = [s for s in shingles(f) if looks_like_prose(s)]
    if len(sh) < 40:
        continue
    hits = [s for s in sh if s in index]
    if not hits:
        continue
    src = Counter()
    for s in hits:
        for o in index[s]:
            src[o] += 1
    top, cnt = src.most_common(1)[0]
    rows.append((len(hits) / len(sh), len(hits), len(sh), f, top, cnt, hits[len(hits) // 2]))

rows.sort(reverse=True)
for share, h, total, f, top, cnt, sample in rows[:40]:
    print(f"{share*100:5.1f}%  {h:4d}/{total:<5d} {os.path.relpath(f, alchemy_root)}\n        most like: {top.replace(os.path.expanduser('~'), '~')} ({cnt})\n        e.g. \"{sample}\"")
print('files with any match:', len(rows))
