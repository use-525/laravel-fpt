const API_CATEGORY = "http://localhost:8000/api/Category/";
window.onload = () => {
    $.ajax({
        type: "GET",
        url: API_CATEGORY,
        success: function(response) {
            const result = response.map((cate) => {
                    return ` <tr role="row" class="odd">
                        <td class="dtr-control" tabindex="0">${cate.id}</td>
                        <td id="cate_name-${cate.id}" class="sorting_1">${cate.cate_name}</td>
                        <td id="show_menu-${cate.id}">${cate.show_menu} </td>
                        <td id="desc-${cate.id}">${cate.desc}</td>
                        <td id="created_by-${cate.id}" >${cate.created_by}</td>
                          <td><button type="button"  data-toggle="modal" data-target="#edit-cate"  onclick="editCate(${cate.id})" class="btn btn-success">EDIT</button></td>
                        <td><button type="button"  data-id="${cate.id}"  onclick="deleteCate(this)" class="btn btn-danger">DELETE</button></td>
                    </tr>`;
                })
                .join("");
            $('#list-cate').html(result);
        }
    })
};
$('#form-add').validate({
    // validation form
    rules: {
        cate_name: {
            required: true,
        },
        description: {
            required: true,
        },
    },
    messages: {
        cate_name: {
            required: "Nhập tên Danh Mục",
        },
        description: {
            required: "Thêm Mô Tả",
        },
    },
    submitHandler: function() {
        $.ajax({
            type: 'post',
            url: API_CATEGORY,
            data: {
                cate_name: $('#add-cate_name').val(),
                desc: $('#add-desc').val(),
                show_menu: $('#add-show_menu').val(),
                created_by: 'admin'
            },
            success: function(response) {
                console.log(response);
                const result = ` <tr role="row" class="odd">
                        <td class="dtr-control" tabindex="0"></td>
                        <td class="sorting_1">${response.cate_name}</td>
                        <td>${response.show_menu} </td>
                        <td>${response.desc}</td>
                        <td>${response.created_by}</td>
                        <td><button type="button"  onclick="editCate(${response.id})" class="btn btn-success">EDIT</button></td>
                        <td><button type="button" data-id="${response.id}"  onclick="deleteCate(this)" class="btn btn-danger">DELETE</button></td>
                    </tr>`
                $('#list-cate').append(result);
                $('#add-cate').modal('hide');
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        })
    }
});

function editCate(id) {
    const API = API_CATEGORY + id
    $('#form-edit').attr('data-id', id)
    $.ajax({
        type: 'get',
        url: API,
        success: function(response) {
            $('#edit-cate_name').val(response.cate_name)
            $('#edit-desc').val(response.desc)
            $('#edit-show_menu').val(response.show_menu)

        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
}
$('#form-edit').validate({
    // validation form
    rules: {
        cate_name: {
            required: true,
        },
        description: {
            required: true,
        },
    },
    messages: {
        cate_name: {
            required: "Nhập tên Danh Mục",
        },
        description: {
            required: "Thêm Mô Tả",
        },
    },
    submitHandler: function() {
        let ID = $('#form-edit').attr('data-id');
        $.ajax({
            type: 'put',
            url: `${API_CATEGORY}${ID}`,
            data: {
                cate_name: $('#edit-cate_name').val(),
                desc: $('#edit-desc').val(),
                show_menu: $('#edit-show_menu').val(),
                created_by: 'admin'
            },
            success: function(response) {
                $('#cate_name-' + ID).text(response.cate_name)
                $('#show_menu-' + ID).text(response.show_menu)
                $('#desc-' + ID).text(response.desc)
                $('#created_by-' + ID).text(response.created_by)
                $('#edit-cate').modal('hide');
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        })
    }
});

function deleteCate(id) {
    const ID = id.getAttribute("data-id");
    if (confirm('Bạn muốn xóa dữ liệu?')) {
        $.ajax({
            type: 'delete',
            url: `${API_CATEGORY}${ID}`,
            success: function(response) {
                id.parentNode.parentNode.remove();
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        })
    }
}
