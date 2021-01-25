 const API_PRODUCT = "http://localhost:8000/api/Product/";
 const API_CATEGORY = "http://localhost:8000/api/Category/";
 const API_ProductGalleries = "http://localhost:8000/api/ProductGalleries/";
 window.onload = () => {
     let url = window.location.pathname;
     let id = url.substr(17);
     $.ajax({
         type: "GET",
         url: `${API_PRODUCT}${id}`,
         success: function(response) {
             let i;
             let html = '';
             for (i = 0; i < response.prd.star; i++) {
                 html += ' <i class="fa fa-star" aria-hidden="true"></i>';
             }
             $('div#prd-start').html(html)
             $('h4.title').text(response.prd.name)
             $('h4.price').text(response.prd.price)
             $('li#tag-prd').text(response.prd.name)
             $('p.desc-prd').text(response.prd.detail)
             $('li#name-cate').text(response.cate.cate_name)
             $('#img-prd').attr("src", response.prd.image);
             const result = response.prd_gallery.map((prd) => {
                 return `<li class="active" data-target="#product_details_slider" data-slide-to="0" style="background-image: url(/img/product/product_galleries/${prd.img_url});">
                                     </li>`
             }).join("");
             $('#list-prd_gallery').html(result);

         },
     })

 }
