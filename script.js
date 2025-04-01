let vesper = document.querySelector('.vesper')
const overlay = document.querySelector('.vesperBackground');



vesper.addEventListener('mouseover', function (event) {
  vesper.style.cursor = 'url("img/cursor2.png") 60 60, auto';
  const { clientX, clientY } = event;
  overlay.style.setProperty('--mouse-x', `${clientX}px`);
  overlay.style.setProperty('--mouse-y', `${clientY}px`);
});


document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  overlay.style.setProperty('--mouse-x', `${clientX}px`);
  overlay.style.setProperty('--mouse-y', `${clientY}px`);
  console.log(clientX, clientY)
});

vesper.addEventListener('click', function(event){
  const bulletELement = document.createElement('div');
  const { clientX, clientY } = event;
  this.appendChild(bulletELement)
  bulletELement.innerHTML = '<img src="img/bulletHole.png" alt="bullet">'
  bulletELement.classList.add('bullet')

  bulletELement.style.left = `${clientX}px`;
  bulletELement.style.top = `${clientY}px`;

});



document.querySelectorAll('.cocktail_block.recipe').forEach(recipe => {
    recipe.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
});
