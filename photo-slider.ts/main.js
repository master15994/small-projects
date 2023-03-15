const slider = document.querySelector('#slider');
const sliderItem = Array.from(slider.children);
const buttOne = document.querySelector('#butt-1');
const buttTwo = document.querySelector('#butt-2');



sliderItem.forEach(function (slide, index) {

//   Скрываем все классы кроме первого
  if (index !== 0) slide.classList.add('hidden');
  

//   Добавляем индексы к каждому фото
slide.dataset.index = index;

// Добавляем data атрибут active для первого / активного слайда
    sliderItem[0].setAttribute('data-active', '');

//   Клик по слайдам
  slide.addEventListener('click', function () {

    // Скрываем текущий слайд
     slide.classList.add('hidden');
     slide.removeAttribute('data-active');

    //  Рассчитывакем след слайд
    //  const nextSlideIndex = +slide.dataset.index + 1 ;

     
      const nextSlideIndex = index + 1 === sliderItem.length ? 0 : index +1;

    //  Полный вид
    //  if (index + 1 === sliderItem.length){
    //     nextSlideIndex=0;
    //  } else{ nextSlideIndex = index +1 ;

    //  }

    //  Находим след слайд 
     const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    //  Отображаем след слайд 
     nextSlide.classList.remove('hidden');
     nextSlide.setAttribute('data-active','');

     

  });
});

buttOne.onclick = function() {
    console.log('Next Slide');

   const currentSlide= slider.querySelector('[data-active]');
   const currentslideIndex = +currentSlide.dataset.index;
   
   currentSlide.classList.add('hidden');
   currentSlide.removeAttribute('data-active');


   const nextSlideIndex = currentslideIndex + 1 === sliderItem.length ? 0 : currentslideIndex +1;
   const nextSlide= slider.querySelector(`[data-index="${ nextSlideIndex}"]`) ;
   nextSlide.classList.remove('hidden');
   nextSlide.setAttribute('data-active','')
};


buttTwo.onclick = function() {
    console.log('Prev Slide');

   const currentSlide= slider.querySelector('[data-active]');
   const currentslideIndex = +currentSlide.dataset.index;
   
   currentSlide.classList.add('hidden');
   currentSlide.removeAttribute('data-active');


   const nextSlideIndex = currentslideIndex === 0  ? sliderItem.length - 1 : currentslideIndex - 1;
   const nextSlide= slider.querySelector(`[data-index="${ nextSlideIndex}"]`) ;
   nextSlide.classList.remove('hidden');
   nextSlide.setAttribute('data-active','')
}











