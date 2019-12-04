// // ============meal tags==========================
let foodListUl = document.querySelector('#food-list')
let foodImgTag = document.querySelector('#food-image')
let foodNameH4 = document.querySelector('#food-name')
let foodDescPTag = document.querySelector('#food-description')
let addMealform = document.querySelector('.add-meal-form')
let editMealform = document.querySelector('.edit-meal-container')
let foodMainDiv = document.getElementById("main-food")
let deleteMealbutton = document.querySelector('#delete-button')
// ================recipe tags====================================
let recipesUl = document.querySelector('#recipes-list')
let editRecipeForm = document.querySelector('.edit-recipe-form')
let addRecipeForm = document.querySelector('.add-recipe-form')

// ==============refactor with gracie====================
// fetch("http://localhost:3000/meals")
// .then(res => res.json())
// .then((mealArr) => {
//     mealArr.forEach((meal) => {
        
//         let mealLi = document.createElement('li')
//         mealLi.innerText = meal.name
//         mealLi.addEventListener('click', () => {
//             foodMainDiv.innerHTML = ''
//              showOneMeal(meal)
         

//         })
//         foodListUl.append(mealLi)
        
//     })
    
// })

// function showOneMeal(meal){
//     // console.log(meal);
     
  
//    let mealNameTag = document.createElement('h4')
//    let mealImgTag = document.createElement('img')
//    let mealKindTag = document.createElement('h5')
//    let mealDescTag = document.createElement('p')
//    let editMealForm = document.createElement('div')
  
//    mealNameTag.innerText = meal.name
//    mealImgTag.src = meal.image
//    mealKindTag.innerText = meal.kind 
//    mealDescTag.innerText = meal.description
   
// //    editMealForm.innerHTML = `<form class="edit-meal-form" style="">
// //    <h3>edit ${meal.name}</h3>
       
// //    <input type="text" name="name" value="" placeholder="${meal.name}" class="input-text">
// //    <br>
               
// //    <input type="text" name="image" value="" placeholder="${meal.image}" class="input-text">
// //    <br>
   
// //    <input type="text" name="kind" value="" placeholder="${meal.kind}" class="input-text">
// //    <br>
   
// //    <label>description</label>
// //    <br>
   
// //    <textarea type="text-area" name="description" value="" placeholder="${meal.description}" class="input-text">
// //    </textarea>
// //    <br>
   
// //    <input type="submit" name="submit" value="edit meal" class="submit"></input> 

// //    <button type="button" id="edit-button">delete</button>
   
   
               
// //    </form>`




// meal.recipes.forEach((recipe) => {
//     // console.log(recipe)
    
//     recipesUl.innerHTML = ''
//     let nameLi = document.createElement('li')
//     let ingredientsH4 = document.createElement('h4')
//     let instructionsH5 = document.createElement('h5')

//     nameLi.innerText = recipe.name
//     ingredientsH4.innerText = recipe.ingredients
//     instructionsH5.innerText = recipe.instructions

//     recipesUl.append(nameLi,ingredientsH4,instructionsH5,addRecipeForm,editRecipeForm)

// })


// foodMainDiv.append(foodImgTag,foodNameH4,foodDescPTag,editMealform,recipesUl,addRecipeForm)


// // ========================================


//    foodMainDiv.append(mealNameTag,mealImgTag,mealKindTag,mealDescTag, editMealForm)


// }

// //<input type="submit" name="submit" value="edit meal" class="submit"></input> 




// addMealform.addEventListener('submit',(evt)=>{
//     evt.preventDefault()
//     createMeal(evt)
// })



// function createMeal(evt){
//     let mealName = evt.target["name"].value
//     let mealImage = evt.target["image"].value
//     let mealKind = evt.target["kind"].value
//     let mealDesc = evt.target["description"].value 

//    fetch(`http://localhost:3000/meals`, {
//    method:'POST',
//    headers: { 
//     'Content-type': 'application/json'
//    },
//    body: JSON.stringify({
//       name: mealName,
//       image: mealImage,
//       kind: mealKind,
//       description: mealDesc
//     })
//   })
//   .then(res => res.json())
//   .then((food) => {
//    let foodLi = document.createElement('li')
//    foodLi.style.listStyle = 'none'
//    foodLi.className = "food-list-item"
//    foodLi.innerText = food.name

//     foodListUl.append(foodLi)

//  })

// }


// editMealform.addEventListener('submit',(evt)=>{
//      evt.preventDefault()
//     console.log(evt.target)
//     let mealName = evt.target["name"].value
//     let mealImage = evt.target["image"].value
//     let mealKind = evt.target["kind"].value
//     let mealDesc = evt.target["description"].value


