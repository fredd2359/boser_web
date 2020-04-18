
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.login100-form-btn').on('click',function(){
        var check = true;

        // for(var i=0; i<input.length; i++) {
            
            // if(validate(input[i]) == false){
            //     showValidate(input[i]);
            //     check=false;
            // }
        // }
        login();
        console.log(check);
        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        console.log(input);
        //login()
        // if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        //     if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //         return false;
        //     }
        // }
        // else {
        //     if($(input).val().trim() == ''){
                 return true;
        //     }
        // }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    function login(){
        console.log("Nombre servidor",document);
        console.log("Nombre body",document.body);
        console.log("Nombre servidor",document.location.host);
        console.log("Nombre origin",document.location.origin + "/user/login");
        console.log( "http://" + document.location.hostname + ":" + document.location.port + "/user/login");
        $.ajax({
            type: "POST",
            url: "http://" + document.location.hostname + ":" + document.location.port + "/user/login",
            dataType: "application/json",
            data: {user : "josep", password : "unonuevo"},
            contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
            crossDomain: true,
            success : function (data,xhs) {
                console.log(data);
                console.log(xhs);
            }, 
            error: function (error){
                console.log(error);
                console.log(error.responseText);
                console.log(error.message);
                alert(error);
            }
        });
    }
})(jQuery);

$(document).ready(function () {
    console.log("Hola ya cargue");
});
