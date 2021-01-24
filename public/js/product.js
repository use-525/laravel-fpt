const API_PRODUCT = "http://localhost:8000/api/Product/";
const API_CATEGORY = "http://localhost:8000/api/Category/";
const API_ProductGalleries = "http://localhost:8000/api/ProductGalleries/";
window.onload = () => {
    $.ajax({
        type: "GET",
        url: API_PRODUCT,
        success: function(response) {
            const result = response.map((prd) => {
                    return `   <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" id="prd-${prd.id}">
                        <!-- Product Image -->
                        <div class="product-img">
                            <img src="${prd.image}" alt="">
                            <div class="product-quicview">
                          <a  data-target="#show" data-toggle="modal" onclick="showPrd(${prd.id})" class="btn-show"><i class="ti-plus "></i></a>
                            </div>
                        </div>
                        <!-- Product Description -->
                        <div class="product-description">
                            <h4 class="product-price"  id="price-${prd.id}">${prd.price}</h4>
                        <a href="" class=""> <p id="name-${prd.id}">${prd.name}</p></a>
                            <!-- Add to Cart -->
                            <a href="#" class="add-to-cart-btn" onclick="addCart(this)" data-id-prd="${prd.id}" >ADD TO CART</a>
                        </div>
                    </div>`;
                })
                .join("");
            $('#list-prd').html(result);
        }
    })
    $.ajax({
        type: "GET",
        url: API_CATEGORY,
        success: function(response) {
            const result = response.map((cate) => {
                return `
                    <button class="btn" data-filter="" id="list-one-cate" onclick="listOneCate(this)" data-cate_id="${cate.id}">${cate.cate_name}</button>
                `
            }).join("");
            $(".portfolio-menu").append(result);
        }
    })
    $.ajax({
        type: "GET",
        url: API_CATEGORY,
        success: function(response) {
            const result = response.map((cate) => {
                return `
                <li >
                    <a  id="list-one-cate" onclick="listOneCate(this)" data-cate_id="${cate.id}">${cate.cate_name}</a>
                </li>
            `
            }).join("");
            $("#menu-content2").append(result);
        },
    })
};

