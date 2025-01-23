import cherrypy
import mako.template
import os.path

import page_index
import page_test

PYPATH = os.path.dirname(__file__)

srcdir = os.path.abspath(os.path.dirname(__file__))

class App:
    @cherrypy.expose
    def index(self):
        return page_test.get()

app = App()
cherrypy.quickstart(
    app,
    '/',
    {
        "/html": {
            "tools.staticdir.on": True,
            "tools.staticdir.dir": f"{srcdir}/../html"
        }
    }
)
