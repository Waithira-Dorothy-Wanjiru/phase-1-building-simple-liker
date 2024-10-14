
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';


function toggleHeart(heartElement) {
  const currentStatus = heartElement.dataset.heartStatus;

 
  if (currentStatus === 'empty') {
    mimicServerCall()
      .then(response => {
        console.log(response); 
        heartElement.textContent = FULL_HEART; 
        heartElement.dataset.heartStatus = 'full'; 
      })
      .catch(error => {
        alert(error); 
      });
  } else {

    heartElement.textContent = EMPTY_HEART; 
    heartElement.dataset.heartStatus = 'empty'; 
  }
}


const hearts = document.querySelectorAll('.heart');
hearts.forEach(heart => {
  heart.addEventListener('click', () => toggleHeart(heart));
});
