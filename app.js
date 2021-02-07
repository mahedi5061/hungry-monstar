    document.getElementById('button-content').addEventListener('click',function(){
        const inputValue=document.getElementById('input-content').value;
        
        fullNameData(inputValue); //This function is called fullName search API.
        firstNameData(inputValue); //This function is called firstName search API.

    })

 // This function is for fullName search data result.

        const fullNameData=(fullNameMeal=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${fullNameMeal}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
        displayMeal(data.meals)
        // if(mealName !=data.meals[0].strMeal){
        //     alert('This item is not available');
        // }
})
 })


//This function is for firstName search data result.

 const firstNameData=(firstNameMeal=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstNameMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayMeal(data.meals)
    // if(mealName !=data.meals[0].strMeal){
    //     alert('This item is not available');
    // }
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
        <p>${info.strInstructions}</p>
    `;
    detailsDiv.innerHTML=detailsInfo;
     
})



 
 