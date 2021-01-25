$('#form-login').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: 'http://localhost:8000/api/loginAdmin',
        data: {
            email: $('#email').val(),
            password: $('#password').val(),
        },
        success: function(response) {
            if (response.login == true) {
                window.location = "http://localhost:8000/admin";
            } else {
                alert('Tài khoản sai ')
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    })
})