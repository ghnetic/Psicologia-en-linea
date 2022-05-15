/*==============================================================*/
// Formulario Suscribirse Psicoline
/*==============================================================*/
(function ($) {
    "use strict";
    $("#subscribeForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formError();
            submitMSG(false, "Escribe un correo electrónico válido por favor");
        } 
        else {
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm(){
        var email = $("#email").val();

        $.ajax({
            type: "POST",
            url: "assets/php/subscribe-process.php",
            data: "email=" + email,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } 
                else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }
    function formSuccess(){
        $("#subscribeForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }
    function formError(){
        $("#subscribeForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }
    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 tada animated text-success";
        } 
        else {
            var msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict