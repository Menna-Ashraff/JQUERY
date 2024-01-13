$(document).ready(function () {
    var currentIndex = 0;
    var interval;

    function startSlideshow() 
    {
      interval = setInterval(function () 
      {
        $('.slide').hide()
        $('.slide').eq(currentIndex).show()
        currentIndex = (currentIndex + 1) % 5
      }, 1000)
    }

    function stopSlideshow() {
      clearInterval(interval)
    }

    startSlideshow()

    $('#stopBtn').click(function () 
    {
      stopSlideshow()
    })
  })


//////////////////////////////////////////////

    $(document).ready(function () 
  {
    function handleImageClick(imageId) 
    {
      $('#' + imageId + ' .text').slideToggle(300)
    }

    $('.imgs').click(function () 
    {
      var imageId = $(this).attr('id')
      handleImageClick(imageId)
    })
  })