//   fetch(`http://localhost:3000/meals/${meal.id}`, {
//         method:'PATCH',
//         headers: { 
//       'Content-type': 'application/json'
//       },
//         body: JSON.stringify({
//         name: mealName,
//         image: mealImage,
//         kind: mealKind,
//         description: mealDesc
//        })
//    })
//     .then(res => res.json())
//     .then((food) => {
//     //   console.log(food)
//      foodLi.style.listStyle = 'none'
//      foodLi.className = "food-list-item"
//      foodLi.innerText = food.name

//      foodImgTag.src = food.image
//      foodNameH4.innerText = food.name
//      foodDescPTag.innerText = food.description 
      
     
//    })//end of second .then for editMealForm 

// })


// function editMealFormFunction(evt){    
//     console.log(evt.target)
//     let mealName = evt.target["name"].value
//     let mealImage = evt.target["image"].value
//     let mealKind = evt.target["kind"].value
//     let mealDesc = evt.target["description"].value


//   fetch(`http://localhost:3000/meals/${meal.id}`, {
//         method:'PATCH',
//         headers: { 
//       'Content-type': 'application/json'
//       },
//         body: JSON.stringify({
//         name: mealName,
//         image: mealImage,
//         kind: mealKind,
//         description: mealDesc
//        })
//    })
//     .then(res => res.json())
//     .then((food) => {
//     //   console.log(food)
//      foodLi.style.listStyle = 'none'
//      foodLi.className = "food-list-item"
//      foodLi.innerText = food.name

//      foodImgTag.src = food.image
//      foodNameH4.innerText = food.name
//      foodDescPTag.innerText = food.description 
      
     
//    })//end of second .then for editMealForm 

// }
// =================refactor with gracie above=========================================

// ==================== the mad man code below =====================================
let selectedFoodId;

