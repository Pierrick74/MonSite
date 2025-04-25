document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      const elements = document.querySelectorAll('.title-underline');
      elements.forEach(function(element) {
        element.classList.add('animate');
      });
    }, 500);
  });