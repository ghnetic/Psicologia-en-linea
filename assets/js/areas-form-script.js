/*==============================================================*/
// Formulario Apartar Cupo Psicoline
/*==============================================================*/
(function ($) {
    "use strict";
    $("#areasForm").validator().on("submit", function (event) {
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
        var area = $("#area").val();

        $.ajax({
            type: "POST",
            url: "assets/php/areas.php",
            data: "name=" + name + "&email=" + email + "&area=" + area,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                    console.log("Success");
                } 
                else {
                    formError();
                    submitMSG(false,text);
                    console.log("Errorsito");
                }
            }
        });
        console.log(name,email,area);
    }
    function formSuccess(){
        $("#areasForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }
    function formError(){
        $("#areasForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }
     submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 tada animated text-success";
        }function 
        else {
            var msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict