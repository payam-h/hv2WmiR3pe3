$( document ).ready(function(){
  //var heightPage = $('.primaryLayer').height();
  $('.primaryContent .block .content .item a').click(function( event ){
    event.preventDefault();
    $('.primaryContent .block .content .item a').removeClass('active');
    $(this).addClass('active');
    $('.blockInfo').hide();
    var post = $(this).data("id")
    $('#postShow-' + post).show();
  });

  // Owl
  $('.postSlider').owlCarousel({
    autoplay: true,
    loop:true,
    margin:0,
    nav:true,
    autoWidth: true,
  });
  $('.castSlider').owlCarousel({
    autoplay: true,
    loop:true,
    margin:20,
    nav:true,
    autoWidth: true,
  });

  // Search
  $(".openSearch").click(function(){
    $(".boxSearch").addClass('active fadeInDown');
  });
  $(".boxSearch .close").click(function(){
    $(".boxSearch").removeClass('active fadeInDown');
  });

  // mobile Menu
  $(".openMenu").click(function(){
    $(".mobileMenu").addClass('active fadeInDown');
  });
  $(".mobileMenu .close").click(function(){
    $(".mobileMenu").removeClass('active fadeInDown');
  });

  //
  $(".timeSeries").TimeCircles({count_past_zero: false, fg_width: 0.01, circle_bg_color: "#eee"});

  const player = new Plyr('#player');

  // episode popup
  $(".popupEpisode").click(function( event ){
    event.preventDefault();
    $('.episodeAjax').addClass('zoomIn');
    $('.episodeAjax').show();
  });
  $(".episodeAjax .close").click(function(){
    $('.episodeAjax').removeClass('zoomIn');
    $('.episodeAjax').hide();
  });

  // notification popup
  $(".primaryContent .header .notification .click").click(function( event ){
    event.preventDefault();
    $(".primaryContent .header .notification .content").toggleClass('active');
  });

  $(".changeAvatar").click(function(){
    $(".primaryContent .profilePage .sidebar .avatarUser .change").toggleClass('active');
  });
});
