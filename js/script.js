$(document).ready(function () {
    // Navbar link active state
    $('.navbar-nav .nav-link').on('click', function () {
      $('.navbar-nav .nav-link').removeClass('active');
      $(this).addClass('active');
      $('.navbar-collapse').collapse('hide');
    });
  
    // Loader
    function loader() {
      setTimeout(function () {
        if ($('#loader').length > 0) {
          $('#loader').removeClass('show');
        }
      }, 1);
    }
    loader();
  
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
  
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
  
    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
      } else {
        $('.navbar').removeClass('nav-sticky');
      }
    });
  
    // Smooth scrolling on navbar links
    $(".navbar-nav a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 45
        }, 1500, 'easeInOutExpo');
        $('.navbar-nav .active').removeClass('active');
        $(this).addClass('active');
      }
    });
  
    
  // Initialize WOW.js
  new WOW().init();

});

document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');  // เลือกทุกๆ skill ที่มีในหน้า
  
    skills.forEach(skill => {
      const progressBar = skill.querySelector('.progress');
      const skillLevel = skill.getAttribute('data-skill');  // อ่านค่า data-skill
  
      setTimeout(() => {
        progressBar.style.width = `${skillLevel}%`;  // กำหนดความกว้างของแถบ
      }, 500);  // ดีเลย์เล็กน้อยเพื่อให้การแสดงผลดูเป็นธรรมชาติ
    });
  });