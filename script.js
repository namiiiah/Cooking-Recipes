// Dữ liệu mẫu
const recipes = [
    {
        id: 1,
        name: "Phở Bò",
        servings: 2,
        ingredients: [
            { name: "Bánh phở", amount: 200, unit: "g" },
            { name: "Thịt bò", amount: 100, unit: "g" },
            { name: "Hành tây", amount: 50, unit: "g" },
            { name: "Nước dùng", amount: 500, unit: "ml" }
        ],
        instructions: [
            "Nấu nước dùng với xương bò và gia vị",
            "Trụng bánh phở",
            "Xếp thịt bò và hành tây lên trên bánh phở",
            "Chan nước dùng nóng vào tô"
        ],
        nutrition: {
            calories: 350,
            protein: 20,
            carbs: 50,
            fat: 10
        }
    },
    // Thêm các công thức khác ở đây
];

let currentRecipe = null;

// Hàm tìm kiếm công thức
function searchRecipes(query) {
    return recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(query.toLowerCase()))
    );
}

// Hàm hiển thị danh sách công thức
function displayRecipes(recipeList) {
    const recipeListElement = document.getElementById('recipe-list');
    recipeListElement.innerHTML = '';
    recipeList.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe.name;
        li.onclick = () => displayRecipeDetails(recipe);
        recipeListElement.appendChild(li);
    });
}

// Hàm hiển thị chi tiết công thức
function displayRecipeDetails(recipe) {
    currentRecipe = recipe;
    const detailsSection = document.getElementById('recipe-details');
    const titleElement = document.getElementById('recipe-title');
    const contentElement = document.getElementById('recipe-content');

    titleElement.textContent = recipe.name;
    contentElement.innerHTML = `
        <h3>Nguyên liệu (cho ${recipe.servings} người):</h3>
        <ul>${recipe.ingredients.map(ing => `<li>${ing.amount} ${ing.unit} ${ing.name}</li>`).join('')}</ul>
        <h3>Hướng dẫn:</h3>
        <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
        <h3>Thông tin dinh dưỡng:</h3>
        <p>Calories: ${recipe.nutrition.calories}, Protein: ${recipe.nutrition.protein}g, Carbs: ${recipe.nutrition.carbs}g, Fat: ${recipe.nutrition.fat}g</p>
    `;

    detailsSection.style.display = 'block';
}

// Hàm lưu công thức yêu thích
function saveFavorite(recipe) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.id === recipe.id)) {
        favorites.push(recipe);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Đã lưu vào danh sách yêu thích!');
    } else {
        alert('Công thức này đã có trong danh sách yêu thích!');
    }
}

// Hàm điều chỉnh kích cỡ phần ăn
function adjustServings(recipe, newServings) {
    const factor = newServings / recipe.servings;
    const adjustedRecipe = {
        ...recipe,
        servings: newServings,
        ingredients: recipe.ingredients.map(ing => ({
            ...ing,
            amount: Math.round(ing.amount * factor * 10) / 10
        }))
    };
    displayRecipeDetails(adjustedRecipe);
}

// Xử lý sự kiện tìm kiếm
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    const results = searchRecipes(query);
    displayRecipes(results);
});

// Xử lý sự kiện lưu yêu thích
document.getElementById('favorite-button').addEventListener('click', () => {
    if (currentRecipe) {
        saveFavorite(currentRecipe);
    }
});

// Xử lý sự kiện điều chỉnh khẩu phần
document.getElementById('adjust-servings').addEventListener('click', () => {
    if (currentRecipe) {
        const newServings = parseInt(document.getElementById('servings-input').value);
        if (newServings > 0) {
            adjustServings(currentRecipe, newServings);
        }
    }
});

// Hiển thị tất cả công thức khi trang được tải
window.onload = () => {
    displayRecipes(recipes);
    // Hiển thị danh sách yêu thích
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');
    favorites.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe.name;
        li.onclick = () => displayRecipeDetails(recipe);
        favoritesList.appendChild(li);
    });
};