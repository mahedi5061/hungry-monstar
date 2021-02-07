    document.getElementById('button-content').addEventListener('click',function(){
        const inputValue=document.getElementById('input-content').value;
        fullNameData(inputValue); //This function is called fullName search API.
        firstNameData(inputValue); //This function is called firstName search API.
        
         
    })

    //This function is for fullName search data result.

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
        <img src="${meal.strMealThumb}">
        <h4 class="country-container">${meal.strMeal}</h4>
            
    `
    mealDiv.innerHTML=mealInfo;
    mainDiv.appendChild(mealDiv);

    })
})

// const displayMealsDetails=(mealsInfo=>{
//     const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata${mealsInfo}`;
//      fetch(url)
//      .then(res=>res.json())
//      .then(data=>displayRenderDetails(data.meals))
// })

// const displayCountriesDetails=(countriesInfo=>{
//     const url=`https://restcountries.eu/rest/v2/name/${countriesInfo}`;
//      fetch(url)
//      .then(res=>res.json())
//      .then(data=>displayRenderDetails(data[0]))
// })

// const displayRenderDetails=(info=>{
//     const detailsDiv=document.getElementById('details');
//     const detailsInfo=`
//         <h1 class="country-container">${info.name}</h1>
//         <p class="capital-container">Population: ${info.population}</p>
//         <p class="capital-container">Area: ${info.area}</p>
//         <img src="${info.flag}">
//     `;
//     detailsDiv.innerHTML=detailsInfo;
     
// })




 




 
 