from pathlib import Path
from PIL import Image, ImageEnhance

root = Path(__file__).resolve().parents[1]
path = root / "public" / "logos" / "connect.png"

img = Image.open(path)
img = ImageEnhance.Brightness(img).enhance(1.4)
img.save(path)
