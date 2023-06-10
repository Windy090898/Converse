const signupTemplate = document.createElement('template');

signupTemplate.innerHTML = `
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal show" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`
$('#myModal').modal('show')

class Signup extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        const bootstrap = document.querySelectorAll('link[href*="bootstrap"]');
        const bootstrapJS = document.querySelectorAll('script[src*=".min.js"]');
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

        if (bootstrapJS) {
            for (var item of bootstrapJS) {
                shadowRoot.appendChild(item.cloneNode());
            }
        }

        shadowRoot.appendChild(signupTemplate.content);
    }
  }
  
  customElements.define('signup-component', Signup);

  /**
   * <!-- The Modal -->
<div class="modal show" id="myModal">
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
   */