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

function centerElementInView(element, container) {
  const containerWidth = container.offsetWidth;
  const elementWidth = element.offsetWidth;
  const elementLeft = element.offsetLeft;

  const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2);
  container.scrollTo({
    left: scrollTo,
    behavior: 'smooth'
  });
}

window.addEventListener('load', () => {
  const container = document.querySelector('.cocktails_carusel');
  const items = document.querySelectorAll('.cocktail_circle_block');

  centerElementInView(items[0], container);

  // Кликаем по любому элементу — он центрируется
  items.forEach(item => {
    item.addEventListener('click', () => {
      centerElementInView(item, container);
    });
  });
});

const mediaMobile = window.matchMedia('(max-width: 600px)');
const windowWidth = document.documentElement.clientWidth
console.log(windowWidth)

if (windowWidth <= 600){
    const cocktailRing = document.querySelector('.cocktails_ring')
    const cocktailsGallery = cocktailRing.parentNode
    const cocktailRingWidthClildElement = cocktailRing.firstElementChild.offsetWidth


    cocktailsGallery.style.width = `calc(${cocktailRingWidthClildElement}px)`


}

function addDeleteAttributes(elem, attrName){
  if(elem.hasAttribute(attrName)){
    elem.removeAttribute(attrName);
  }
  else{
    elem.setAttribute(attrName, true);
  };
};

function addReplaceClassShiftAnimation(element, className){
  element.classList.toggle(className)
}


function appearDisappearAboutBlock(cocktailBlock) {
  const [cocktailBlockParentMainClassName, cocktailBlockParentSecondClassName] = cocktailBlock.target.parentNode.classList;
  const reciepAndHistoryBlock = document.querySelector('.classic_cocktails_about');
  const CocktailInformationBlock = reciepAndHistoryBlock.querySelector('.' + cocktailBlockParentSecondClassName + '_about');
  const FlippedCocktailBlock = cocktailBlock.target.closest('.cocktail_circle_block');
  const CocktailBlocks = document.querySelector('.cocktails_ring');


  const ActivatedInformationBlock = reciepAndHistoryBlock.querySelector('[appeared-information]');
  const flippedCocktailCard = CocktailBlocks.querySelector('[activated-flipped-cocktail-card]');

  if (ActivatedInformationBlock && ActivatedInformationBlock !== CocktailInformationBlock) {
    addDeleteAttributes(ActivatedInformationBlock, 'appeared-information');
    ActivatedInformationBlock.classList.remove('cocktail_reciep_and_history');

    flippedCocktailCard.classList.remove('flipped')
    addDeleteAttributes(flippedCocktailCard, 'activated-flipped-cocktail-card');

  }


  if (cocktailBlockParentMainClassName === 'flipper') {
    CocktailInformationBlock.classList.toggle('cocktail_reciep_and_history');
    addDeleteAttributes(FlippedCocktailBlock, 'activated-flipped-cocktail-card');
    addDeleteAttributes(CocktailInformationBlock, 'appeared-information');
  }
  if (!flippedCocktailCard){
    document.querySelector('.movie_cocktails_section').classList.toggle('shiftTop')
  }
}

document.querySelectorAll('.cocktail_circle_block').forEach(cocktail_card => {
    cocktail_card.addEventListener('click', function () {
      this.classList.toggle('flipped');
    });
  });


document.querySelector('.cocktails_ring').addEventListener('click', (event)=> appearDisappearAboutBlock(event));