var status = "close";
$('body').on('click', '.s_menu_icon', function(){
  if(status == "close"){
    status = "open";
    $('.s_menu_content').animate({"width" : "100%"}, {duration:500, queue:false});
    $('.s_menu_icon').animate({"border-radius" : "0"}, {duration:500, queue:false});
    setTimeout(function () {
      $('.s_menu_text').css({"display" : "inline"});
    }, 600);
  }
  else if(status == "open"){
    status = "close";
    $('.s_menu_text').css({"display" : "none"});
    setTimeout(function () {
      $('.s_menu_content').animate({"width" : "0"}, {duration:500, queue:false});
      $('.s_menu_icon').animate({"border-radius" : "10"}, {duration:500, queue:false});
    }, 100);
  }

});






12312312
