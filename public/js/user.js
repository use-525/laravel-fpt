const API_USER = "http://localhost:8000/api/User/";
window.onload = () => {
    $.ajax({
        type: "GET",
        url: API_USER,
        success: function(response) {
            const result = response.map((user) => {
                    return ` <tr role="row" class="odd">
                        <td class="dtr-control" tabindex="0">${user.id}</td>
                        <td id="name-${user.id}" class="sorting_1">${user.name}</td>
                        <td id="email-${user.id}">${user.email} </td>
                        <td id="profilePhoto-${user.id}">${user.id}</td>
                        <td><button type="button"  data-toggle="modal" data-target="#edit-user"  onclick="editUser(${user.id})" class="btn btn-success">EDIT</button></td>
                        <td><button type="button" onclick="changePassword(${user.id})" class="btn btn-secondary ">Đổi Pass</button></td>
                        <td><button type="button"  data-id="${user.id}"  onclick="deleteUser(this)" class="btn btn-danger">DELETE</button></td>
                    </tr>`;
                })
                .join("");
            $('#list-user').html(result);
        }
    })
};
$.validator.addMethod("validatePassword", function(value, element) {
    return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
}, "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");
$('#form-add').validate({
    // validation form
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            validatePassword: true,
            minlength: 8,
        }
    },
    messages: {
        name: {
            required: "Nhập tên Người dùng",
        },
        email: {
            required: "Hãy Nhập Email",
            email: "Email sai định dạng yêu cầu nhập lai",
        },
        password: {
            required: "Hãy nhập password",
        }
    },
    submitHandler: function() {
        $.ajax({
            type: 'post',
            url: API_USER,
            data: {
                name: $('#add-name').val(),
                email: $('#add-email').val(),
                password: $('#add-password').val()
            },
            success: function(response) {

                const result = ` <tr role="row" class="odd">
                        <td class="dtr-control" tabindex="0">${response.id}</td>
                        <td id="name-${response.id}" class="sorting_1">${response.name}</td>
                        <td id="email-${response.id}">${response.email} </td>
                        <td id="profilePhoto-${response.id}">${response.id}</td>
                        <td><button type="button"  data-toggle="modal" data-target="#edit-user"  onclick="editUser(${response.id})" class="btn btn-success">EDIT</button></td>
                        <td><button type="button" onclick="changePassword(${response.id})" class="btn btn-secondary ">Đổi Pass</button></td>
                        <td><button type="button"  data-id="${response.id}"  onclick="deleteUser(this)" class="btn btn-danger">DELETE</button></td>
                    </tr>`
                $('#list-user').append(result);
                $('#add-user').modal('hide');
                $('#form-add')[0].reset();
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        })
    }
});

function deleteUser(id) {
    const ID = id.getAttribute("data-id");
    if (confirm('Bạn muốn xóa dữ liệu?')) {
        $.ajax({
            type: 'delete',
            url: `${API_USER}${ID}`,
            success: function(response) {
                id.parentNode.parentNode.remove();
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        })
    }
}

function editUser(id) {
    const API = API_USER + id
    $('#form-edit').attr('data-id', id)
    $.ajax({
        type: 'get',
        url: API,
        success: function(response) {
            $('#edit-name').val(response.name)
            $('#edit-email').val(response.email)
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
        email: {
            required: true,
            email: true,
        }
    },
    messages: {
        name: {
            required: "Nhập tên Người dùng",
        },
        email: {
            required: "Hãy Nhập Email",
            email: "Email sai định dạng yêu cầu nhập lai",
        },
    },
    submitHandler: function() {
        let ID = $('#form-edit').attr('data-id');
        $.ajax({
            type: 'put',
            url: `${API_USER}${ID}`,
            data: {
                name: $('#edit-name').val(),
                email: $('#edit-email').val(),
            },
            success: function(response) {
                $('#name-' + ID).text(response.name)
                $('#email-' + ID).text(response.email)
                $('#edit-user').modal('hide');
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        })
    }
});

function changePassword(id) {
    $('#form-changePassword').attr('data-id', id)
    $('#modal-changePassword').modal('show');
}
$('#form-changePassword').validate({
    rules: {
        password: {
            required: true,
            validatePassword: true,
            minlength: 8,
        }
    },
    messages: {
        password: {
            required: "Hãy nhập password",
        }
    },
    submitHandler: function() {
        let ID = $('#form-changePassword').attr('data-id');
        $.ajax({
            type: 'post',
            url: `http://localhost:8000/api/changePassword/${ID}`,
            data: {
                password: $('#password-new').val(),
            },
            success: function(response) {

                $('#form-changePassword')[0].reset();
                $('#modal-changePassword').modal('hide');
            },
            error: function(jqXHR, textStatus, errorThrown) {}
        })
    }
})