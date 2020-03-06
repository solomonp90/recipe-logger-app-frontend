let mealUl = document.querySelector('#meal-list')
let mainMealDiv = document.querySelector('#main-meal')
let mealImg = document.querySelector('#meal-image')
let mealname = document.querySelector('#meal-name')
let mealKind = document.querySelector('#meal-kind')
let mealDesc = document.querySelector('#meal-description')
let addMealForm = document.querySelector('#add-meal-form')
let mealcardcontainerDiv = document.querySelector('#meal-card-container')
let mealEditDiv = document.querySelector('.card-body')
// =================recipes Ul=============================
let recipesUl = document.querySelector('#recipes-list')
let recipeFormContainer = document.querySelector('#form-container')


function getMeals(){
 
    return fetch('http://localhost:3000/meals')
    .then(res => res.json())

}

function renderMeals(meals){
  
  // let initialimg = document.createElement('img')
  mealUl.innerHTML = ""

    meals.forEach(meal => {
            // create elements
  let mealLi = document.createElement('li')
//    fill in elements 
  mealLi.innerText = meal.name
// set attributes for elements
  mealLi.style.listStyle = 'none'
  mealLi.style.color = "white"
  mealLi.id = meal.id
//   append elements to parent node
  mealUl.append(mealLi)
    });
}

getMeals().then(renderMeals)

mealUl.addEventListener('click',(mealLi) => {
    // console.log(mealLi.target)
    recipeFormContainer.innerHTML = ''
    fetch(`http://localhost:3000/meals/${mealLi.target.id}`)
    .then(res => res.json())
    .then(renderOneMeal)
})


addMealForm.addEventListener('submit',(evt) => {
     evt.preventDefault()
    let nameInput = evt.target["name"].value
    let imageInput = evt.target["image"].value
    let kindInput = evt.target["kind"].value
    let descInput = evt.target["description"].value

    fetch(`http://localhost:3000/meals`, {
      method:'POST',
     headers: { 
         'Content-type': 'application/json'
     },
     body: JSON.stringify({
         name :nameInput,
         image:imageInput,
         kind:kindInput,
         description:descInput
         
      })
    })
    .then(res => res.json())
    .then((meal) => {
      let mealLi = document.createElement('li')
      mealLi.innerText = meal.name
      mealLi.style.listStyle = 'none'
      mealLi.style.color = 'white'
      
      mealUl.append(mealLi)
      renderOneMeal(meal)
      
     


    })
    // .then(renderOneMeal)
    
})

function renderOneMeal(meal){ 
    // =============meal variables====================
    recipesUl.innerHTML = ''
    mealImg.src = meal.image
    mealname.innerText = meal.name
    mealKind.innerText = meal.kind
    mealDesc.innerText = meal.description

    let mealEditButton = document.createElement("button")
    mealEditButton.innerText = "Edit Meal"
    
    let mealDeleteButton = document.createElement("button")
    mealDeleteButton.innerText = "Delete Meal"
    mealEditDiv.append(mealEditButton, mealDeleteButton)

    mealEditButton.addEventListener("click", (meal) => {
      mealEdit(meal)
    })

    mealDeleteButton.addEventListener("click", (meal) => {
      mealDelete(meal)
    })
    

    let newRecipeForm = document.createElement('form')

    newRecipeForm.className = 'add-recipe-form'
    newRecipeForm.innerHTML = `<h3>add a new recipe to this meal</h3>
           <input type="text" name="name" value="" placeholder="Enter a recipe name" class="input-text">
           <br>
           <label style="text-align: center;">ingredients</label>
           <br>
           <textarea type="text-area" name="ingredients" value="" placeholder="Enter the ingredients" class="input-text">
           </textarea>
           <br>
           <label style="text-align: center;">instructions</label>
           <br>
           <textarea type="text-area" name="instructions" value="" placeholder="Enter the instructions" class="input-text">
           </textarea>
           <br>
           <input type="submit" name="submit" value="submit" class="submit">`

        meal.recipes.forEach((recipe) => {
          let recipeLi = document.createElement('li')
          let recipeIngPTag = document.createElement('p')
          let recipeInstTag = document.createElement('p')
          let recipeNameTag = document.createElement('h4')

          // recipeLi.style.color = "rgb(226, 129, 25)"
          recipeIngPTag.innerText = recipe.ingredients
          recipeInstTag.innerText = recipe.instructions
          
          recipeNameTag.innerText = `${recipe.name} (click to edit)`
          recipeLi.style.listStyle = 'none'

          recipeLi.append(recipeNameTag,recipeIngPTag,recipeInstTag)
          recipesUl.append(recipeLi)

          handleRecipeEdit(recipeNameTag,recipe,meal)
        })
  
        recipeFormContainer.append(newRecipeForm)
          mainMealDiv.append(recipeFormContainer)

          newRecipeForm.addEventListener('submit',(evt) => {
            evt.preventDefault()
            recipeFormContainer.innerHTML = ''
            
            let recipeName = evt.target["name"].value
            let recipeIng = evt.target["ingredients"].value
            let recipeInst = evt.target["instructions"].value

                fetch(`http://localhost:3000/recipes`, {
                  method:'POST',
                headers: { 
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                  name:recipeName,
                  ingredients:recipeIng,
                  instructions:recipeInst,
                  meal_id:meal.id
                  })
                })
                .then(r => r.json())
                .then((newRecipe) => {
                  meal.recipes.push(newRecipe)
                  renderOneMeal(meal)
                })

          })

}

