var categories = [];
var products = [];

const getAllCategories = async () => {
    fetch(
        'http://localhost/website/mrllalyssacto.github.io/projects/ADET/A06_BE/categories.php'
    )
        .then(response => response.json())
        .then(data => {
            categories = data;
            loadCategories();
        });
}

const getAllProducts = async (categoryID) => {
    const categoryData = {
        categoryID: categoryID
    };

    fetch(
        'http://localhost/website/mrllalyssacto.github.io/projects/ADET/A06_BE/products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts();
        });
}

getAllCategories();

var total = 0;


function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    categories.forEach((category) => {
        categoriesContainer.innerHTML += `
            <div onclick="getAllProducts('` + category.categoryID + `')" class="card cardCategory mx-2 p-3 text-center">
                <img src="assets/images/` + category.categoryImage + `" class="category-img mx-auto mb-1" alt='` + category.categoryName + `'>
                <small>`+ category.categoryName + `</small>
            </div>
        `;
    });
}


function loadProducts(categoryID) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products.forEach(product => {
        maincontainer.innerHTML += `
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                        <div onclick="addToReceipt('` + product.productPrice + `', '` + product.productImage + `', '` + product.productName + `')" class="cardCustom mx-2 card p-2 text-center">
                            <img src="assets/images/` + product.productImage + `" class="content-img mx-auto mb-1" alt='` + product.productName + `'>
                            <small class="d-block product-name">` + product.productName + `</small>
                            <small class="d-block product-price">₱` + parseFloat(product.productPrice).toFixed(2) + `</small>
                         </div>
                    </div>
                 `;
    });
}

function addToReceipt(price, image, name) {
    var receiptContainer = document.getElementById("receipt");
    total = parseFloat(total) + parseFloat(price);

    totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = total.toFixed(2);

    receiptContainer.innerHTML += `
    <div class="card mb-2 p-2">
        <div class="row text-center text-sm-start align-items-center">
            <div class="col-12 col-sm-2 mb-2 mb-sm-0 d-flex justify-content-center">
                <img src="assets/images/` + image + `" class="me-2" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px;">
            </div>
            <div class="col-12 col-sm-6 mb-2 mb-sm-0">
                <small>` + name + `</small>
            </div>
            <div class="col-12 col-sm-4">
                <small>₱` + parseFloat(price).toFixed(2) + `</small>
            </div>
        </div>
    </div>
`;
}