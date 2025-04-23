// function fitText(el, ratio = 10) {


//     const width = el.offsetWidth;
//     el.style.fontSize = (width / ratio) + 'px';
// };
// const historyElmnts = document.getElementsByClassName('history');
// const reciepElmnts = document.getElementsByClassName('reciep');

// Array.from(historyElmnts).forEach(element => {
//     window.addEventListener('resize', () => fitText(element));
//   });

// Array.from(reciepElmnts).forEach(element => {
//     window.addEventListener('resize', () => fitText(element));
//   });

// function centerElementInView(element, container) {
//   const containerWidth = container.offsetWidth;
//   const elementWidth = element.offsetWidth;
//   const elementLeft = element.offsetLeft;

//   const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2);
//   container.scrollTo({
//     left: scrollTo,
//     behavior: 'smooth'
//   });
// }

// window.addEventListener('load', () => {
//   const container = document.querySelector('.cocktails_carusel');
//   const items = document.querySelectorAll('.cocktail_circle_block');

//   centerElementInView(items[0], container);


const mediaMobile = window.matchMedia('(max-width: 600px)');
const windowWidth = document.documentElement.clientWidth
console.log(windowWidth)


if (windowWidth <= 600) {
  const cocktailRing = document.querySelector('.cocktails_ring')
  const cocktailsGallery = cocktailRing.parentNode
  const cocktailRingWidthClildElement = cocktailRing.firstElementChild.offsetWidth
  const cocktailRingLenght = document.querySelectorAll('.cocktail_circle_block').length

  const marginCocktailBlock = getComputedStyle(cocktailRing.firstElementChild).marginRight

  console.log(marginCocktailBlock)
  cocktailsGallery.style.width = `calc(${cocktailRingWidthClildElement}px + 10%)`

  const leftButt = document.querySelector('.left_butt');
  const rightButt = document.querySelector('.right_butt');

  let index = 0;
  let presentPosition = 0;

  function appearDisappearButt() {
    if (index === 0) {
      leftButt.style.display = 'none';
    }
    else {
      leftButt.style.display = 'block';
    }

    if (index === cocktailRingLenght - 1) {
      rightButt.style.display = 'none';
    }
    else {
      rightButt.style.display = 'block';
    }
  }

  leftButt.onclick = function () {
    if (index > 0) {
      index--;
      presentPosition += cocktailRingWidthClildElement + 32;
      cocktailRing.style.transition = 'transform 0.3s ease';
      cocktailRing.style.transform = `translateX(${presentPosition}px)`;
      appearDisappearButt();
    }
  };

  rightButt.onclick = function () {
    if (index < cocktailRingLenght - 1) {
      index++;
      presentPosition -= cocktailRingWidthClildElement + 32;
      cocktailRing.style.transition = 'transform 0.3s ease';
      cocktailRing.style.transform = `translateX(calc(${presentPosition}px))`;
      appearDisappearButt();
    }
  };

  appearDisappearButt();
}


function addDeleteAttributes(elem, attrName) {
  if (elem.hasAttribute(attrName)) {
    elem.removeAttribute(attrName);
  }
  else {
    elem.setAttribute(attrName, true);
  };
};

function addReplaceClassShiftAnimation(element, className) {
  element.classList.toggle(className)
}


function appearDisappearAboutBlock(cocktailBlock) {
  const [cocktailBlockParentMainClassName, cocktailBlockParentSecondClassName] = cocktailBlock.target.parentNode.classList;
  const reciepAndHistoryBlock = document.querySelector('.classic_cocktails_about');
  const CocktailInformationBlock = reciepAndHistoryBlock.querySelector('.' + cocktailBlockParentSecondClassName + '_about');
  const FlippedCocktailBlock = cocktailBlock.target.closest('.cocktail_circle_block');
  const CocktailBlocks = document.querySelector('.cocktails_ring');

  // const movieSection = document.querySelector('.movie_cocktails_section')


  const ActivatedInformationBlock = reciepAndHistoryBlock.querySelector('[appeared-information]');
  const flippedCocktailCard = CocktailBlocks.querySelector('[activated-flipped-cocktail-card]');



  if (ActivatedInformationBlock && ActivatedInformationBlock !== CocktailInformationBlock) {

    addDeleteAttributes(ActivatedInformationBlock, 'appeared-information');
    ActivatedInformationBlock.classList.remove('cocktail_reciep_and_history');
    // movieSection.classList.remove('movie_animation');
    flippedCocktailCard.classList.remove('flipped');
    addDeleteAttributes(flippedCocktailCard, 'activated-flipped-cocktail-card');

  }

  if (cocktailBlockParentMainClassName === 'flipper') {
    document.querySelector('.information').classList.add('scaleup')
    CocktailInformationBlock.classList.toggle('cocktail_reciep_and_history');
    addDeleteAttributes(FlippedCocktailBlock, 'activated-flipped-cocktail-card');
    addDeleteAttributes(CocktailInformationBlock, 'appeared-information');

    const scrollHeight = window.innerWidth <= 600 ? 1 : 0.5;
    window.scrollBy({
      top: window.innerHeight * scrollHeight,
      behavior: 'smooth'
    });
    // movieSection.classList.add('movie_animation_appear');
  }

}

document.querySelectorAll('.cocktail_circle_block').forEach(cocktail_card => {
  cocktail_card.addEventListener('click', function () {
    this.classList.toggle('flipped');
  });
});

