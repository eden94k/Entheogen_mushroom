// click event to toggle display none


const pullPortal = document.querySelector('.portalbtn');
const getItem3 = document.querySelector('.item3');
const getItem4 = document.querySelector('.item4');

console.log(getItem4);
console.log(getItem3);
console.log(pullPortal);


pullPortal.addEventListener('click', function(e) {
  getItem3.classList.add("change");
 getItem4.classList.remove("change");

}
);
