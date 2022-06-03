/*==============================================================*/
// Formulario Apartar Cupo Psicoline
/*==============================================================*/
(function ($) {
    "use strict";
    $("#apartaCupoForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formError();
            submitMSG(false, "Ups! Parece que hay campos vacios, por favor llénalos");
        } 
        else {
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm(){
        // Cuidado con los nombres, tienen que tener el mismo que el html
        var name = $("#name").val();
        var email = $("#email").val();
        var phone_number = $("#phone_number").val();
        var tipo = $("#tipo").val();
        var horario = $("#horario").val();

        $.ajax({
            type: "POST",
            url: "assets/php/apartaCupo-process.php",
            data: "name=" + name + "&email=" + email + "&phone_number=" + phone_number + "&tipo=" + tipo + "&horario=" + horario,
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
        $("#apartaCupoForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }
    function formError(){
        $("#apartaCupoForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
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