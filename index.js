let mealUl = document.querySelector('#meal-list')
let mainMealDiv = document.querySelector('#main-meal')
let mealImg = document.querySelector('#meal-image')
let mealname = document.querySelector('#meal-name')
let mealKind = document.querySelector('#meal-kind')
let mealDesc = document.querySelector('#meal-description')
let addMealForm = document.querySelector('#add-meal-form')
let mealcardcontainerDiv = document.querySelector('#meal-card-container')

// =================recipes Ul=============================
let recipesUl = document.querySelector('#recipes-list')
// let newRecipeDiv = document.querySelector('#new-recipe-form')
let recipeFormContainer = document.querySelector('#form-container')




function getMeals(){
 
    return fetch('http://localhost:3000/meals')
    .then(res => res.json())

}


function renderMeals(meals){
  
  // let initialimg = document.createElement('img')


    meals.forEach(meal => {
            // create elements
  let mealLi = document.createElement('li')
//    fill in elements 
  mealLi.innerText = meal.name
// set attributes for elements
  mealLi.style.listStyle = 'none'
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
    // console.log(evt.target)

    let nameInput = evt.target["name"].value
    let imageInput = evt.target["image"].value
    let kindInput = evt.target["kind"].value
    let descInput = evt.target["description"].value
    // let ingredInput = evt.target["ingredients"].value
    // let instrInput = evt.target["instructions"].value
    
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
    .then(renderOneMeal)
})




function renderOneMeal(meal){ 
    // =============meal variables====================
    recipesUl.innerHTML = ''
    mealImg.src = meal.image
    mealname.innerText = meal.name
    mealKind.innerText = meal.kind
    mealDesc.innerText = meal.description

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

          recipeIngPTag.innerText = recipe.ingredients
          recipeInstTag.innerText = recipe.instructions
          
          recipeNameTag.innerText = `${recipe.name} dish`
          recipeLi.style.listStyle = 'none'

          recipeLi.append(recipeNameTag,recipeIngPTag,recipeInstTag)
          recipesUl.append(recipeLi)
        })



    // mainMealDiv.append(mealImg,mealname,mealKind,mealDesc)
    // clear out recipes list

        recipeFormContainer.append(newRecipeForm)
          mainMealDiv.append(recipeFormContainer)

          newRecipeForm.addEventListener('submit',(evt) => {
            evt.preventDefault()
            console.log(evt.target)

          //   fetch(`http://localhost:3000/recipes`, {
          //     method:'POST',
          //    headers: { 
          //        'Content-type': 'application/json'
          //    },
          //    body: JSON.stringify({
               
          //     })
          //   })

          // })
 
}




// create_table "recipes", force: :cascade do |t|
//     t.string "name"
//     t.string "ingredients"
//     t.string "instructions"
//     t.bigint "meal_id", null: false
//     t.datetime "created_at", precision: 6, null: false
//     t.datetime "updated_at", precision: 6, null: false
//     t.index ["meal_id"], name: "index_recipes_on_meal_id"
//   end



