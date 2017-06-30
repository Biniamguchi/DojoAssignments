from __future__ import unicode_literals
from django.shortcuts import render,HttpResponse
import json

notes = [
	{'C':'/static/app_main/sound/c.wav'},
	{'Db':'/static/app_main/sound/db.wav'},
	{'D':'/static/app_main/sound/d.wav'},
	{'Eb':'/static/app_main/sound/eb.wav'},
	{'E':'/static/app_main/sound/e.wav'},
	{'F':'/static/app_main/sound/f.wav'},
	{'Gb':'/static/app_main/sound/gb.wav'},
	{'G':'/static/app_main/sound/g.wav'},
	{'Ab':'/static/app_main/sound/ab.wav'},
	{'A':'/static/app_main/sound/a.wav'},
	{'Bb':'/static/app_main/sound/bb.wav'},
	{'B':'/static/app_main/sound/b.wav'}
]

def index(request):
	return render(request,'app_main/index.html',{
		'notes':json.dumps(notes)
	})