const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href='./assets/css/header.css'>
<header>
<section class="title ">
    <div class="countryside">
        <a href=""> <img src="./assets/img/logo vietnam.png" alt=""></a>
    </div>
    <div class="content">
        <span>CONVERSE VIET NAM|
            <a href="./basic.html">Shop Now</a>
        </span>
    </div>
</section>
<nav id="site-header" class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">
            <img src="./assets/img/iconlogo.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav"></div>
            <div class="account_item d-flex">
                <a href="./register.html" class="me-3 signUp">Sign Up</a>
                <a href="./register.html" class="me-3" ><i
                        class="fa-solid fa-user-large"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></i></a>
            </div>
            <div class="account_search">
                <ul class="navbar-nav box">
                    <div class="search-box">
                        <form class="d-flex position-relative" role="search">
                            <div class="input-search">
                                <input class="form-control" type="search" placeholder="search"
                                    required="required" autofocus class="search-popup">
                            </div>
                            <button type="submit" class="btn search-btn">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </ul>
            </div>

        </div>

    </div>
</nav>
</header>
`

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        const bootstrap = document.querySelectorAll('link[href*="bootstrap"]');
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const shadowRoot = this.attachShadow({ mode: 'open' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
          }

        if (bootstrap) {
            for (var item of bootstrap) {
                shadowRoot.appendChild(item.cloneNode());
            }
        }

        shadowRoot.appendChild(headerTemplate.content);
    }
  }
  
  customElements.define('header-component', Header);

// Header on top when scrolling down
window.addEventListener('scroll', function() {
    var headerComponent = document.querySelector('header-component');
    var shadowRoot = headerComponent.shadowRoot;
    var scroll = $(window).scrollTop(); 
    var header = shadowRoot.querySelector('#site-header');
    
    if (scroll >= 30) {
        header.classList.add('nav-fixed');
    } else {
        header.classList.remove('nav-fixed');
    }
})

var productCateAPI = 'https://shop.cyberlearn.vn/api/Product/getAllCategory';
var headerComponent = document.querySelector('header-component');
var shadowRoot = headerComponent.shadowRoot;
var headerNav = shadowRoot.querySelector('.collapse .navbar-nav')

// Update user name when user sign up/ login

renderUser()

function renderUser() {
    var user = JSON.parse(localStorage.getItem('userSignup'));
    if (user) {
        var headerUser = shadowRoot.querySelector('.signUp')
        headerUser.innerHTML = user.name
    }
}


// Product Display by category in header
getProductByCat(renderDisplay)

function getProductByCat(callback) {
    fetch(productCateAPI)
          .then(response => response.json())
          .then(callback)
}

function renderDisplay(productList) {
    let headerCat = '';
    
    productList.content.forEach(product => {
        headerCat += `<a class="nav-link nav-item-${product.id}" onclick="moveToCategoryList('${product.id}')">${product.id}</a>`
    })

    // Header category display
    headerNav.innerHTML = headerCat

    // Add active class for category onclick
    var id = localStorage.getItem('categoryId')
    if (id) {
        var navItem = headerNav.querySelector('.nav-item-'+id)
        if (navItem) {
            navItem.classList.add('active')
        }
    }
   
}

function moveToCategoryList(id) {
    localStorage.setItem('categoryId', id)
    window.location.href = `basic.html`
}

if (window.location.pathname === '/index.html') {
    localStorage.removeItem('categoryId');
}





