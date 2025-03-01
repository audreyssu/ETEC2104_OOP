import mako.template
import os.path

import datetime
import random

#location of this file
srcdir = os.path.dirname(__file__)



def get():
    T = mako.template.Template(
            filename=os.path.dirname(__file__)+"/posts.html"
        )
    
    return T.render(
        date1 = get_posttime(),
        date2 = get_posttime(),
        date3 = get_posttime(),
        date4 = get_posttime(),
        date5 = get_posttime(),
        date6 = get_posttime(),
        date7 = get_posttime(),
        date8 = get_posttime(),
        date9 = get_posttime(),
        date10 = get_posttime(),
        pfp = random.choice([f"/html/catpfp.jpg", f"/html/dogpfp.jpg"])
    )

def get_posttime():
    x = datetime.timedelta(minutes=random.randrange(8000))
    hoursago = int( x.seconds / 3600 )
    minutesago = round( (x.seconds - hoursago*3600)/60 )

    return f"{x.days} days, {hoursago} hours, and {minutesago} minutes ago"