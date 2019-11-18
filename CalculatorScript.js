var equation;
var calc = false;
$('.btn').click(function(){
    if(this.id == "Equals"){
        equation = eval($('#Output').html());
        $('#Output').html(equation);
        calc = true;
    } else {
        if (calc && $(this).attr('class') != "btn op btn-light"){
            $('#Output').html('')
        }
        calc = false;
        $('#Output').append($(this).html());
    }

})