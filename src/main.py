import cherrypy
import mako.template
import os.path

import page_index
import page_posts
import page_signup


PYPATH = os.path.dirname(__file__)

srcdir = os.path.abspath(os.path.dirname(__file__))

class App:
    @cherrypy.expose
    def index(self):
        return page_index.get()
    @cherrypy.expose
    def posts(self):
        return page_posts.get()
    @cherrypy.expose
    def signup(self):
        return page_signup.get()

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
