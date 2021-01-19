const API_PRODUCT = "http://localhost:8000/api/Product/";
const API_CATEGORY = "http://localhost:8000/api/Category/";
window.onload = () => {
    $.ajax({
        type: "GET",
        url: API_PRODUCT,
        success: function(response) {
            const result = response.map((prd) => {
                    return ` <tr role="row" class="odd">
                        <td class="dtr-control" tabindex="0">${prd.id}</td>
                        <td id="prd_name-${prd.id}" class="sorting_1">${prd.name}</td>
                        <td id="image-${prd.id}"><img src="${prd.image}" alt="" class="img-thumbnail" width="200" height="200"></td>
                        <td id="cate_id-${prd.cate_id}">${oneCate(prd.cate_id)}</td>
                        <td id="price-${prd.id}" >${prd.price}</td>

                        <td id="star-${prd.id}">${prd.star} </td>
                        <td id="views-${prd.id}">${prd.views}</td>
                       <td><button type="button"  data-toggle="modal" data-target="#show-prd"  onclick="showPrd(${prd.id})" class="btn btn-info">Show</button></td>
                        <td><button type="button"  data-toggle="modal" data-target="#edit-prd"  onclick="editprd(${prd.id})" class="btn btn-warning">EDIT</button></td>
                        <td><button type="button"  data-id="${prd.id}"  onclick="deletePrd(this)" class="btn btn-danger">DELETE</button></td>
                         <td><button type="button"    onclick="showAnhPrd(${prd.id})" class="btn btn-info">Anh</button></td>
                    </tr>`;
                })
                .join("");
            $('#list-prd').html(result);
        }
    })
};

function oneCate(id) {
    $.ajax({
        type: 'get',
        url: `${API_CATEGORY}${id}`,
        success: function(response) {
            $("#cate_id-" + id).html(response.cate_name);
        },
        error: function(error) {}
    })
}
$('.btn-add').click(function(e) {
    e.preventDefault();
    $.ajax({
        type: 'get',
        url: API_CATEGORY,
        success: function(response) {
            const result = response.map((cate) => {
                return `<option value="${cate.id}">${cate.cate_name}</option> `
            }).join("");
            $("#add-cate").html(result);
        },
        error: function(error) {}
    })
    $('#add-prd').modal('show');
})
$('#form-add').validate({
    // validation form
    rules: {
        name: {
            required: true,
        },
        image: {
            required: true,
        },
        price: {
            required: true,
        },
        short_desc: {
            required: true,
        },
        detail: {
            required: true,
        },
    },
    messages: {
        name: {
            required: 'Nhập tên sản phẩm',
        },
        image: {
            required: 'Chọn ảnh sản phẩm',
        },
        price: {
            required: 'Nhập giá sản phẩm',
        },
        short_desc: {
            required: 'Nhập chi tiết sản phẩm',
        },
        detail: {
            required: 'Nhập miêu tả sản phẩm',
        },

    },
    submitHandler: function(callback) {
        let image_url = document.querySelector('#add-imageUrl').files;
        const img_url = []
        for (let i = 0; i < image_url.length; i++) {
            let storageUpload = firebase.storage().ref(`product_detail/${image_url[i].name}`);
            storageUpload.put(image_url).then(function() {
                storageUpload.getDownloadURL().then((image) => {
                    img_url.push(image);
                });
            });
        }
        addPrd(img_url);
    }
});

function addPrd(callback) {
    let image = document.querySelector('#add-image').files[0];
    let storageRef = firebase.storage().ref(`product/${image.name}`);
    storageRef.put(image).then(function() {
        storageRef.getDownloadURL().then((image) => {
            $.ajax({
                type: 'post',
                url: API_PRODUCT,
                data: {
                    name: $('#add-name').val(),
                    cate_id: $('#add-cate').val(),
                    image: image,
                    price: $('#add-price').val(),
                    short_desc: $('#add-short_desc').val(),
                    detail: $('#add-detail').val(),
                    star: 0,
                    views: 0,
                    img_url: callback
                },
                success: function(response) {

                    const result = ` << role="row" class="odd">
                    <td class="dtr-control" tabindex="0">${response.id}</td>
                    <td id="prd_name-${response.id}" class="sorting_1">${response.name}</td>
                    <td id="image-${response.id}"><img src="${response.image}" alt="" class="img-thumbnail" width="200" height="200"></td>
                    <td id="cate_id-${response.cate_id}">${oneCate(response.cate_id)}</td>
                    <td id="price-${response.id}" >${response.price}</td>

                    <td id="star-${response.id}">${response.star} </td>
                    <td id="views-${response.id}">${response.views}</td>
                   <td><button type="button"  data-toggle="modal" data-target="#show-prd"  onclick="showPrd(${response.id})" class="btn btn-info">Show</button></td>
                    <td><button type="button"  data-toggle="modal" data-target="#edit-prd"  onclick="editprd(${response.id})" class="btn btn-warning">EDIT</button></td>
                    <td><button type="button"  data-id="${response.id}"  onclick="deletePrd(this)" class="btn btn-danger">DELETE</button></td>
                     <td><button type="button"    onclick="showAnhPrd(${response.id})" class="btn btn-info">Anh</button></td>
                </>`
                    $('#list-prd').append(result);
                    $('#add-prd').modal('hide');
                },
                error: function(jqXHR, textStatus, errorThrown) {}
            })
        });
    });
}

function showPrd(id) {
    $.ajax({
        type: 'get',
        url: `${API_PRODUCT}${id}`,
        success: function(response) {
            $('h5#prd-name').text(response.prd.name)
            $('p#prd-cate_name').text(response.cate.cate_name)
            $('h6#prd-short_desc').text(response.prd.short_desc)
            $('h6#prd-detail').text(response.prd.detail)
            $('strong#prd-price').text(response.prd.price)
                // $('h4#start').text(response.prd.start)
                // $('h4#views').text(response.prd.views)
            $('img#prd-image').attr("src", response.prd.image);
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
}

function deletePrd(id) {
    const ID = id.getAttribute("data-id");
    if (confirm('Bạn muốn xóa dữ liệu?')) {
        $.ajax({
            type: 'delete',
            url: `${API_PRODUCT}${ID}`,
            success: function(response) {
                id.parentNode.parentNode.remove();
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        })
    }
}