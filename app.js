    document.getElementById('button-content').addEventListener('click',function(){
        const inputValue=document.getElementById('input-content').value;

        if(inputValue==''){
            alert('please select an item');
        }
        else{
            if(inputValue.length<2 && inputValue.length>0){
                firstNameData(inputValue);    //This function is called firstName search API.
            }
            else{
                fullNameData(inputValue);  //This function is called fullName search API.
            }
               
        }
        
    })

 // This function is for fullName search data result.

        const fullNameData=(fullNameMeal=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${fullNameMeal}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
         displayMeal(data.meals);
         
})
 })


//This function is for firstName search data result.

 const firstNameData=(firstNameMeal=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstNameMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
    displayMeal(data.meals)
   
})
})



    const displayMeal=(mealItem=>{ 
    const mainDiv=document.getElementById('container');
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

 const displayMealDetails=(mealsInfo=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsInfo}`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>{
        displayRenderMealDetails(data.meals[0]);
     })
})

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
       
})

 



 
 