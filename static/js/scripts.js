/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//

// Funciones sidebar landing page

$(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
    
    $("#sidebarClose").on("click", function() {
      $("#sidebar").removeClass("active");
      $(this).removeClass("active");
    });

    
  });
  

// Modals

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })



// // Event Listeners
// trigger.addEventListener('click', sidebarToggle);

// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     // const mainNav = document.body.querySelector('#mainNav');
//     // if (mainNav) {
//     //     new bootstrap.ScrollSpy(document.body, {
//     //         target: '#mainNav',
//     //         offset: 74,
//     //     });
//     // };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

//     // Activate SimpleLightbox plugin for portfolio items
//     // new SimpleLightbox({
//     //     elements: '#portfolio a.portfolio-box'
//     // });

// });

//Prueba mainNava
// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNava');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNava = document.body.querySelector('#mainNava');
//     if (mainNava) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNava',
//             offset: 74,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

//     // Activate SimpleLightbox plugin for portfolio items
//     new SimpleLightbox({
//         elements: '#portfolio a.portfolio-box'
//     });

// });

// $(document).ready(function () {
//     $("#sidebar").mCustomScrollbar({
//         theme: "minimal"
//     });

//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').toggleClass('active')
//         $('.overlay').fadeIn();
//         $('.collapse.in').toggleClass('in');
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });

//     $('#dismiss, .overlay').on('click', function () {
//         $('#sidebar').removeClass('active');
//         $('.overlay').fadeOut();
//     });

// });

// document.body.addEventListener("keydown", function (event) {
//     if (event.keyCode === 27) {
//         $('#sidebar').removeClass('active');
//         $('.overlay').fadeOut();
//     }
// });


// $(document).ready(function () {
//     $("#sidebar").mCustomScrollbar({
//         theme: "minimal"
//     });


//     // $('#dismiss, .overlay').on('click', function () {
//     //     $('#sidebar').removeClass('active');
//     //     $('.overlay').fadeOut();
//     // });

//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').addClass('active');
//         $('.overlay').fadeIn();
//         $('.collapse.in').toggleClass('in');
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });
// });

// document.body.addEventListener("keydown", function (event) {
//     if (event.keyCode === 27) {
//         $('#sidebar').removeClass('active');
//         $('.overlay').fadeOut();
//     }
// });

// $(document).ready(function(){ irArriba(); }); //Hacia arriba

// function irArriba(){
//   $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
//   $(window).scroll(function(){
//     if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
//   });
//   $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
// }

// $(document).ready(function(){

// 	$('.ir-arriba').click(function(){
// 		$('body, html').animate({
// 			scrollTop: '0px'
// 		}, 300);
// 	});

// 	$(window).scroll(function(){
// 		if( $(this).scrollTop() > 0 ){
// 			$('.ir-arriba').slideDown(300);
// 		} else {
// 			$('.ir-arriba').slideUp(300);
// 		}
// 	});

// });

function alert_jqueryconfirm(){
    $.confirm({
        theme: 'material',
        title: 'Confirmación',
        icon: 'fa fa-info',
        content: '',
        columnClass: 'medium',
        typeAnimated: true,
        cancelButtonClass: 'btn-primary',
        draggable: true,
        dragWindowBorder: false,
        buttons: {
            info: {
                text: "Si",
                btnClass: 'btn-primary',
                action: function () {
                    
                }
            },
            danger: {
                text: "No",
                btnClass: 'btn-red',
                action: function () {
                    
                }
            },
        }
    })
}
