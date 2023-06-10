const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="./assets/css/bootstrap.min.css">
<link rel="stylesheet" href='./assets/css/footer.css'>
<footer>
    <div class="footer_top row">
        <div class="top col-sm-6 col-md-6 col-xl-3 ">
            <a href="#"><i class="fa-solid fa-gifts"></i></a>
            <h4>Free Express Delivery <br> Over $75</h4>
        </div>
        <div class="top col-sm-6  col-md-6 col-xl-3">
            <a href="#"><i class="fa-solid fa-person-walking-arrow-loop-left"></i></a>
            <h4>Worry-Free Returns</h4>
            <p>If you’re not satisfied, simply return your order within 30 days.</p>
        </div>
        <div class="top col-sm-6  col-md-6 col-xl-3">
            <a href="#"><i class="fa-regular fa-square-caret-right"></i></a>
            <h4>Converse Gift Card</h4>
            <p>Give them exactly what they want with a Converse Gift Card.</p>
        </div>
        <div class="top col-sm-6  col-md-6 col-xl-3">
            <a href="#"> <i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"> <i class="fa-brands fa-instagram"></i></a>
            <h4>Follow Us</h4>
            <p>Stay up-to-date with us for exclusive previews of the newest launches and more.</p>
        </div>
    </div>
    <div class="footer_middle row">
        <div class="middle col-sm-6  col-md-6 col-xl-3  ">
            <h5>Never Miss a Beat</h5>
            <p>Don’t miss the latest news on product launches, collabs and more.</p>
            <div class="input-group w-100 text-center ">
                <input type="text" class="form-control" id="email" placeholder="input email">
                <button class="btn btn-outline-dark " id=""><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        <div class="middle  col-sm-6  col-md-6 col-xl-3">
            <div style="margin-bottom: 12px; ">
                <a href="#" style="font-weight: 500;">Find a Store</a>
                <br> <a href="#" style="font-weight: 500;"> Shop Gift Cards </a>
                <br> <a href="#" style="font-weight: 500;">Track Order</a>
            </div>
            <div class="content_item  ">
                <div class="item">
                    <a href="#"> <i class="fa-brands fa-facebook-f"></i></a>
                </div>
                <div class="item">
                    <a href="#"> <i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="item">
                    <a href="#"> <i class="fa-solid fa-envelope-circle-check"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="middle col-sm-6  col-md-6 col-xl-3 ">
            <h5>Get help</h5>
            <a href="#">Contact Us</a>
            <br> <a href="#">FAQs</a>
            <br> <a href="#">Size Guides</a>
            <br> <a href="#">Shipping & Delivery</a>
            <br> <a href="#">Returns </a>
            <br> <a href="#">Afterpay</a>
            <br> <a href="#">My Account</a>
            <br> <a href="#">Payment and Gift Cards</a>
            <br> <a href="#"> Feedback </a>
            <br> <a href="#"> Student Discount</a>
        </div>
        <div class="middle col-sm-6  col-md-6 col-xl-3">
            <h5>About us</h5>
            <a href="#">Our Story</a>
            <br> <a href="#">Our Stores</a>
            <br> <a href="#">Careers</a>
            <br> <a href="#">Renew Labs</a>
            <br> <a href="#">Stories</a>
            <br> <a href="#">Afterpay</a>
        </div>
    </div>
    <div class="footer_bottom">
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <div class="countryside">
                    </div>
                    <div><a href="#">Our Story</a>
                        <a href="#">Our Stores</a>
                        <a href="#">Careers</a>
                        <a href="#">Renew Labs</a>
                    </div>

                </div>
                <div class="col-6">
                    <p>Conquest Sports (Aust) Pty Ltd. Licensed Distributor of Converse. Authorised User of Converse
                    </p>
                    <p style="text-align: right;">Trademarks. © 2023 Converse</p>
                </div>
            </div>
        </div>
    </div>
</footer>
`

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        const bootstrap = document.querySelectorAll('link[href*="bootstrap"]');
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
          }

        if (bootstrap) {
            for (var item of bootstrap) {
                shadowRoot.appendChild(item.cloneNode());
            }
        }

        shadowRoot.appendChild(footerTemplate.content);
    }
  }
  
  customElements.define('footer-component', Footer);