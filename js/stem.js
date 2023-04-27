$(document).ready(function(){

    const color_1 = $('.stem-4-1 .color-box')
    const color_2 = $('.stem-4-2 .color-box')
    const color_3 = $('.stem-4-3 .color-box')
    const color_4 = $('.stem-4-4 .color-box')
    const sport = $('.color-sport')
    const sport_txt = $('.sports .color-txt')
    console.log(color_1)
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        console.log(sct)
        if(sct > 1200){
            color_1.addClass('on')
        }
        if(sct > 1790){
            color_2.addClass('on')
        }
        if(sct > 2276){
            color_3.addClass('on')
        }
        if(sct > 2665){
            color_4.addClass('on')
        }
        if(sct > 3363){
            sport.addClass('on')
            sport_txt.addClass('on')
        }
    })
})