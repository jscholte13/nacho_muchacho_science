from django.shortcuts import render

# Pages still to create for integrations: 
# 1. Instream VAST tag 
# 2. Instream VPAID tag 
# 3. Outstream EASI player DFP 1x1 Tag integration 
# 4. Prebid outstream 
# 5. OpenRTB integration 

posts = [
{
	'author': 'Jscholte'
}
]



def home(request):
	context = {
		'posts': posts
	}
	return render(request, 'Testpages/home.html',context)

def about (request):
	return render(request, 'Testpages/about.html', {'title': 'About'})

def smartclip (request):
	return render(request, 'Testpages/smartclip.html', {'title': 'Smartclip'})

def spotx_1x1_GAM (request):
	return render(request, 'Testpages/spotx_1x1_GAM.html', {'title': 'spotx_1x1_GAM'})

def videoJS (request):
	return render(request, 'Testpages/videoJS.html', {'title': 'videoJS'})
	