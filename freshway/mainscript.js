
        jQuery(document).ready(function(){
            $('.hamburger').click(function(){
                $('.menu_nav').css({'height':'100%'})
            })
            $('.menu_X').click(function(){
                $('.menu_nav').css({'height':'0%'})
            })
            
            
        
            
            $('.swip_btn').find('div').eq(0).click(function(){
                $('.slide li').css({'display':'none'})
                $('.slide1').css({'display':'flex'})
            })
            $('.swip_btn').find('div').eq(1).click(function(){
                $('.slide li').css({'display':'none'})
                $('.slide2').css({'display':'flex'})
            })
            $('.swip_btn').find('div').eq(2).click(function(){
                $('.slide li').css({'display':'none'})
                $('.slide3').css({'display':'flex'})
            })
            $('.swip_btn').find('div').eq(3).click(function(){
                $('.slide li').css({'display':'none'})
                $('.slide4').css({'display':'flex'})
            })
            $('.swip_btn').find('div').eq(4).click(function(){
                $('.slide li').css({'display':'none'})
                $('.slide5').css({'display':'flex'})
            })
            $('.swip_btn').find('div').eq(5).click(function(){
                $('.slide li').css({'display':'none'})
                $('.slide6').css({'display':'flex'})
            })

            

            $(window).scroll(function() {
                    if ($(window).scrollTop() > 800) {
                        $('header').css({'background-color':'rgb(0, 0, 0,0.4)'})
                        $('.nav_top a').css({'color':'white'})
                        $('.lang a').css({'color':'white'})
                        $('.hamburger').css({'filter':'brightness(100)'})
                        $('.depth li').css({'background-color':'rgb(0, 0, 0,0.9)'})
                    }else{
                        $('nav li a').css({'color':'#000'})
                        $('header').css({'background-color':'#fff'})
                        $('.lang a').css({'color':'#6e6e6e'})
                        $('.hamburger').css({'filter':'brightness(0)'})
                        $('.depth li').css({'background-color':'rgb(247,247,247,0.9)'})
                    }
                    if ($(window).scrollTop() > 2700) {
                        $('.trade li').fadeIn(2500)
                    }else{
                        $('.trade li').fadeOut()
                    }
                    
                    

                    
                
                    if ($(window).scrollTop() < 1200){
                        $('.ESG h5').fadeOut()
                        $('.ESG h5').css({'left':'100%'})
                    }
                    if ($(window).scrollTop() > 1200){
                        $('.ESG h5').eq(0).fadeIn(1000)
                        $('.ESG h5').eq(0).css({'left':'45%'})
                    }
                    if ($(window).scrollTop() > 1550){
                        $('.ESG h5').eq(1).fadeIn(1000)
                        $('.ESG h5').eq(1).css({'left':'45%'})
                    }
                    if ($(window).scrollTop() > 1900){
                        $('.ESG h5').eq(2).fadeIn(1000)
                        $('.ESG h5').eq(2).css({'left':'45%'})
                    }
                    if ($(window).scrollTop() > 2250){
                        $('.ESG h5').eq(3).fadeIn(1000)
                        $('.ESG h5').eq(3).css({'left':'30%'})
                    }
                    if ($(window).scrollTop() > 2600){
                        $('.ESG h5').eq(4).fadeIn(1000)
                        $('.ESG h5').eq(4).css({'left':'35%'})
                    }
                
                
                });
        })
