import mako.template
import os.path

import datetime

#location of this file
srcdir = os.path.dirname(__file__)

def get():
    today=datetime.datetime.now()
    T = mako.template.Template(filename=f"{srcdir}/index.html")
    return T.render(
        today=f"{today.month}/{today.day}/{today.year}"
    )
    
