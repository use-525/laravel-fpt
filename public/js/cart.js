     $(document).ready(function() {
         let cartItems = localStorage.getItem("prdCart");
         let totalCost = localStorage.getItem("totalCost");
         cartItems = JSON.parse(cartItems);
         let list_cart = $('#list-cart-products');
         if (totalCost != null) {
             $('span.totalCost').text('$' + totalCost);
         }
         if (cartItems && list_cart) {
             list_cart.html('');
             const result = Object.values(cartItems).map((item) => {
                 return ` <tr>
                        <td class="cart_product_img d-flex align-items-center">
                        <a href="#"><img src="${item.prd.image}" alt="Product"></a>
                        <h6>${item.prd.name}</h6>
                        </td>
                        <td class="price"><span>$${item.prd.price}</span></td>
                        <td class="qty">
                       <div class="quantity">
                            <span class="qty-minus" onclick="giam(this)"><i class="fa fa-minus" aria-hidden="true"></i></span>
                            <input data-price="${item.prd.price}" onchange="qty(this)" type="number" class="qty-text" id="qty" step="1" min="1" max="99" name="quantity" value="${item.inCart}">
                            <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                        </div>
                        </td>
                        <td ><span class="total_price-${item.prd.price}">$${item.prd.price * item.inCart}</span></td>
                    </tr>`
             })
             list_cart.html(result);
         }
     });
     $('#checkout').click(function() {
         let totalCost = localStorage.getItem("totalCost");
         $.ajax({
             type: 'post',
             url: 'http://localhost:8000/api/Invoices/',
             data: {
                 customer_name: $('#name').val(),
                 customer_phone_number: $('#phone').val(),
                 customer_email: $('#email').val(),
                 customer_address: $('#address').val(),
                 payment_method: $('#payment_method').val(),
                 total_price: totalCost,
             },
             success: function(response) {
                 // toastr.success(response.message)
                 console.log(response);
                 window.location.href = 'http://localhost:8000/shop';
                 localStorage.clear();
             },
             error: function(jqXHR, textStatus, errorThrown) {}
         })
     })