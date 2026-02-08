import json
from pathlib import Path

root = Path(r"C:\Users\CHERK\OneDrive\Desktop\sun-home-solutions-main")
base = "https://sun-home-solutions.vercel.app"

regions = json.loads((root/"src/data/geo/regions.json").read_text(encoding="utf-8"))
dpts = json.loads((root/"src/data/geo/departements.json").read_text(encoding="utf-8"))

urls = [
    f"{base}/",
    f"{base}/france",
    f"{base}/zones",
]

urls += [f"{base}/regions/{r['slug']}" for r in regions]
urls += [f"{base}/departements/{d['slug']}" for d in dpts]

xml = ["<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">"]
for u in urls:
    xml.append("  <url><loc>%s</loc></url>" % u)
xml.append("</urlset>")

out = root/"public/sitemap.xml"
out.write_text("\n".join(xml), encoding="utf-8")
print("Wrote", out)
