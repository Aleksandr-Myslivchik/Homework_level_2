window.addEventListener('DOMContentLoaded', function() {  
    'use strict';
    let sliderItem = document.querySelectorAll('.slider-item'),
        sliderItem2 = document.querySelectorAll('.slider-item-2'),
        sliderItem3 = document.querySelectorAll('.slider-item-3'),
        slider = document.querySelector('.slider'),
        slider2 = document.querySelector('.slider-2'),
        slider3 = document.querySelector('.slider-3'),
        sliderContent = document.querySelectorAll('.testimonials__wrapper');

    function hideSliderContent(a) {
        for (let i = a; i < sliderContent.length;i++) {    
            sliderContent[i].classList.remove('show');
            sliderContent[i].classList.add('hide');
            sliderItem[i].classList.remove('active');
            sliderItem[i].classList.add('inactive');
            sliderItem2[i].classList.remove('active');
            sliderItem2[i].classList.add('inactive');
            sliderItem3[i].classList.remove('active');
            sliderItem3[i].classList.add('inactive');
            


        }
    } 

    hideSliderContent(1);  

    function showSliderContent(b) {
        if (sliderContent[b].classList.contains('hide')) {  
            sliderContent[b].classList.add('show');
            sliderContent[b].classList.remove('hide');
            sliderItem[b].classList.remove('inactive');
            sliderItem[b].classList.add('active');
            sliderItem2[b].classList.remove('inactive');
            sliderItem2[b].classList.add('active');
            sliderItem3[b].classList.remove('inactive');
            sliderItem3[b].classList.add('active');
        }
    }

    slider.addEventListener('click', function(event) {
        let target = event.target;
        if (target && event.target.matches('.slider-item')) {  
            for (let i = 0; i < sliderItem.length;i++) {
                if (target == sliderItem[i]) {
                    hideSliderContent(0);  
                    showSliderContent(i);
                    break;
                }
            }
        }
    })



    slider2.addEventListener('click', function(event) {
        let target = event.target;
        if (target && event.target.matches('.slider-item')) {  
            for (let i = 0; i < sliderItem2.length;i++) {
                if (target == sliderItem2[i]) {
                    hideSliderContent(0);  
                    showSliderContent(i);
                    break;
                }
            }
        }
    })



    slider3.addEventListener('click', function(event) {
        let target = event.target;
        if (target && event.target.matches('.slider-item')) {  
            for (let i = 0; i < sliderItem3.length;i++) {
                if (target == sliderItem3[i]) {
                    hideSliderContent(0);  
                    showSliderContent(i);
                    break;
                }
            }
        }
    })








}); 