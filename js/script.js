$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

document.documentElement.id = "js";

$(document).ready(function() {
 
    $('.input-text').each(function(){
        if($(this).val() != '') $(this).prev().addClass('hide');
    });
 
    $('.input-text').blur(function() {
        if ($(this).val() == '') $(this).prev().removeClass('hide');
    });
 
    $('.input-text').focus(function() {
        $(this).prev().addClass('hide');
    });
 
    $('.input-text').mouseover(function() {
        if ($(this).val() != '') $(this).prev().addClass('hide');
    });


    $('#file').change(function(){

        $('#file').each(function() {
            var name = this.value;
           reWin = /.*\\(.*)/;
            var fileTitle = name.replace(reWin, "$1");
            reUnix = /.*\/(.*)/;
            fileTitle = fileTitle.replace(reUnix, "$1");
            $('#name').html(fileTitle);
       });

    });
});
