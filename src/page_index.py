import mako.template
import os.path

import datetime

import random

names = ["Alice","Bob","Carol","Dave"]

#location of this file
srcdir = os.path.dirname(__file__)

def get():
    T = mako.template.Template(filename=f"{srcdir}/index.html")
    return T.render(
        name=random.choice(names)
    )
    
