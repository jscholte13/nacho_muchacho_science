from django.shortcuts import render

 

posts = [
{
	'author': 'Jscholte'
}
]


# . Homepage with description of the product.
def home(request):
	context = {
		'posts': posts
	}
	return render(request, 'Testpages/home.html',context)

# 0. Outstream EASI player Direct
def about (request):
	return render(request, 'Testpages/about.html', {'title': 'About'})

# 1. Smartclip player integration 
def smartclip (request):
	return render(request, 'Testpages/smartclip.html', {'title': 'Smartclip'})

# 2. Outstream EASI player DFP 1x1 Tag integration 
def spotx_1x1_GAM (request):
	return render(request, 'Testpages/spotx_1x1_GAM.html', {'title': 'spotx_1x1_GAM'})

# 3. Instream VAST tag and # 4. Instream VPAID tag 
def videoJS (request):
	return render(request, 'Testpages/videoJS.html', {'title': 'videoJS'})

# 5. Prebid outstream 
def prebid (request):
	return render(request, 'Testpages/prebid.html', {'title': 'prebid'})

# 6. OpenRTB integration

	