# combine_svg_paths.py
import svgpathtools

paths, attributes = svgpathtools.svg2paths("portrait.svg")

# Combine all paths into one long path
combined = svgpathtools.Path()
for path in paths:
    combined.extend(path)

# Save the combined path to a new SVG file
svgpathtools.wsvg([combined], filename="onepath.svg")
