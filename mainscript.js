 jQuery(document).ready(function(){
   var offset=$('.portfolio').offset();
   $intro=$('.intro_message').find('span')
   $nav=$('nav').find('li')
   $('.content').find('li').fadeOut()
   $('.content').find('li').eq(0).fadeIn()
   $('.list').find('li').eq(0).css({'color':'white','background-color':'black'})
   $('.depth2').css({'height':'0'})
   

   
   
   setTimeout(function(){
      $intro.eq(0).fadeIn(0)
   },1000)
   setTimeout(function(){
      $intro.eq(0).fadeOut()
   },3000)
   setTimeout(function(){
      $('.my').css({'display':'block','opacity':'0%'})
   },4000)
   setTimeout(function(){
      $('header').addClass('display')
      $('.my').css({'opacity':'100%'})
      $('.black').css({'background-color':'rgb(5, 5, 5, 70%)'})
      $('.scroll').css({'z-index':'1'})
   },4000)

   $(window).scroll(function(){
      if ($(window).scrollTop() > 600) {
         $('.depth').find('a').css({'color':'black'})
         $('.depth').find('h1').css({'color':'black'})
     }else{
         $('.depth').find('a').css({'color':'white'})
         $('.depth').find('h1').css({'color':'white'})
     }
     
   })
   
   $nav.eq(1).mouseover(function(){
      $nav.eq(1).find('a').css({'color':'rgb(103, 185, 203)'})
   })
   $nav.eq(2).mouseover(function(){
      $nav.eq(2).find('a').css({'color':'rgb(103, 185, 203)'})
   })
   $nav.eq(3).mouseover(function(){
      $nav.eq(3).find('a').css({'color':'rgb(103, 185, 203)'})
   })
   $nav.mouseout(function(){
      $('nav').find('a').css({'color':'white'})
      if($(window).scrollTop()>600){
         $('nav').find('a').css({'color':'black'})
      }
   })
   $nav.eq(1).click(function(){
      $('html').animate({scrollTop:0},400)
      
   })
   $nav.eq(2).click(function(){
      $('html').animate({scrollTop:offset.top},400)
   })
   $nav.eq(4).click(function(){
      $('.depth2').css({'height':'250px'})
   })
   $('.depth2').find('li').eq(0).click(function(){
      $('html').animate({scrollTop:0},400)
   })
   $('.depth2').find('li').eq(1).click(function(){
      $('html').animate({scrollTop:offset.top},400)
   })
   $('.depth2').find('li').eq(2).click(function(){
      $('.depth2').css({'height':'0'})
   })
   $('.depth2').find('li').eq(3).click(function(){
      $('.depth2').css({'height':'0'})
   })
   $('.scroll').click(function(){
      $('html').animate({scrollTop:offset.top},1000)
   })

   $('.list').find('li').eq(0).click(function(){
      $('.content').find('li').fadeOut()
      $('.content').find('li').eq(0).fadeIn()
      $('.list').find('li').css({'color':'black','background-color':''})
      $('.list').find('li').eq(0).css({'background-color':'black','color':'white'})
   })
   $('.list').find('li').eq(1).click(function(){
      $('.content').find('li').fadeOut()
      $('.content').find('li').eq(1).fadeIn()
      $('.list').find('li').css({'color':'black','background-color':''})
      $('.list').find('li').eq(1).css({'background-color':'black','color':'white'})
   })

   $(window).scroll(function(){
      if ($(window).scrollTop() < 200){
         $('.portfolio').find('h2').css({'color':'rgb(0, 0, 0,0)'})
      }
   
   })
   $(window).scroll(function(){
      if ($(window).scrollTop() > 200){
         $('.portfolio').find('h2').css({'color':'black'})
      }
})
   
 })
 