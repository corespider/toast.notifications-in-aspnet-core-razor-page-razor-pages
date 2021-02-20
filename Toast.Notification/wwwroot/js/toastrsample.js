
$(function(){
$('#showtoast').click(function () {
        toastr.options = {
        "debug": false,
        "positionClass": $("#toastrPositionGroup input:radio:checked").val(),
        "onclick": null,
        "fadeIn": 300,
        "fadeOut": 100,
        "timeOut": 3000,
        "extendedTimeOut": 1000
        }
        
        var d= Date();
        toastr[$("#toastrTypeGroup input:radio:checked").val()](d,"Current Day & Time");  
});
});