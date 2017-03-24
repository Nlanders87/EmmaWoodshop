// Triggers Modal window when image is clicked in photo gallery
$(document).ready(function() {
$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});

// Adds a caption variable that allows you to append text to the body of the modal window
$(document).ready(function() {
$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var caption = $(this).parent('a').attr("caption");
  	$('.modal-caption').html(caption);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});