function showPrd(id) {
    $.ajax({
        type: 'get',
        url: `${API_PRODUCT}${id}`,
        success: function(response) {
            let i;
            let html = '';
            for (i = 0; i < response.prd.star; i++) {
                html += '<i class="fa fa-star" aria-hidden="true"></i>';
            }
            $('div#prd-start').html(html)
            $('h4#title').text(response.prd.name)
            $('p#name_cate').text(response.cate.name_cate)
            $('p#detail').text(response.prd.detail)
            $('h5#price').text(response.prd.price)
            $('img.image').attr("src", response.prd.image);
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
}

function listOneCate(cate_id) {
    let id = cate_id.getAttribute("data-cate_id");
    let keysort = 'sort=cate_id';
    $.ajax({
        type: 'get',
        data: {
            keysort: keysort,
            cate_id: id,
        },
        url: 'http://localhost:8000/api/sortProduct',
        success: function(response) {
            $('.karl-new-arrivals').empty();
            const result = response.map((prd) => {
                    return `   <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" id="prd-${prd.id}">
                        <!-- Product Image -->
                        <div class="product-img">
                            <img src="${prd.image}" alt="">
                            <div class="product-quicview">
                          <a  data-target="#show" data-toggle="modal"  onclick="showPrd(${prd.id})" class="btn-show"><i class="ti-plus "></i></a>
                            </div>
                        </div>
                        <!-- Product Description -->
                        <div class="product-description">
                            <h4 class="product-price"  id="price-${prd.id}">${prd.price}</h4>
                        <a href="" class=""> <p id="name-${prd.id}">${prd.name}</p></a>
                            <!-- Add to Cart -->
                            <a href="#" class="add-to-cart-btn" onclick="addCart(this)" data-id-prd="${prd.id}" >ADD TO CART</a>
                        </div>
                    </div>`;
                })
                .join("");
            $('#list-prd').html(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    })
}
$('#sort-price').submit(function(e) {
    e.preventDefault();
    let price_min = $('#price-min').val();
    let price_max = $('#price-max').val();
    let keysort = 'sort-price';
    $.ajax({
        type: 'get',
        data: {
            keysort: keysort,
            price_min: price_min,
            price_max: price_max
        },
        url: 'http://localhost:8000/api/sortProduct/',
        success: function(response) {
            $('#list-prd').empty();
            console.log(response);
            const result = response.map((prd) => {
                return `<div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" id="prd-${prd.id}">
                        <!-- Product Image -->
                        <div class="product-img">
                            <img src="${prd.image}" alt="">
                            <div class="product-quicview">
                          <a  data-target="#show" data-toggle="modal"  onclick="showPrd(${prd.id})" class="btn-show"><i class="ti-plus "></i></a>
                            </div>
                        </div>
                        <!-- Product Description -->
                        <div class="product-description">
                            <h4 class="product-price"  id="price-${prd.id}">${prd.price}</h4>
                        <a href="" class=""> <p id="name-${prd.id}">${prd.name}</p></a>
                            <!-- Add to Cart -->
                            <a href="#" class="add-to-cart-btn" onclick="addCart(this)" data-id-prd="${prd.id}" >ADD TO CART</a>
                        </div>
                    </div>`
            }).join("");
            $('#list-prd').html(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    })
});
$('.sort-range').click(function(e) {
    e.preventDefault();
    let price_min = $(this).attr('data-min');
    let price_max = $(this).attr('data-max');
    let keysort = 'sort-price';

    $.ajax({
        type: 'get',
        data: {
            keysort: keysort,
            price_min: price_min,
            price_max: price_max
        },
        url: 'http://localhost:8000/api/sortProduct/',
        success: function(response) {
            console.log(response);
            $('#list-prd').empty();
            const result = response.map((prd) => {
                return `<div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" id="prd-${prd.id}">
                        <!-- Product Image -->
                        <div class="product-img">
                            <img src="${prd.image}" alt="">
                            <div class="product-quicview">
                          <a  data-target="#show" data-toggle="modal"  onclick="showPrd(${prd.id})" class="btn-show"><i class="ti-plus "></i></a>
                            </div>
                        </div>
                        <!-- Product Description -->
                        <div class="product-description">
                            <h4 class="product-price"  id="price-${prd.id}">${prd.price}</h4>
                        <a href="" class=""> <p id="name-${prd.id}">${prd.name}</p></a>
                            <!-- Add to Cart -->
                            <a href="#" class="add-to-cart-btn" onclick="addCart(this)" data-id-prd="${prd.id}" >ADD TO CART</a>
                        </div>
                    </div>`
            }).join("");
            $('#list-prd').html(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    })
});
$('#sort').change(function() {
    let keysort = $(this).val();
    $.ajax({
        type: 'get',
        data: { keysort: keysort },
        url: 'http://localhost:8000/api/sortProduct/',
        success: function(response) {
            console.log(response);
            $('#list-prd').empty();
            const result = response.map((prd) => {
                return `<div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" id="prd-${prd.id}">
                        <!-- Product Image -->
                        <div class="product-img">
                            <img src="${prd.image}" alt="">
                            <div class="product-quicview">
                          <a  data-target="#show" data-toggle="modal"  onclick="showPrd(${prd.id})" class="btn-show"><i class="ti-plus "></i></a>
                            </div>
                        </div>
                        <!-- Product Description -->
                        <div class="product-description">
                            <h4 class="product-price"  id="price-${prd.id}">${prd.price}</h4>
                        <a href="" class=""> <p id="name-${prd.id}">${prd.name}</p></a>
                            <!-- Add to Cart -->
                            <a href="#" class="add-to-cart-btn" onclick="addCart(this)" data-id-prd="${prd.id}" >ADD TO CART</a>
                        </div>
                    </div>`
            }).join("");
            $('#list-prd').html(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    })
});

function searchPrd() {
    $.ajax({
        type: 'get',
        data: {
            keywords: $('#keywords').val(),
        },
        url: 'http://localhost:8000/api/searchProduct/',
        success: function(response) {
            const result = response.map((prd) => {
                    return `<div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" id="prd-${prd.id}">
                        <!-- Product Image -->
                        <div class="product-img">
                            <img src="${prd.image}" alt="">
                            <div class="product-quicview">
                          <a  data-target="#show" data-toggle="modal"  onclick="showPrd(${prd.id})" class="btn-show"><i class="ti-plus "></i></a>
                            </div>
                        </div>
                        <!-- Product Description -->
                        <div class="product-description">
                            <h4 class="product-price"  id="price-${prd.id}">${prd.price}</h4>
                        <a href="" class=""> <p id="name-${prd.id}">${prd.name}</p></a>
                            <!-- Add to Cart -->
                            <a href="#" class="add-to-cart-btn" onclick="addCart(this)" data-id-prd="${prd.id}" >ADD TO CART</a>
                        </div>
                    </div>`;
                })
                .join("");
            $('#list-prd').html(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
}

function debounce(fn, delay) {
    return (args) => {
        clearTimeout(fn.id);
        fn.id = setTimeout(() => {
            fn.call(this, args);
        }, delay);
    };
}
const debounceAjax = debounce(searchPrd, 1000);
$('#keywords').on('keyup', function(e) {
    debounceAjax(e.target.value);
});