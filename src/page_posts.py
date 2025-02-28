import mako.template
import os.path

import datetime

#location of this file
srcdir = os.path.dirname(__file__)

def get():
    T = mako.template.Template(filename=f"{srcdir}/posts.html")
    return T.render()