fetch("http://localhost:3000/meals")
.then(res => res.json())
.then((foodArr) => {
    foodArr.forEach((food) => {

        
  // ===================recipes rendered for each meal=====================================
    recipesUl.innerHTML = ''

    food.recipes.forEach(recipe => {


    let nameLi = document.createElement('li')
    let ingredientsH4 = document.createElement('h4')
    let instructionsH5 = document.createElement('h5')

    nameLi.innerText = recipe.name
    ingredientsH4.innerText = recipe.ingredients
    instructionsH5.innerText = recipe.instructions


    recipesUl.append(nameLi, ingredientsH4, instructionsH5)

    
    
   })

       
   //========================Read functionality below========================================

        let foodLi = document.createElement('li')
        foodLi.id = food.id
        foodLi.style.listStyle = 'none'

      
         foodImgTag.src = food.image
         foodNameH4.innerText = food.name
         foodDescPTag.innerText = food.description
  
      

        foodLi.className = "food-list-item"
        foodLi.innerText = food.name
        foodListUl.append(foodLi)

        
    foodLi.addEventListener('click',(evt)=>{
        selectedFoodId = food.id
        console.log(evt.target)
         recipesUl.innerHTML = ''
         foodMainDiv.innerText = ""
         fetch(`http://localhost:3000/meals/${food.id}`)
         .then(res => res.json())
         .then((food2) => {
            
            foodImgTag.src = food.image
            foodNameH4.innerText = food.name
            foodDescPTag.innerText = food.description       
            
            addRecipeForm.addEventListener('submit',(evt)=>{
                evt.preventDefault()
                
                let userRecipeName = evt.target["name"].value
                let userRecipeIngredients = evt.target["ingredients"].value
                let userRecipeInstructions = evt.target["instructions"].value

                recipesUl.innerHTML = ''

                fetch(`http://localhost:3000/recipes`, {
                  method:'POST',
                 headers: { 
                     'Content-type': 'application/json'
                 },
                 body: JSON.stringify({
                     name: userRecipeName,
                     ingredients: userRecipeIngredients,
                     instructions: userRecipeInstructions,
                     meal_id: food.id
                  })
                })
                .then(res => res.json())
                .then((newRecipe) => {
                     
                    console.log(newRecipe)
                    
                
                    let newRecipeLi = document.createElement('li')
                    let newingredientsH4 = document.createElement('h4')
                    let newinstructionsH5 = document.createElement('h5')

                    newRecipeLi.innerText = newRecipe.name
                    newingredientsH4.innerText = newRecipe.ingredients
                    newinstructionsH5.innerText = newRecipe.instructions
                    
                    

                    food.recipes.push(newRecipe)
                
                    recipesUl.append(newRecipeLi,newingredientsH4,newinstructionsH5,editMealform)

                })
                
                
            })


            food.recipes.forEach((recipe) => {
                // console.log(recipe)
                
                recipesUl.innerHTML = ''
                let nameLi = document.createElement('li')
                let ingredientsH4 = document.createElement('h4')
                let instructionsH5 = document.createElement('h5')

                nameLi.innerText = recipe.name
                ingredientsH4.innerText = recipe.ingredients
                instructionsH5.innerText = recipe.instructions

                recipesUl.append(nameLi,ingredientsH4,instructionsH5,addRecipeForm)

            })


            foodMainDiv.append(foodImgTag,foodNameH4,foodDescPTag,editMealform,recipesUl,addRecipeForm)
     
        // =======================================================================
    

      // ============update meal functionality below=======================

       editMealform.addEventListener('submit',(evt) => {
        evt.preventDefault()
       
        let mealName = evt.target["name"].value
        let mealImage = evt.target["image"].value
        let mealKind = evt.target["kind"].value
        let mealDesc = evt.target["description"].value
    
        fetch(`http://localhost:3000/meals/${food.id}`, {
        method:'PATCH',
        headers: { 
         'Content-type': 'application/json'
        },
        body: JSON.stringify({
           name: mealName,
           image: mealImage,
           kind: mealKind,
           description: mealDesc
         })
       })
       .then(res => res.json())
       .then((food) => {
        console.log(food)
        foodLi.style.listStyle = 'none'
        foodLi.className = "food-list-item"
        foodLi.innerText = food.name

        foodImgTag.src = food.image
        foodNameH4.innerText = food.name
        foodDescPTag.innerText = food.description 
        console.log(food)
    }) // end of the second .then for food post fetch
        
    })//end of editMealForm event listener

    
   //   ===========delete functionality========== 

    // deleteMealbutton.addEventListener('click',(evt) => {
          
    //     // foodMainDiv.innerText = ""

    //    fetch(`http://localhost:3000/meals/${food.id}`,{
    //        method: "DELETE"
    //    })
    //    .then(res => res.json())
    //    .then((response) => {
    //        console.log(foodLi)
    //        foodListUl.removeChild(foodLi)
    //        foodMainDiv.innerHTML = ""
    //    })
       
    //   })
    


   }) // closing tag for the second .then of the second fetch

  }) // closing tag for first event listener

 }) // end of the first forEach for foodArr

}) //closing tag for second .then of first fetch


// function deleteFunction(food){
    deleteMealbutton.addEventListener('click',(evt) => {
          
        // foodMainDiv.innerText = ""
    
       fetch(`http://localhost:3000/meals/${selectedFoodId}`,{
           method: "DELETE"
       })
       .then(res => res.json())
       .then((response) => {
           console.log(foodLi)
           foodListUl.removeChild(foodLi)
           foodMainDiv.innerHTML = ""
       })
       
      })
// }


  // =================food or meal create functionality below===============

     addMealform.addEventListener('submit',(evt) => {
    evt.preventDefault()
    // console.log(evt.target)
    let mealName = evt.target["name"].value
    let mealImage = evt.target["image"].value
    let mealKind = evt.target["kind"].value
    let mealDesc = evt.target["description"].value

    fetch(`http://localhost:3000/meals`, {
    method:'POST',
    headers: { 
     'Content-type': 'application/json'
    },
    body: JSON.stringify({
       name: mealName,
       image: mealImage,
       kind: mealKind,
       description: mealDesc
     })
   })
   .then(res => res.json())
   .then((food) => {
    let foodLi = document.createElement('li')
    foodLi.style.listStyle = 'none'
    foodLi.className = "food-list-item"
    foodLi.innerText = food.name

     foodListUl.append(foodLi)

      foodLi.addEventListener('click',()=>{
    
      foodMainDiv.innerText = ""
      fetch(`http://localhost:3000/meals/${food.id}`)
       .then(res => res.json())
       .then((food) => {
          
        foodImgTag.src = food.image
        foodNameH4.innerText = food.name
        foodDescPTag.innerText = food.description

        foodMainDiv.append(foodImgTag,foodNameH4,foodDescPTag,editMealform)

        
      }) // closing tag for the second .then of the second fetch

    })//closing tag of foodLi eventlistener

   }) // end of the second .then for food post fetch
    
})//end of addMealForm event listener

// ===========================================================================
