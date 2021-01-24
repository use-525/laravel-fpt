@extends('font-end.layout.main');
@section('content')
  <!-- <<<<<<<<<<<<<<<<<<<< Breadcumb Area Start <<<<<<<<<<<<<<<<<<<< -->
        <div class="breadcumb_area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ol class="breadcrumb d-flex align-items-center">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item" id="name-cate"></li>
                            <li class="breadcrumb-item active" id="tag-prd"></li>
                        </ol>
                        <!-- btn -->

                    </div>
                </div>
            </div>
        </div>
        <!-- <<<<<<<<<<<<<<<<<<<< Breadcumb Area End <<<<<<<<<<<<<<<<<<<< -->

        <!-- <<<<<<<<<<<<<<<<<<<< Single Product Details Area Start >>>>>>>>>>>>>>>>>>>>>>>>> -->
        <section class="single_product_details_area section_padding_0_100">
            <div class="container">
                <div class="row">

                    <div class="col-12 col-md-6">
                        <div class="single_product_thumb">
                            <div id="product_details_slider" class="carousel slide" data-ride="carousel">

                                <ol class="carousel-indicators" id="list-prd_gallery">

                                </ol>

                                <div class="carousel-inner">
                                    <div class="carousel-item active">

                                        <img class="d-block w-100" id='img-prd' src="" alt="First slide">
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <div class="single_product_desc">

                            <h4 class="title"></h4>

                            <h4 class="price"></h4>

                            <div class="single_product_ratings mb-15" id="prd-start">

                            </div>

                            <!-- Add to Cart Form -->
                            <form class="cart clearfix mb-50 d-flex" method="post">
                                <div class="quantity">
                                    <input type="number" class="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1">
                                </div>
                                <button type="submit" name="addtocart" value="5" class="btn cart-submit d-block">Add to cart</button>
                            </form>

                            <div id="accordion" role="tablist">
                                <div class="card">
                                    <div class="card-header" role="tab" id="headingTwo">
                                        <h6 class="mb-0">
                                            <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Cart Details</a>
                                        </h6>
                                    </div>
                                    <div id="collapseTwo" class="collapse show" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                           <p class="desc-prd"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <<<<<<<<<<<<<<<<<<<< Single Product Details Area End >>>>>>>>>>>>>>>>>>>>>>>>> -->


@endsection
@section('js')
  <script type="text/javascript">
     $.ajaxSetup({
    	headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
	});
    $(document).ready(function(){
            let api = 'http://localhost:8000/api/Product';
            let url= window.location.pathname;
             let id = url.substr(17, 1);
            console.log(id);
            $.ajax({
					type: 'get',
					url: 'http://localhost:8000/api/Product/'+id,
							success: function (response) {
                                console.log(response.prd.detail);
                                 let i;
                             let html='';
                            for (i = 0; i < response.prd.start; i++) {
                                  html+=' <i class="fa fa-star" aria-hidden="true"></i>';
                            }
                             $('div#prd-start').html(html)
                                $('h4.title').text(response.prd.name)
                                $('h4.price').text(response.prd.price)
                                $('li#tag-prd').text(response.prd.name)
                                $('p.desc-prd').text(response.prd.detail)
                                $('li#name-cate').text(response.cate.name_cate)
                                $('#img-prd').attr("src",'/img/product/'+response.prd.image);
                                    const result = response.prd_gallery.map((prd) => {
                                        return`<li class="active" data-target="#product_details_slider" data-slide-to="0" style="background-image: url(/img/product/product_galleries/${prd.img_url});">
                                    </li>`
                                }).join("");
                     $('#list-prd_gallery').html(result);
							},
							error: function (error) {

							}
						})
    });

    </script>
@endsection