function mealEdit(meal){
  let mealEditForm = document.createElement("form")
  // let mealEditSubmitButton = mealEditForm.querySelector(".submit")
// console.log(mealEditSubmitButton)

 


  mealEditForm.innerHTML = ` <input type="text" name="name" value="" placeholder="Enter a meal name" class="input-text">
  <br>       
  <input type="text" name="image" value="" placeholder="Enter a meal's image URL" class="input-text">
  <br>
  <input type="text" name="kind" value="" placeholder="Enter the kind of meal" class="input-text">
  <br>
  <input type="textarea" name="description" value="" placeholder="Enter a meal description" class="input-text">
  <br>
  <input type="submit" name="submit" value="Edit Meal" class="submit">`
  mealEditDiv.append(mealEditForm)

  mealEditForm.addEventListener('submit',(evt) => {
    evt.preventDefault()

    // evt.target.id = meal.id

    console.log(evt.target.id)
    let newMealName = evt.target["name"].value
    let newMealImageUrl = evt.target["image"].value
    let newMealKind = evt.target["kind"].value
    let newMealDesc = evt.target["description"].value

    fetch(`http://localhost:3000/meals/${meal.id}`, {
    method:'PATCH',
    headers: { 
       'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: newMealName,
      image: newMealImageUrl,
      kind: newMealKind,
      description: newMealDesc
      
    })
  })
  .then(r => r.json())
  .then((editedMeal) => {
    console.log(editedMeal)
  })

  })

  

}

function handleRecipeEdit(recipeNameTag,recipe,meal){
 
  recipeNameTag.addEventListener('click',(evt) => {
     recipesUl.innerHTML = ''

     let recipeLi = document.createElement('li')
     let recipeIngPTag = document.createElement('p')
     let recipeInstTag = document.createElement('p')
     let recipeNameTag = document.createElement('h4')
     let recipeEditForm = document.createElement('form')

     recipeEditForm.innerHTML = `<h3>edit recipe</h3>
     <input type="text" name="name" value="" placeholder="Enter a recipe name" class="input-text">
     <br>
     <label style="text-align: center;">ingredients</label>
     <br>
     <textarea type="text-area" name="ingredients" value="" placeholder="Enter the ingredients" class="input-text">
     </textarea>
     <br>
     <label style="text-align: center;">instructions</label>
     <br>
     <textarea type="text-area" name="instructions" value="" placeholder="Enter the instructions" class="input-text">
     </textarea>
     <br>
     <button type="button">Delete</button>
     <input type="submit" name="submit" value="Edit" class="submit">`

     recipeIngPTag.innerText = recipe.ingredients
     recipeInstTag.innerText = recipe.instructions
     
     recipeNameTag.innerText = `${recipe.name}`
     recipeLi.style.listStyle = 'none'

     recipeLi.append(recipeNameTag,recipeIngPTag,recipeInstTag,recipeEditForm)
     recipesUl.append(recipeLi)
 
     recipeEditFetch(recipeEditForm,meal,recipe)
     recipeDeleteFetch(recipeEditForm,meal,recipe,recipeLi)
  })

}


function recipeEditFetch(recipeEditForm,meal,recipe){

  recipeEditForm.addEventListener('submit',(evt) => {
    evt.preventDefault()
    // console.log(evt.target)
    let recipeName = evt.target["name"].value
    let recipeIng = evt.target["ingredients"].value
    let recipeInst = evt.target["instructions"].value
    let id = recipe.id

    fetch(`http://localhost:3000/recipes/${id}`, {
      method:'PATCH',
    headers: { 
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name:recipeName,
      ingredients:recipeIng,
      instructions:recipeInst,
      meal_id:meal.id
      })
    })
    .then(r => r.json())
    .then((editedRecipe) => {
      meal.recipes.pop(recipe)
      meal.recipes.push(editedRecipe)
      recipeFormContainer.innerHTML = '' 
      renderOneMeal(meal)
    })

  })
}


function recipeDeleteFetch(recipeEditForm,meal,recipe,recipeLi){
    let delBtn = recipeEditForm.querySelector('button')
    delBtn.addEventListener('click',(evt) => {
      // recipesUl.innerHTML = ''

        // console.log(evt.target)

      let filteredArr = meal.recipes.filter(r => r.id === recipe.id)

        let id = recipe.id
      
       

        fetch(`http://localhost:3000/recipes/${id}`, {
          method:'DELETE',
         headers: { 
             'Content-type': 'application/json'
         },
         body: JSON.stringify({
          })
        })
        .then(r => r.json())
        .then(() => {
          recipeLi.remove()
          // recipe.remove()
          // recipeIng.remove()
          // recipeInst.remove()
        })

    })
}









// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


