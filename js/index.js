//change navbar color when scroll
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
          $(".navbar").css("background" , "");
          $(".navbar-logo").css("color" , "rgba(255, 255, 255, 0.7)");
          $(".nav a").css("color" , " rgba(255, 255, 255, 0.7)");
        }
        else{
          $(".navbar").css("background" , " white");
          $(".navbar-logo").css("color" , " black");
          $(".nav a").css("color" , " black");
        }
    })
  })
   // Disable form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();