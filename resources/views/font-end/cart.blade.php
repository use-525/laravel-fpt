@extends('font-end.layout.main');
@section('content')
<div class="cart_area section_padding_100 clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="cart-table clearfix">
                            <table class="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody id="list-cart-products">

                                </tbody>
                            </table>
                        </div>

                        <div class="cart-footer d-flex mt-30">
                            <div class="back-to-shop w-50">
                                <a href="{{route('Shop')}}">Continue shooping</a>
                            </div>
                            <div class="update-checkout w-50 text-right">
                                <a  id="clear-cart">clear cart</a>
                                <a href="#">Update cart</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">

                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <form>
        <div class="form-group">
    <label for="">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Name">
  </div>
  <div class="form-group">
    <label for="">Phone </label>
    <input type="text" class="form-control" id="phone" placeholder="Số điện thoại">
  </div>
   <div class="form-group">
    <label for="">Email </label>
    <input type="text" class="form-control" id="email" placeholder="Email">
  </div>
   <div class="form-group">
    <label for="">Địa Chỉ </label>
    <input type="text" class="form-control" id="address" placeholder="Địa Chỉ">
  </div>
</form>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="cart-total-area mt-70">
                            <div class="cart-page-heading">
                                <h5>Cart total</h5>
                                <p>Final info</p>
                            </div>

                            <ul class="cart-total-chart">
                                <li><span>Subtotal</span> <span class="totalCost"></span></li>
                                <li><span><strong>Total</strong></span> <strong><span class="totalCost"></span></strong></li>
                            </ul>
                        <a   data-url="" id="checkout" class="btn karl-checkout-btn">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection


