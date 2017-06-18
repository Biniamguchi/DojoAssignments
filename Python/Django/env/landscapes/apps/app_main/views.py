from __future__ import unicode_literals
from django.shortcuts import render,redirect

def index(request):
    return render(request,'app_main/index.html')

snow     = [
    "https://static.pexels.com/photos/1127/cold-snow-landscape-nature.jpg",
    "http://eskipaper.com/images/snow-landscape-2.jpg",
    "http://freebigpictures.com/wp-content/uploads/winter-landscape.jpg",
    "https://ourgreatphotos.com/wp-content/uploads/2015/11/Winter-landscape-with-trees-snow-field-and-barn-on-a-sunny-day.jpeg",
    "http://static.boredpanda.com/blog/wp-content/uuuploads/winter-landscapes/winter-landscapes-20.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/fa/cf/20/facf20bb8b672f8d3457518bc2810184.jpg",
    "http://www.vectorfree.com/media/vectors/snow-landscape.jpg",
    "http://www.wallpaperup.com/217125/winter_landscape_trees_in_the_snow.html",
    "https://i.ytimg.com/vi/oR4ezsDCWX8/maxresdefault.jpg",
    "http://amolife.com/image/images/stories/Nature/landscapes/Snow_Landscape__(3).jpg"
]

desert   = [
    "https://s-media-cache-ak0.pinimg.com/originals/55/b8/d2/55b8d2f31b3141c6d30dbfb601472832.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/b5/bc/58/b5bc580193687c26e1f918eae39e02b3.jpg",
    "http://eskipaper.com/images/desert-landscape-4.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/19/c5/33/19c533accefae01446161a629abf6dab.jpg",
    "http://eskipaper.com/images/desert-landscape-2.jpg",
    "http://eskipaper.com/images/fantastic-desert-landscape-wallpaper-1.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/94/e0/7a/94e07ab09bf123557604a9c76444b917.jpg",
    "http://www.gardensdecor.com/cdn/img/best-desert-landscape-desert-archives-free-twitter-headers.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Desert_landscape_%2812464661053%29.jpg",
    "http://cdn.touropia.com/gfx/d/amazing-desert-landscapes/wadi_rum.jpg?v=2e80b0f0f091dff350da7a5c8140a026",
]

forest   = [
    "https://s-media-cache-ak0.pinimg.com/originals/7c/a5/d0/7ca5d0906a50459730354fe238e56322.jpg",
    "http://www.amazingwallpaperz.com/wp-content/uploads/Forest-Landscape-Wallpaper-Widescreen-HD.jpg",
    "http://www.amazingwallpaperz.com/wp-content/uploads/Forest-Landscape-Widescreen-Wallpapers.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/c1/5b/54/c15b54cf0334fbb590c6c8abaf0285bf.jpg",
    "http://wallup.net/wp-content/uploads/2015/12/199510-nature-trees-sunlight-path-spruce-forest-landscape.jpg",
    "http://freebigpictures.com/wp-content/uploads/forest-landscape.jpg",
    "http://goldwallpapers.com/uploads/posts/forest-landscape-wallpaper/forest_landscape_wallpaper_004.jpg",
    "http://www.amazingwallpaperz.com/wp-content/uploads/Forest-Landscape-Iphone-Wallpapers.jpg",
    "http://freshwallpapers.in/walls/green_stones_and_forest_landscape-wide.jpg",
    "https://static.pexels.com/photos/21008/pexels-photo.jpg"
]

vineyard = [
    "https://s-media-cache-ak0.pinimg.com/736x/4e/38/83/4e3883d20a67b940e1590ae8982545a3.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/de/05/02/de05025defb55020c940fc6631e482d0.jpg",
    "http://www.wallpaperup.com/132950/Vineyard_Landscape.html",
    "http://www.jcalote.com/wp-content/gallery/recent-landscapes/SunsetVineyard.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/86/87/bd/8687bde60faa636ddab0decdbbfd5d6b.jpg",
    "http://pre08.deviantart.net/0954/th/pre/i/2007/294/8/1/swiss_lavaux___autumn_by_superjuju29.jpg",
    "http://www.travelization.net/wp-content/uploads/2012/06/sunset-over-wine-vineyard-landscape-wallpapers-t.jpg",
    "https://mmphototours.files.wordpress.com/2012/01/7971752_l2.jpg",
    "http://www.australiansquashtour.org/resources/assets/upload/2017/3/i-paesaggi-vitivinicoli-del-piemonte-langhe-roero-e-monferrato.jpg",
    "https://janeluriephotography.files.wordpress.com/2016/11/pinot-noir-vineyard.jpg?w=1280&h=854",
]

tropical = [
    "https://images.fineartamerica.com/images-medium-large/kamaole-tropical-landscape-pierre-leclerc.jpg",
    "http://www.junglemusic.net/images/PaDr54[1].jpg",
    "http://www.junglemusic.net/images/172.JPG",
    "http://wallpapersafari.com/w/ViwJAO/",
    "http://dpa.designlifenetwork.com/wp-content/uploads/sites/17/2014/01/tropical-landscape-free.jpg",
    "http://wallpapersafari.com/w/UdWPma/",
    "https://st.hzcdn.com/simgs/b3b11ec7011d5cb6_4-8778/tropical-landscape.jpg",
    "https://previews.123rf.com/images/fotoall/fotoall1510/fotoall151000195/46967561-Sunrise-Tropical-landscape-sea-granite-rocky-beaches-on-tropical-sea-landscape-summertime-Stock-Photo.jpg",
    "http://www.wallcoo.net/nature/2009_Landscape_1680_Desktop_05/images/Tropical%20Island%20Sunset.jpg",
    "http://img12.deviantart.net/c85c/i/2009/292/1/d/tropical_landscape_by_seriousx9.jpg",
]

def landscape(request,id):
    id = int(id)
    if id < 0 or id > 50:
        return redirect('/')

    if id >= 1 and id <= 10:
        id = snow[id-1]
    elif id >= 11 and id <= 20:
        id = desert[id-11]
    elif id >= 21 and id <= 30:
        id = forest[id-21]
    elif id >= 31 and id <= 40:
        id = vineyard[id-31]
    elif id >= 41 and id <= 50:
        id = tropical[id-41]

    ctx = {'id':id}
    return render(request,'app_main/landscape.html',ctx)
