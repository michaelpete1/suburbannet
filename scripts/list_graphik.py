from pathlib import Path
root = Path(__file__).resolve().parents[1] / "public" / "fonts" / "graphik-trial"
for path in sorted(root.glob("*")):
    print(path.name)
