$(document).ready(function(){
    


    const train = $('.orange .train .maintrain')
    // console.log(train)
    const cre_img = $('.creative .cre-box > img')
    const cre_txt = $('.creative .cre-box > span')
    const cre_m_img = $('.creative .cre-img')
    const po_img = $('.potential .po-img')
    const po_txtbox = $('.potential .po-box > img')
    const po_txt = $('.potential .po-box > span ')

    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        // console.log(sct)
        if(sct > 500){
            train.addClass('on')
        }else{
            
        }
        if(sct > 3400){
            cre_img.addClass('on')
            cre_txt.addClass('on')
            cre_m_img.addClass('on')
        }else{
            // $(window).resize(function(){
            //     let reSize = window.innerWidth;
            //     // console.log(reSize)
            //     if(reSize<1100){
            //         cre_img.removeClass('on')
            //         cre_txt.removeClass('on')
            //         cre_m_img.removeClass('on')
            //     }
            // })
        }
        if(sct > 4137){
            po_img.addClass('on')
            po_txtbox.addClass('on')
            po_txt.addClass('on')
        }
    })
    $(window).resize(function(){
        let reSize = window.innerWidth;
        // console.log(reSize)
        $(window).scroll(function(){
            let sctt = $(window).scrollTop();
            console.log(sctt)
            if(sctt=200 && reSize < 900){
                train.addClass('on')
            }
        })
    })
})