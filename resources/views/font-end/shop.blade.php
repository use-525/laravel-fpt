@extends('font-end.layout.main')
@section('content')
         <div class="modal fade" id="show" tabindex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">


                    <div class="modal-body">
                         <button type="button" class="close btn" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                        <div class="quickview_body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-lg-5">
                                        <div class="quickview_pro_img">
                                            <img class="image" src="" alt="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-7">
                                        <div class="quickview_pro_des">
                                            <h4 id="title"></h4>
                                            <div id="prd-start" class="top_seller_product_rating mb-15">

                                            </div>
                                            <h5 id="price">$ <span></span></h5>
                                            <p id="detail"></p>
                                            <a href="#">View Full Product Details</a>
                                        </div>
                                        <!-- Add to Cart Form -->
                                        <form class="cart" method="post">
                                            <div class="quantity">
                                                <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>

                                                <input type="number" class="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1">

                                                <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                            </div>
                                            <button type="submit" name="addtocart" value="5" class="cart-submit">Add to cart</button>
                                            <!-- Wishlist -->
                                            <div class="modal_pro_wishlist">
                                                <a href="wishlist.html" target="_blank"><i class="ti-heart"></i></a>
                                            </div>
                                            <!-- Compare -->
                                            <div class="modal_pro_compare">
                                                <a href="compare.html" target="_blank"><i class="ti-stats-up"></i></a>
                                            </div>
                                        </form>

                                        <div class="share_wf mt-30">
                                            <p id="name_cate">Share With Friend</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ****** Quick View Modal Area End ****** -->

        <section class="shop_grid_area section_padding_100">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="shop_sidebar_area">
                            <div class="widget catagory mb-50">
                                <!--  Side Nav  -->
                                <div class="nav-side-menu">
                                    <h6 class="mb-0">Search</h6>
                                    <form class="form-inline ml-3">
                           <div class="input-group input-group-sm">
                              <input class="form-control form-control-navbar" id="keywords" type="search" placeholder="Search" aria-label="Search">
                              <div class="input-group-append">

                              </div>
                           </div>
                        </form>
                                </div>
                            </div>

                            <div class="widget catagory mb-50">
                                <!--  Side Nav  -->
                                <div class="nav-side-menu">
                                    <h6 class="mb-0">Catagories</h6>
                                    <div class="menu-list">
                                        <ul id="menu-content2" class="menu-content collapse out">
                                            <!-- Single Item -->
                                            <li >
                                                <a href="">All</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                             <div class="widget size mb-50">
                                <h6 class="widget-title mb-30">Filter by Option</h6>
                                <div class="widget-desc">
                                    <select data-url="" class="custom-select mr-sm-2" id="sort">
        <option value="all">Sắp xếp theo</option>
        <option value="sort=price-asc">Giá tăng dần</option>
        <option value="sort=price-desc">Giá giảm dần</option>
        <option value="sort=views">Lượt xem</option>
        <option value="sort=start">Đánh giá</option>
        <option value="sort=name-asc">Tên A-&gt;Z</option>
        <option value="sort=name-desc">Tên Z-&gt;A</option>

    </select>
                                </div>
                            </div>
                            <div class="widget price mb-50">
                                <h6 class="widget-title mb-30">Filter by Price</h6>
                                <div class="widget-desc">
                                    <div class="slider-range">
        <form class="form-inline" id="sort-price"  data-url="">
  <input type="text" class="form-control mb-2 mr-sm-2" id="price-min" placeholder="Thấp nhất">
<input type="text" class="form-control mb-2 mr-sm-2" id="price-max" placeholder="Cao nhất">
  <button type="submit" class="btn btn-danger mb-2">Submit</button>
</form>
                                    </div>
                                </div>
                            </div>
                            <div class="widget color mb-70">
                                <h6 class="widget-title mb-30">Filter by Price</h6>
                                <div class="widget-desc">

              <div class="btn-group" role="group" aria-label="Basic example">
  <button  data-min="0" data-max="100.000" type="button" class=" sort-range btn btn-secondary">Dưới 10tr</button>
  <button  data-min="100.000" data-max="150.000" type="button" class=" sort-range btn btn-secondary">10tr-15tr</button>
  <button   data-min="150.000" data-max="200.000"  type="button"class=" sort-range btn btn-secondary">15tr-20tr</button>

</div>
   <div class="btn-group mt-2" role="group" aria-label="Basic example">
  <button data-min="200.000" data-max="300.000"  type="button" class=" sort-range btn btn-secondary">20tr-30tr</button>
  <button  data-min="300.000" data-max="400.000" type="button" class=" sort-range btn btn-secondary">30tr-40tr</button>
  <button  data-min="400.000" data-max="400.000"  type="button" class=" sort-range btn btn-secondary">Trên 40tr</button>
</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-md-8 col-lg-9">
                        <div class="shop_grid_product_area">
                            <div class="row karl-new-arrivals"  id="list-prd">

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>

@endsection
@section('js')
    <script src=" {{ asset('js/product.js') }}"></script>
@endsection

