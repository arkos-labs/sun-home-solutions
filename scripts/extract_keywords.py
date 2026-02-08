import re
from pathlib import Path
from collections import Counter

root = Path(r"C:\Users\CHERK\OneDrive\Desktop\sun-home-solutions-main")
paths = list((root/"src/pages").rglob("*.tsx")) + [root/"index.html"]

text = ""
for p in paths:
    try:
        text += "\n" + p.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        pass

# Strip tags and code symbols
text = re.sub(r"<[^>]+>", " ", text)
text = re.sub(r"[\{\}\(\)\[\];,:./\\\"'`=\-_*]", " ", text)
text = text.lower()

words = re.findall(r"[a-zàâçéèêëîïôùûüÿœæ]+", text)
stop = set("le la les un une des de du au aux et ou à a en pour par sur avec sans dans chez nos vos votre vos notre nos plus moins etc ce cette ces est sont être avoir comme quand si que qui quoi dont où ne pas vous votre vos notre nos leur leurs il elle ils elles on nous je tu".split())
code_stop = set("const import from react return export default function props classname classnames useeffect usestate link button title text data value string number boolean array object map filter reduce find render component components page pages".split())

words = [w for w in words if len(w) >= 4 and w not in stop and w not in code_stop]

c1 = Counter(words).most_common(80)
bigrams = [words[i] + " " + words[i+1] for i in range(len(words)-1)]
cb = Counter(bigrams).most_common(80)

print("TOP mots (80):")
for w,n in c1:
    print(f"{w}: {n}")

print("\nTOP expressions 2 mots (80):")
for w,n in cb:
    print(f"{w}: {n}")
