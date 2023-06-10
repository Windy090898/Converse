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
            <div class="navbar-nav">
                
            </div>
            <div class="account_item d-flex">
                <button data-toggle="modal" data-target="#myModal"><a class="me-3">Sign Up</a></button>
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

<!-- The Modal -->
<div class="modal fade" id="myModal">
 <div class="modal-dialog">
     <div class="modal-content " style=" border-radius:0">
         <header class="head-form mb-0">
             <h2 id="header-title" class="py-2 ps-4"
                 style="font-size:larger ; text-decoration: underline;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                 Sign up</h2>

             <h3 id="header-title" class="py-1 ps-4"
                 style="font-size:large; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                 Almost there.</h3>

         </header>
         <!-- Modal Header -->
         <!-- 	<div class="modal-header">
         <h4 class="modal-title" id="modal-title">Modal Heading</h4>
         <button type="button" class="close" data-dismiss="modal">&times;</button>
     </div> -->

         <!-- Modal body -->
         <div class="modal-body">
             <form role="form">                       
                 <!-- email -->
                 <div class="form-group">
                     <div class="input-group">
                         <div class="input-group-prepend">
                             <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                         </div>
                         <input type="email" name="email" id="email" class="form-control input-sm"
                             placeholder="Email">
                     </div>

                     <span class="sp-info" id="notifyEmail"></span>
                 </div>
                 <!-- name -->
                 <div class="form-group">
                     <div class="input-group">
                         <div class="input-group-prepend">
                             <span class="input-group-text"><i class="fa fa-address-book"></i></span>
                         </div>
                         <input type="name" name="name" id="name" class="form-control input-sm"
                             placeholder="Name">
                     </div>
                     <span class="sp-info" id="notifyName"></span>
                 </div>
                 <!-- number phone -->
                 <div class="form-group">
                     <div class="input-group">
                         <div class="input-group-prepend">
                             <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                         </div>
                         <input type="phone" name="phone" id="phone" class="form-control input-sm"
                             placeholder="Number phone">
                     </div>
                     <span class="sp-info" id="notifyNumberPhone"></span>
                 </div>
                 <!-- GENDER  -->
                 <div class="form-group">
                     <div class="input-group">
                         <div class="input-group-prepend">
                             <span class="input-group-text"><i class="fa-solid fa-transgender"></i></span>
                         </div>
                         <select class="form-control" id="chucvu">
                             <option value="">Gender</option>
                             <option value="Male">Male</option>
                             <option value="Female">Female</option>
                             <option value="Do not specify">Do not specify</option>
                         </select>
                     </div>

                     <span class="sp-info" id="notifyGender"></span>
                 </div>
                 <!-- PASSWORD  -->
                 <div class="form-group">
                     <div class="input-group">
                         <div class="input-group-prepend">
                             <span class="input-group-text"><i class="fa fa-key"></i></span>
                         </div>
                         <input type="password" name="password" id="password" class="form-control input-sm"
                             placeholder="Password">
                     </div>
                     <div class="screen">
                         <p class=" font-italic"
                             style="font-size: 12px; font-weight: 200; padding:10px 0 10px 20px ;">8 characters
                             minimum
                             <br>One number
                             <br>At least 1 special character(s) - [$%/(){}=?!.,-_*+~#]
                             <br>One lowercase character
                             <br>One uppercase character
                         </p>
                     </div>
                     <span class="sp-info" id="notifyPassWord"></span>
                 </div>
                 <!-- CONFIRM PASSWORD  -->
                 <div class="form-group">
                     <div class="input-group">
                         <div class="input-group-prepend">
                             <span class="input-group-text"><i class="fa fa-key"></i></span>
                         </div>
                         <input type="password" name="password" id="password" class="form-control input-sm"
                             placeholder="Confirm password">
                     </div>
                     <span class="sp-info" id="notifyConfirm"></span>
                 </div>


             </form>
         </div>
         <!-- Modal footer -->
         <div class="modal-footer align-items-center text-center" id="modal-footer">
             <button id="btnAddMember" type="button" class="btn btn-outline-dark"
                 style="border-radius: 0; padding: 5px 40px;">Sign Up</button>
            <button id="btnClose" type="button" class="btn btn-outline-danger"
            data-dismiss="modal">Close</button>
         </div>
     </div>
 </div>
</div>

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



