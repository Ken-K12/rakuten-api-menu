// 先程生成したURL (肉のランキング)
let category = document.getElementById('category');
let categoryId = category.value;

const baseUrl = getUrl();
const credentialId = getApplicationId();
console.log(credentialId);

let url = `${baseUrl}?applicationId=${credentialId}&categoryId=${categoryId}`;

function updateText(data) {
    for (let i = 0; i < data.length; i++) {
        let insertHTML = `
        <li>
            <a href="${data[i].recipeUrl}" target="_blank">
                <img src="${data[i].foodImageUrl}" alt="${data[i].recipeTitle} 画像">
            </a>
            <h2>${data[i].recipeTitle}</h2>
            <p>${data[i].recipeDescription}</p>
            <p>${data[i].recipeMaterial}</p>
        </li>
    `;
        $('#recipe_list').append(insertHTML);
    }
}

// API取得
$.getJSON(url, (data) =>{
    const recipes = data.result;
    updateText(recipes);
});

function butotnClick(){

    categoryId = document.getElementById('category').value;
    url = `${baseUrl}?applicationId=${credentialId}&categoryId=${categoryId}`;
    
    $('#recipe_list').empty();

    $.getJSON(url, (data) =>{
        const recipes = data.result;
        updateText(recipes);
    });
}

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);