document.getElementById('button-content').addEventListener('click',function(){
     
    
    getData(post);
})

 const getData=(dataInfo=>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res=>res.json())
    .then(data=>displayMeal(data.categories))
 
})
        const displayMeal=(meal=>{   
        const mainDiv=document.getElementById('container');
        meal.forEach(mealItem => {
        const mealDiv=document.createElement('div');
        mealDiv.className='meal';
        const mealInfo=`
        <img src="${mealItem.strCategoryThumb}">
        <h3 class="country-container">${mealItem.strCategory}</h3>
       
        
    `
    mealDiv.innerHTML=mealInfo;
    mainDiv.appendChild(mealDiv);

    })
})

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




 




 
 