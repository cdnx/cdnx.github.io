
$('.second.circle').circleProgress({
  value: 1
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
});
