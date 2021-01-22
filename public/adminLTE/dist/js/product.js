const API_PRODUCT = "http://localhost:8000/api/Product/";
const API_CATEGORY = "http://localhost:8000/api/Category/";
const API_ProductGalleries = "http://localhost:8000/api/ProductGalleries/";
window.onload = () => {
    $.ajax({
        type: "GET",
        url: API_PRODUCT,
        success: function(response) {
            const result = response.map((prd) => {
                    return ` <tr role="row" class="odd">
                        <td class="dtr-control" tabindex="0">${prd.id}</td>
                        <td id="prd_name-${prd.id}" class="sorting_1">${prd.name}</td>
                        <td ><img  id="image-${prd.id}" src="${prd.image}" alt="" class="img-thumbnail" width="200" height="200"></td>
                        <td id="cate_id-${prd.cate_id}">${oneCate(prd.cate_id)}</td>
                        <td id="price-${prd.id}" >${prd.price}</td>
                        <td id="star-${prd.id}">${prd.star} </td>
                        <td id="views-${prd.id}">${prd.views}</td>
                       <td><button type="button"  data-toggle="modal" data-target="#show-prd"  onclick="showPrd(${prd.id})" class="btn btn-info">Show</button></td>
                        <td><button type="button"  data-toggle="modal" data-target="#edit-prd"  onclick="btnEditPrd(${prd.id})" class="btn btn-warning">EDIT</button></td>
                        <td><button type="button"  data-id="${prd.id}"  onclick="deletePrd(this)" class="btn btn-danger">DELETE</button></td>
                         <td><button type="button"  onclick="showAnhPrd(${prd.id})" class="btn btn-info">Anh</button></td>
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
        const img_url = [];
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
                    const result = ` <tr role="row" class="odd">
                        <td class="dtr-control" tabindex="0">${response.id}</td>
                        <td id="prd_name-${response.id}" class="sorting_1">${response.name}</td>
                        <td><img   id="image-${response.id}" src="${response.image}" alt="" class="img-thumbnail" width="200" height="200"></td>
                        <td id="cate_id-${response.cate_id}">${oneCate(response.cate_id)}</td>
                        <td id="price-${response.id}" >${response.price}</td>
                        <td id="star-${response.id}">${response.star} </td>
                        <td id="views-${response.id}">${response.views}</td>
                        <td><button type="button"  data-toggle="modal" data-target="#show-prd"  onclick="showPrd(${response.id})" class="btn btn-info">Show</button></td>
                        <td><button type="button"  data-toggle="modal" data-target="#edit-prd"  onclick="btnEditPrd(${response.id})" class="btn btn-warning">EDIT</button></td>
                        <td><button type="button"  data-id="${response.id}"  onclick="deletePrd(this)" class="btn btn-danger">DELETE</button></td>
                        <td><button type="button"    onclick="showAnhPrd(${response.id})" class="btn btn-info">Anh</button></td>
                    <tr/>`
                    $('#list-prd').append(result);
                    $('#add-prd').modal('hide');
                    $('#form-add')[0].reset();
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

function btnEditPrd(id) {
    const API = API_CATEGORY + id
    $('#form-edit').attr('data-id', id)
    $.ajax({
        type: 'get',
        url: API_CATEGORY,
        success: function(response) {
            const result = response.map((cate) => {
                return `<option value="${cate.id}">${cate.cate_name}</option> `
            }).join("");
            $("#edit-cate").html(result);
        },
        error: function(error) {}
    })
    $.ajax({
        type: 'get',
        url: `${API_PRODUCT}${id}`,
        success: function(response) {
            $('img#showImageEdit').attr("src", response.prd.image);
            $('#edit-name').val(response.prd.name)
            $('#edit-price').val(response.prd.price)
            $('#edit-short_desc').val(response.prd.short_desc)
            $('#edit-detail').val(response.prd.detail)
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
}

$('#form-edit').validate({
    // validation form
    rules: {
        name: {
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
        let ID = $('#form-edit').attr('data-id');
        let image_url = document.querySelector('#edit-imageUrl').files;
        const img_url = [];
        for (let i = 0; i < image_url.length; i++) {
            let storageUpload = firebase.storage().ref(`product_detail/${image_url[i].name}`);
            storageUpload.put(image_url).then(function() {
                storageUpload.getDownloadURL().then((image) => {
                    img_url.push(image);

                });
            });
        }
        editPrd(img_url, ID);
    }
});

function editPrd(callback, ID) {
    let image = document.querySelector('#edit-image').files[0];
    if (image != null) {
        let storageRef = firebase.storage().ref(`product/${image.name}`);
        storageRef.put(image).then(function() {
            storageRef.getDownloadURL().then((image) => {
                $.ajax({
                    type: 'put',
                    url: `${API_PRODUCT}${ID}`,
                    data: {
                        name: $('#edit-name').val(),
                        cate_id: $('#edit-cate').val(),
                        image: image,
                        price: $('#edit-price').val(),
                        short_desc: $('#edit-short_desc').val(),
                        detail: $('#edit-detail').val(),
                        img_url: callback
                    },
                    success: function(response) {
                        $('#prd_name-' + ID).text(response.prd.name)
                            // $('#cate_id-' + response.cate_id).text(response.cate.cate_name)
                        $('img#image-' + ID).attr("src", response.prd.image);
                        $('#price-' + ID).text(response.prd.price)
                        $('#edit-prd').modal('hide');
                    },
                    error: function(jqXHR, textStatus, errorThrown) {}
                })
            });
        });
    } else {
        $.ajax({
            type: 'put',
            url: `${API_PRODUCT}${ID}`,
            data: {
                name: $('#edit-name').val(),
                cate_id: $('#edit-cate').val(),
                price: $('#edit-price').val(),
                short_desc: $('#edit-short_desc').val(),
                detail: $('#edit-detail').val(),
                img_url: callback
            },
            success: function(response) {
                $('#prd_name-' + ID).text(response.prd.name)
                    // $('#cate_id-' + response.cate.id).text(response.cate.cate_name)
                $('img#image-' + ID).attr("src", response.prd.image);
                $('#price-' + ID).text(response.prd.price)
                $('#edit-prd').modal('hide');
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        })
    }
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

function showAnhPrd(id) {
    $('#add-anhmt').attr('data-id', id)
    $.ajax({
        type: 'get',
        url: `${API_ProductGalleries}${id}`,
        success: function(response) {
            $('#product-image-list').empty();
            response.map((item) => {
                $('#product-image-list').append(`
                    <div class="col-lg-3 mb-4">
                        <img src="${item.img_url}" style="width:100px" alt="">
                        <button type="button"   data-id="${item.id}"   onclick="xoa_AnhMoTa(this)" class="btn btn-outline-danger">Xoa</button>
                    </div>
                        `);
            })
            $('#product-image-modal').modal('show');
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
}

function xoa_AnhMoTa(id) {
    const ID = id.getAttribute("data-id");
    $.ajax({
        type: 'delete',
        url: `${API_ProductGalleries}${ID}`,
        success: function(response) {
            id.parentNode.remove();
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
}
$('#add-anhmt').submit(function(e, callback) {
    e.preventDefault();
    let id = $(this).attr('data-id');
    let image_url = document.querySelector('#img_url').files;
    const img_url = [];
    for (let i = 0; i < image_url.length; i++) {
        let storageUpload = firebase.storage().ref(`product_detail/${image_url[i].name}`);
        storageUpload.put(image_url).then(function() {
            storageUpload.getDownloadURL().then((image) => {
                img_url.push(image);
            });
        });
    }
    addAnhMT(img_url, id);
})

function addAnhMT(callback, id) {
    $.ajax({
        type: 'post',
        url: API_ProductGalleries,
        data: {
            product_id: id,
            img_url: callback
        },
        success: function(response) {
            console.log(response)
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
}

$('#sort').change(function() {
    let keysort = $(this).val();
    $.ajax({
        type: 'get',
        data: { keysort: keysort },
        url: 'http://localhost:8000/api/sortProduct/',
        success: function(response) {
            const result = response.map((prd) => {
                    return ` <tr role="row" class="odd">
                        <td class="dtr-control" tabindex="0">${prd.id}</td>
                        <td id="prd_name-${prd.id}" class="sorting_1">${prd.name}</td>
                        <td ><img  id="image-${prd.id}" src="${prd.image}" alt="" class="img-thumbnail" width="200" height="200"></td>
                        <td id="cate_id-${prd.cate_id}">${oneCate(prd.cate_id)}</td>
                        <td id="price-${prd.id}" >${prd.price}</td>
                        <td id="star-${prd.id}">${prd.star} </td>
                        <td id="views-${prd.id}">${prd.views}</td>
                       <td><button type="button"  data-toggle="modal" data-target="#show-prd"  onclick="showPrd(${prd.id})" class="btn btn-info">Show</button></td>
                        <td><button type="button"  data-toggle="modal" data-target="#edit-prd"  onclick="btnEditPrd(${prd.id})" class="btn btn-warning">EDIT</button></td>
                        <td><button type="button"  data-id="${prd.id}"  onclick="deletePrd(this)" class="btn btn-danger">DELETE</button></td>
                         <td><button type="button"  onclick="showAnhPrd(${prd.id})" class="btn btn-info">Anh</button></td>
                    </tr>`;
                })
                .join("");
            $('#list-prd').html(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
})

function searchPrd() {
    $.ajax({
        type: 'get',
        data: {
            keywords: $('#keywords').val(),
        },
        url: 'http://localhost:8000/api/searchProduct/',
        success: function(response) {
            const result = response.map((prd) => {
                    return ` <tr role="row" class="odd">
                        <td class="dtr-control" tabindex="0">${prd.id}</td>
                        <td id="prd_name-${prd.id}" class="sorting_1">${prd.name}</td>
                        <td ><img  id="image-${prd.id}" src="${prd.image}" alt="" class="img-thumbnail" width="200" height="200"></td>
                        <td id="cate_id-${prd.cate_id}">${oneCate(prd.cate_id)}</td>
                        <td id="price-${prd.id}" >${prd.price}</td>
                        <td id="star-${prd.id}">${prd.star} </td>
                        <td id="views-${prd.id}">${prd.views}</td>
                        <td><button type="button"  data-toggle="modal" data-target="#show-prd"  onclick="showPrd(${prd.id})" class="btn btn-info">Show</button></td>
                        <td><button type="button"  data-toggle="modal" data-target="#edit-prd"  onclick="btnEditPrd(${prd.id})" class="btn btn-warning">EDIT</button></td>
                        <td><button type="button"  data-id="${prd.id}"  onclick="deletePrd(this)" class="btn btn-danger">DELETE</button></td>
                        <td><button type="button"  onclick="showAnhPrd(${prd.id})" class="btn btn-info">Anh</button></td>
                    </tr>`;
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
