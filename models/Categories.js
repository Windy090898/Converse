var productCateAPI = 'https://shop.cyberlearn.vn/api/Product/getAllCategory';

getProductByCat(renderDisplay)

function getProductByCat(callback) {
    fetch(productCateAPI)
          .then(response => response.json())
          .then(callback)
}

function renderDisplay(productList) {
 
    let bannerHtml = '';
    productList.content.forEach(product => {
        bannerHtml += `<button class="btn btn-light" onclick="moveToCategoryList('${product.id}')"> 
        Shop ${product.id}
        </button>`
    })

    var banner = document.querySelector('.banner_btn')
    if (banner) {
        banner.innerHTML = bannerHtml
    }
}

function moveToCategoryList(id) {
    localStorage.setItem('categoryId', id)
    window.location.href = `basic.html`
}

