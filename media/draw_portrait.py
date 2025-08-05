# # draw_portrait.py
# from manim import *
# import subprocess
# import svgpathtools

# # 1) Vectorize with potrace
# #    pip install pyPotrace
# subprocess.run([
#     "potrace", "-s", "-o", "portrait.svg", "--alphamax", "1.0",
#     "portrait.pnm"
# ])

# # 2) (Optional) post-process SVG in Python: merge paths into one
# paths, atts = svgpathtools.svg2paths("portrait.svg")

# # A more robust way to combine paths to avoid TypeError
# combined = svgpathtools.Path()
# for path in paths:
#     combined.extend(path)

# svgpathtools.wsvg([combined], filename="onepath.svg")
# # 3) Animate in Manim
# class DrawPortrait(Scene):
#     def construct(self):
#         # load the single long path
#         portrait = SVGMobject("onepath.svg")
#         portrait.set_stroke(width=2, color=PURE_BLUE)
#         portrait.set_fill(opacity=0)
#         # animate the stroke drawing
#         self.play(Create(portrait), run_time=5, rate_func=linear)

# if __name__ == "_main_":
#     from manim import config
#     config.media_width = "75%"
#     # run with: manim -pqm draw_portrait.py DrawPortrait



# draw_portrait.py
from manim import *

class DrawPortrait(Scene):
    def construct(self):
        # Load the simplified SVG with a single path
        portrait = SVGMobject("onepath.svg")
        portrait.set_stroke(width=2, color=PURE_BLUE)
        portrait.set_fill(opacity=0)

        # Animate the line drawing
        self.play(Create(portrait), run_time=5, rate_func=linear)
