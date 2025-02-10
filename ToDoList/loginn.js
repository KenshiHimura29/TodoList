$(document).ready(function(){
    $("#login").submit(function(event){
        event.preventDefault();
        login();
    })
    function login(){
        $.ajax({
            url: 'https://api-latihan.rakryan.id/api/login',
            type: 'POST',
            data: {
                email: $("#email").val(),
                password: $("#password").val(),
            },
            success: function(response){
                let token = response.data.token;
                localStorage.setItem('token', token);
                console.log(response);
                window.location.href = "index.html"
            }
        })
    }
})