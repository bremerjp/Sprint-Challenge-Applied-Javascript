/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const createCarousel = () => {
  const carousel = document.createElement('div'),
    leftButton = document.createElement('div'),
    img1 = document.createElement('img'),
    img2 = document.createElement('img'),
    img3 = document.createElement('img'),
    img4 = document.createElement('img'),
    rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  img1.src = "./assets/carousel/mountains.jpeg";
  img1.style.display = "block";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  const imagesArray = [img1, img2, img3, img4];

  rightButton.addEventListener("click", e => {
    let current = imagesArray[0];
    for (let i=0; i<imagesArray.length; i++){
      if(imagesArray[i].style.display === "block"){
        current = imagesArray[i]
      }
    }
    let index = imagesArray.indexOf(current);
      if (imagesArray[index+1] !== undefined){
        imagesArray[index].style.display = "none";
        imagesArray[index+1].style.display = "block";
      } else{
        imagesArray[index].style.display = "none";
        imagesArray[0].style.display = "block";
      }
  });

  leftButton.addEventListener("click", e => {
    let current = imagesArray[0];
    for (let i=0; i<imagesArray.length; i++){
      if(imagesArray[i].style.display === "block"){
        current = imagesArray[i]
      }
    }
    let index = imagesArray.indexOf(current);
      if (imagesArray[index-1] !== undefined){
        imagesArray[index].style.display = "none";
        imagesArray[index-1].style.display = "block";
      } else{
        imagesArray[index].style.display = "none";
        imagesArray[imagesArray.length-1].style.display = "block";
      }
  });
  
  return carousel;
}

document.querySelector('.carousel-container').appendChild(createCarousel());