window.addEventListener('message', function(e) {
  try {
    if (e.data.type === 'scroll-to-position') {
      var IFRAME_ID = 'athena-quiz-iframe';
      var iframeTop = document.getElementById(IFRAME_ID).getBoundingClientRect().top;
      var bodyTop   = document.body.getBoundingClientRect().top;
      var yPositionOfIframe = iframeTop - bodyTop;

      var offset = e.data.offset || 0;
      offset -= 70; // Height of the header and progress indicator on Athena website
      TweenLite.to(window, 0.35, {
        scrollTo: {
          y: yPositionOfIframe + offset,
          autoKill: false
        },
        ease: Power2.easeOut,
      });
    }
  }
  catch (error) {
    console.error('Error during performing scrolling', error);
  }
}, false);
