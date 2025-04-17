// function fitText(el, ratio = 40) {


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

function addDeleteAttributes(elem, attrName){
  if(elem.hasAttribute(attrName)){
    elem.removeAttribute(attrName);
  }
  else{
    elem.setAttribute(attrName, true);
  };
};


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

  }

  if (flippedCocktailCard && flippedCocktailCard !== FlippedCocktailBlock) {
    flippedCocktailCard.classList.remove('flipped')
    addDeleteAttributes(flippedCocktailCard, 'activated-flipped-cocktail-card');
  }


  if (cocktailBlockParentMainClassName === 'flipper') {
    CocktailInformationBlock.classList.toggle('cocktail_reciep_and_history');
    addDeleteAttributes(FlippedCocktailBlock, 'activated-flipped-cocktail-card');
    addDeleteAttributes(CocktailInformationBlock, 'appeared-information');
  }
}




document.querySelectorAll('.cocktail_circle_block').forEach(cocktail_card => {
    cocktail_card.addEventListener('click', function () {
      this.classList.toggle('flipped');
    });
  });


document.querySelector('.cocktails_ring').addEventListener('click', (event)=> appearDisappearAboutBlock(event));