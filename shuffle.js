// Filter shuffle items
$('.shuffle-btn-group label').click(function() {
    var filterValue = $(this).attr('for');
    $('.shuffle-item').removeClass('shuffle-item--visible');
    $('[data-groups*="' + filterValue + '"]').addClass('shuffle-item--visible');
  });
  
  // Change active label
  $('.shuffle-btn-group label').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  