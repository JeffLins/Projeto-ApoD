let botao = $('#button')
$('.video').addClass('none')

botao.on('click', function(){
    $.ajax({url:'https://api.nasa.gov/planetary/apod?api_key=BduVdecGn4sew3h9LBttGuARBVQJjR6e3PLqcbHw&date='+date.value,     
        success: function(result){         
        $('.descricao').text(result.explanation)         
        $('.autor').text(result.copyright)
        
        if(result.media_type=='image'){
            $('.foto').attr('src', result.url)
            $('.video').addClass('none')
            $('.foto').removeClass('none')
        }else{
            $('.video').attr('src', result.url)
            $('.video').removeClass('none')
            $('.foto').addClass('none')
        }
   
            }    
         }) 
     });
