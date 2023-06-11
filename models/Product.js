const productAPI = 'https://shop.cyberlearn.vn/api/Product'
const catID = localStorage.getItem('categoryId');

function start() {
    getProduct(renderDisplay)
}

start()

function getProduct(callback) {
    fetch(productAPI)
        .then(res => res.json())
        .then(callback)
}

function renderDisplay(productList) {
    let html = ''
    productList.content.forEach(product => {
    var productHTML = `
<div class="product_item col-xl-3 col-md-4 col-sm-6">
    <div class="product_img">
        <img src="${product.image}" alt="">
        <img src="${product.image}"" alt="" class="img-top">
    </div>
    <div class="product_overlay">
        <div class="overlay_content">
            <button class="btn btn-outline-dark" id="" onclick="moveToDetail(${product.id})"> Add to cart</button>
        </div>
    </div>
    <div class="item_title">
        <p>${product.name}"</p>
        <h5>$${product.price}"</h5>
        <span>40% OFF | USE CODE: EXTRA40</span>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="" value="option1">
            <label class="form-check-label" for="">first</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="" value="option2">
            <label class="form-check-label" for="">second</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="" value="option3" disabled>
            <label class="form-check-label" for="">disabled</label>
        </div>
    </div>
</div>
    `
        if (catID) {
            var cates = JSON.parse(product.categories)
        
            cates.forEach(cate => {
                if (cate.id == catID) {
                    html += productHTML
                }
            })
        } else {
            html += productHTML
        }
        
    })

    document.querySelector('.product_content .row').innerHTML += html
}

function moveToDetail(id) {
    localStorage.setItem('selectedId', id);
    window.location.href = './detail.html'
}