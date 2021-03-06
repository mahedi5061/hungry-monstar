     const searchField=()=>{
     const inputValue=document.getElementById('input-content').value;
   
        if(inputValue==''){
             
            const emptyItem=document.getElementById('empty-item');
            emptyItem.innerText='Please Select a item to Search.';
            
        }
        else{
            if(inputValue.length<2 && inputValue.length>0){
                firstNameData(inputValue);    //This function is called firstName search API.
            }
            else{
                fullNameData(inputValue);  //This function is called fullName search API.
            }
               
        }
    }
    

 // This function is for fullName search data result.

        const fullNameData=(fullNameMeal=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${fullNameMeal}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
         displayMeal(data.meals);      

        })
        .catch(error => errorDisplay('Something went to wrong!!'))  //handle the error message.
 })


//This function is for firstName search data result.

 const firstNameData=(firstNameMeal=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstNameMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
    displayMeal(data.meals)
   
})
    .catch(error => errorDisplay('Something went to wrong!!')) //handle the error message.
})


//This display function.
    const displayMeal=(mealItem=>{ 
    const mainDiv=document.getElementById('container');
    document.getElementById('empty-item').innerText=''; 
    mainDiv.innerHTML='';
    mealItem.forEach(meal => {
    const mealDiv=document.createElement('div');
    mealDiv.className='meal';
    const mealInfo=`
        <img onClick="displayMealDetails('${meal.idMeal}')" class="common-container" src="${meal.strMealThumb}">
        <h4 onClick="displayMealDetails('${meal.idMeal}')" class="common-container">${meal.strMeal}</h4>
            
    `;
    mealDiv.innerHTML=mealInfo;
    mainDiv.appendChild(mealDiv);
    document.getElementById('input-content').value='';   
    })
    
    
    
})
//This is single meals Api function.

 const displayMealDetails=(mealsInfo=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsInfo}`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>{
        displayRenderMealDetails(data.meals[0]);
     })
})
//This is single meals results & Ingredients results.
const displayRenderMealDetails=(info=>{
    const detailsDiv=document.getElementById('details-info');
    const detailsInfo=`
        <img src="${info.strMealThumb}">
        <h1>${info.strMeal}</h1>
        <h4>Ingredients</h4>
        <ul><li>${info.strIngredient1}</li>
        <li>${info.strIngredient2}</li>
        <li>${info.strIngredient3}</li>
        <li>${info.strIngredient4}</li>
        <li>${info.strIngredient5}</li>
        <li>${info.strIngredient6}</li>
        <li>${info.strIngredient7}</li>
        <li>${info.strIngredient8}</li>
        <li>${info.strIngredient9}</li>
        <li>${info.strIngredient10}</li>

        </ul>
    `;
    detailsDiv.innerHTML=detailsInfo;
    document.getElementById('container').style.display="none";
    firstNameData(inputValue);
       
})
//This function is to handle the error message.
const errorDisplay=(error=>{
    const errorMassage=document.getElementById('error-msg');
    const errorDisplay= error;
})
 



 
 