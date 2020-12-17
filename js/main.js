const slider = document.querySelector('.reviews__swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    slideClass: 'reviews__swiper-slide',
    wrapperClass: 'reviews__swiper-wrapper',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//Form
const btns = document.querySelectorAll('.btn-form');
const modals = document.querySelector('.form');
const modalOverlay = document.querySelector('.form__overlay');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('.data-path');
    modals.style.visibility = 'visible';
    modals.style.opacity = '1';
    $('body').addClass('scroll');
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modals.style.visibility = 'hidden';
    modals.style.opacity = '0';
    modals.style.transition = 'opacity ease-in-out 0.4s';
    $('body').removeClass('scroll');
  }
});

$(document).ready(function(){
  $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"});

  $('form').each(function () {
    $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      focusInvalid: false,
      rules: {
        Телефон: {
          required: true,
        },
        Имя: {
          required: true,
        },
        Почта: {
          required: true,
        }
      },
      submitHandler(form) {
        let th = $(form);

        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: th.serialize(),
        }).done(() => {
          $(function(){
            $('.form__container').hide(800);
            $('.alert').show('slow');
          });
        });
        return false;
      }
    });
  });
});
