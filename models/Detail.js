const productAPI = 'https://shop.cyberlearn.vn/api/Product';
var id = localStorage.getItem('selectedId');
function start() {
    getProduct(renderDisplay)
    getProduct(handleRelatedProduct);
}

start()

function getProduct(callback) {
    fetch(productAPI)
        .then(res => res.json())
        .then(callback)
}

function renderCateList(item) {
    var catHtml = "";
    var cates = JSON.parse(item.categories)
    cates.forEach(item => {
        catHtml += `
            <li><a href="#">${item.category}</a></li>
        `
    })
    return catHtml;
}

function renderDisplay(productList) {
        var selectedProduct = productList.content.find(product => product.id == id)
        var sizeHtml = "";
        var sizes = JSON.parse(selectedProduct.size)

        // Product Image
        document.querySelector('.main_img').src = selectedProduct.image

        // Product Name, price, description
        var catHtml = renderCateList(selectedProduct)
        var productInfoHtml = `
        <h3>${selectedProduct.name}</h3>
        <p class="product_price">€ ${selectedProduct.price}</p>
        <div class="product_cat">
        <ul>
        ${catHtml}
        </ul>
        </div>
        <div class="product_rate">
            <a href="">
                <span class="rate_star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>
                4 Stars
                <!-- <a href=""></a> -->
            </a>     
        </div>
        <p class="product_desc">${selectedProduct.description}<a href="#">More Info</a></p>
        `
        document.querySelector('.detail_product .product_content').innerHTML = productInfoHtml

        // Color options img
        var colorImgs = document.querySelectorAll('.color_img img');
        colorImgs.forEach(colorImg => {
            colorImg.src = selectedProduct.image
        })

        // Product Size
        sizes.forEach(size => {
            sizeHtml += `<option value="${size}">EU ${size}</option>`
        })

        document.querySelector('.detail_product .product_size #size_options').innerHTML += sizeHtml

        // Add to cart list
        document.querySelector('.cart_like .cart').onclick = function(id) {
            // localStorage.setItem('selectedId', id)
            // window.location.href = 'cart.html'
        }

        // Product like 
        var productLike = document.querySelector('.product_like')
        productLike.onclick = function() {
            productLike.classList.toggle('active')
        }
    
}

function handleRelatedProduct(productList) {
    var selectedProduct = productList.content.find(product => product.id == id)
    var relatedProductIds = JSON.parse(selectedProduct.relatedProducts)
    var relatedHtml = "";
    relatedProductIds.forEach(relatedId => {
        var relatedItem = productList.content.find(product => product.id == relatedId);
        var catHtml = renderCateList(relatedItem);
        relatedHtml += `<div class="rec_item">
            <div class="rec_img">
                <img src="${relatedItem.image}" alt="">
            </div>
            <div class="rec_text">
                <a href="">${relatedItem.name}</a>
                <p class="price">$${relatedItem.price}</p>
                <div class="category">
                <ul>
                ${catHtml}
                </ul>
                </div>
            </div>
        </div>`
    })
    
    document.querySelector('.rec_list').innerHTML = relatedHtml;
}

// function addToCart()

document.getElementById('size_options').onchange = function(e) {
    var addtoCartBtn = document.querySelector('.cart')
    addtoCartBtn.disabled = false;
    addtoCartBtn.classList.add('active');
}
