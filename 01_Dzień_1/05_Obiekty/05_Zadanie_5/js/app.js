const recipe = {
    title: 'woda gotowana',
    servings: 42,
    ingredients: []
}

recipe.ingredients.push('water')
recipe.ingredients = recipe.ingredients.concat(['water', 'lime stone']);

console.log(recipe);