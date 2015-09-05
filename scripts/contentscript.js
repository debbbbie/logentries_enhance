'use strict';

console.log('logentries extension loaded');

function hide_toaster_on_display(){

  window.toaster = setInterval(function() {
    var $toaster = $('#le-in-app-toaster-bottom');
    console.log($toaster.size())
    if ($toaster.size() > 0) {
      $toaster.hide();
      window.clearInterval(window.toaster);
    }
  }, 200);
}

function hide_sidebar(){

  document.getElementById('sidebarbutton-transparent').click();

  $('#page').css('padding-left', '0px');
  $('.principal').fadeOut();
  $('#sidebarbutton').css('margin-left', '0px');
  $('#sidebarbutton-transparent').css('margin-left', '0px');
  $('#page-heading').css('border-left', '0');
}

function hide_leftnav(){
  console.log('hide leftnav');
  $('.principal').fadeOut();
  $('#sidebar-log-selector').css('margin-left', '0');
  $('.ls-heading').css('margin-left', '0');
}
function show_leftnav(){
  console.log('show leftnav');
  $('.principal').fadeIn();
  $('#sidebar-log-selector').css('margin-left', '60px');
  $('.ls-heading').css('margin-left', '60px');
}

function hide_timeline(){
  $('.timeline-panel').hide();
  $("#page-entries-navigation").css('margin-top', '2px' );
}

function hide_searchbar(){
  $(".validation_text").hide();
  $(".timesearch-panel").hide();
  $(".search-toogle-mode").css({ position: 'absolute', top: '44px', right: '290px' });
}

function pretty_topnav(){
  $('.v5-breadcrumb').after($(".ui-tabs"));
 // $("#page-entries-navigation").css('margin-top', '2px' );
}

function pretty_content(){
	$(".events-panel").css({  paddingLeft: 0, marginTop: 0, paddingTop: 0});
	$("#main-content-separator").css('height', '110px');
	
	$(".tree-selector-searcher").hide();
}

function width_live_tail(){
	$('.events-panel').css({ marginRight: 0 });
}

function check_loaded(fn){
  window.check_loaded = setInterval(function(){
    if(document.readyState == 'complete'){
      window.clearInterval(window.check_loaded);
      fn();
    }
  }, 500);
}



check_loaded(function(){

  hide_toaster_on_display();
  hide_timeline();
  pretty_topnav();
  hide_sidebar();
  pretty_content();
  width_live_tail();
  hide_searchbar();

  $('#sidebarbutton-transparent').click(function(){
    if(!$(this).is($('.log-selector-open'))){
      hide_leftnav();
    }else {
      show_leftnav();
    }
  });

  $(window).on('hashchange', function() {
    hide_timeline();
  });
  
  $('.heading-menu-list-item-param-tl').click(function(){
      //if($(this).is( $('.v5-active'))){
		  pretty_content();
		  width_live_tail();
		  //}
  });

});
