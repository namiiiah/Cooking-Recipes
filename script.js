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
    {
        id: 2,
        name: "Bánh Mì Thịt",
        servings: 1,
        ingredients: [
            { name: "Bánh mì", amount: 1, unit: "ổ" },
            { name: "Thịt heo quay", amount: 50, unit: "g" },
            { name: "Pate", amount: 20, unit: "g" },
            { name: "Rau sống", amount: 30, unit: "g" },
            { name: "Đồ chua", amount: 30, unit: "g" }
        ],
        instructions: [
            "Cắt đôi bánh mì",
            "Phết pate lên bánh mì",
            "Xếp thịt heo quay, rau sống và đồ chua vào bánh",
            "Thêm tương ớt hoặc xì dầu tùy khẩu vị"
        ],
        nutrition: {
            calories: 400,
            protein: 15,
            carbs: 45,
            fat: 18
        }
    },
    {
        id: 3,
        name: "Gỏi Cuốn",
        servings: 4,
        ingredients: [
            { name: "Bánh tráng", amount: 8, unit: "cái" },
            { name: "Tôm luộc", amount: 200, unit: "g" },
            { name: "Thịt heo luộc", amount: 100, unit: "g" },
            { name: "Bún", amount: 100, unit: "g" },
            { name: "Rau sống", amount: 100, unit: "g" }
        ],
        instructions: [
            "Nhúng bánh tráng vào nước",
            "Xếp tôm, thịt, bún và rau sống lên bánh tráng",
            "Cuốn chặt bánh tráng",
            "Làm nước chấm đậu phộng để ăn kèm"
        ],
        nutrition: {
            calories: 250,
            protein: 18,
            carbs: 30,
            fat: 8
        }
    },
    {
        id: 4,
        name: "Bún Chả",
        servings: 2,
        ingredients: [
            { name: "Bún", amount: 200, unit: "g" },
            { name: "Thịt heo nướng", amount: 200, unit: "g" },
            { name: "Nước mắm pha", amount: 100, unit: "ml" },
            { name: "Rau sống", amount: 100, unit: "g" }
        ],
        instructions: [
            "Nướng thịt heo đã ướp",
            "Pha nước mắm với đường, tỏi, ớt",
            "Trụng bún",
            "Bày bún, thịt nướng, rau sống ra bát và thêm nước mắm"
        ],
        nutrition: {
            calories: 450,
            protein: 25,
            carbs: 55,
            fat: 15
        }
    },
    {
        id: 5,
        name: "Cơm Tấm",
        servings: 1,
        ingredients: [
            { name: "Cơm tấm", amount: 200, unit: "g" },
            { name: "Sườn nướng", amount: 100, unit: "g" },
            { name: "Chả trứng", amount: 50, unit: "g" },
            { name: "Bì", amount: 30, unit: "g" },
            { name: "Nước mắm", amount: 30, unit: "ml" }
        ],
        instructions: [
            "Nướng sườn",
            "Làm chả trứng và bì",
            "Xếp sườn, chả, bì lên cơm tấm",
            "Rưới nước mắm lên trên"
        ],
        nutrition: {
            calories: 650,
            protein: 35,
            carbs: 70,
            fat: 25
        }
    },
    {
        id: 6,
        name: "Bánh Xèo",
        servings: 4,
        ingredients: [
            { name: "Bột bánh xèo", amount: 200, unit: "g" },
            { name: "Tôm", amount: 200, unit: "g" },
            { name: "Thịt heo", amount: 100, unit: "g" },
            { name: "Giá đỗ", amount: 100, unit: "g" },
            { name: "Rau sống", amount: 200, unit: "g" }
        ],
        instructions: [
            "Trộn bột bánh xèo với nước và nghệ",
            "Đổ bột vào chảo nóng",
            "Thêm tôm, thịt, giá đỗ vào bánh",
            "Gập đôi bánh lại khi chín vàng",
            "Ăn kèm với rau sống và nước mắm"
        ],
        nutrition: {
            calories: 300,
            protein: 20,
            carbs: 35,
            fat: 12
        }
    },
    {
        id: 7,
        name: "Chả Giò",
        servings: 6,
        ingredients: [
            { name: "Bánh đa nem", amount: 12, unit: "cái" },
            { name: "Thịt heo xay", amount: 200, unit: "g" },
            { name: "Nấm mèo", amount: 50, unit: "g" },
            { name: "Miến", amount: 50, unit: "g" },
            { name: "Trứng gà", amount: 1, unit: "quả" }
        ],
        instructions: [
            "Trộn thịt heo với nấm mèo, miến đã ngâm",
            "Cuốn nhân vào bánh đa nem",
            "Chiên chả giò trong dầu nóng đến khi vàng giòn",
            "Ăn kèm với nước mắm pha và rau sống"
        ],
        nutrition: {
            calories: 200,
            protein: 10,
            carbs: 25,
            fat: 8
        }
    },
    {
        id: 8,
        name: "Bún Bò Huế",
        servings: 2,
        ingredients: [
            { name: "Bún", amount: 200, unit: "g" },
            { name: "Thịt bò", amount: 150, unit: "g" },
            { name: "Giò heo", amount: 100, unit: "g" },
            { name: "Nước dùng", amount: 600, unit: "ml" },
            { name: "Rau sống", amount: 100, unit: "g" }
        ],
        instructions: [
            "Nấu nước dùng với xương heo và gia vị đặc trưng Huế",
            "Thái thịt bò và giò heo",
            "Trụng bún",
            "Xếp bún, thịt vào tô và chan nước dùng",
            "Ăn kèm với rau sống và ớt sa tế"
        ],
        nutrition: {
            calories: 500,
            protein: 30,
            carbs: 60,
            fat: 15
        }
    },
    {
        id: 9,
        name: "Bánh Cuốn",
        servings: 4,
        ingredients: [
            { name: "Bột gạo", amount: 300, unit: "g" },
            { name: "Thịt heo xay", amount: 200, unit: "g" },
            { name: "Nấm mèo", amount: 50, unit: "g" },
            { name: "Hành khô", amount: 30, unit: "g" },
            { name: "Nước mắm", amount: 50, unit: "ml" }
        ],
        instructions: [
            "Trộn bột gạo với nước thành hỗn hợp lỏng",
            "Xào thịt heo với nấm mèo làm nhân",
            "Tráng một lớp mỏng bột lên khăn đặt trên nồi hấp",
            "Cho nhân vào và cuốn lại",
            "Ăn kèm với nước mắm pha và rau sống"
        ],
        nutrition: {
            calories: 250,
            protein: 15,
            carbs: 35,
            fat: 8
        }
    },
    {
        id: 10,
        name: "Chè Trôi Nước",
        servings: 6,
        ingredients: [
            { name: "Bột nếp", amount: 300, unit: "g" },
            { name: "Đậu xanh", amount: 150, unit: "g" },
            { name: "Đường", amount: 200, unit: "g" },
            { name: "Nước cốt dừa", amount: 200, unit: "ml" },
            { name: "Gừng", amount: 30, unit: "g" }
        ],
        instructions: [
            "Nấu đậu xanh với đường làm nhân",
            "Nhào bột nếp với nước, vo thành viên và nhét nhân vào giữa",
            "Luộc các viên bột trong nước sôi đến khi nổi lên",
            "Nấu nước đường với gừng",
            "Cho các viên bột vào nước đường, thêm nước cốt dừa khi ăn"
        ],
        nutrition: {
            calories: 250,
            protein: 5,
            carbs: 50,
            fat: 5
        }
    }
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