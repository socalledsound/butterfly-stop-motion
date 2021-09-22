//const imgs = []
const numImgs = 4
const imgs = Array.from({ length: numImgs})
let imageCounter = 0
let currentDirection = 1
let greeting = 'hi'

function preload(){
    //load the images
    console.log(imgs)
    imgs.forEach((img, i) => imgs[i] = (loadImage(`img/${i}.jpg`)))
    console.log(imgs)
    // imgs[0] = loadImage('img/0.jpg')
    // imgs[1] = loadImage('img/1.jpg')
    // imgs[2] = loadImage('img/2.jpg')
    // imgs[3] = loadImage('img/3.jpg')
    //imgs
}

function setup(){
    createCanvas(1000, 1000)
    frameRate(2)

}

function draw(){
    //draw an image from the array of images
    image(imgs[imageCounter], 0, 0, 500, 500)
    // i wrote a function so the count goes forwards AND backwards 
    currentDirection = reverseDirection(imageCounter, currentDirection, 0, imgs.length - 1)
    imageCounter+=currentDirection
    console.log(imageCounter)
}

// takes in the current count and direction and a hi and lo value to go between
// you can see, when it reaches one of the limites, the direction reverses 
// by multiplying the direction by negative 1
const reverseDirection = (count, direction, lo, hi) => {
    if(direction > 0 &&  count >= hi){
        return direction *= -1
    } else if(direction < 0 && count === lo){
        return direction *= -1
    } else {
        return direction
    }
}