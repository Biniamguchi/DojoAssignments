function SpriteSheet(src){ // Better than making a new Image for each sprite.
    var img = new Image();
    img.src = src;
    return img;
}
