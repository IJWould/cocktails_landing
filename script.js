document.querySelectorAll('.cocktail_block.recipe').forEach(recipe => {
    recipe.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
});