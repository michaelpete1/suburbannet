from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
path = root / "public" / "logos" / "hero-image.jpg"

img = Image.open(path)
width, height = img.size

# Crop 10% from the top to bring the subject closer
crop_box = (0, int(height * 0.1), width, height)
cropped = img.crop(crop_box)
cropped.save(path)
