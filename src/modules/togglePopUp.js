'use strict';
const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    const showPopup = () => {
        popUp.style.display = 'block'; // показать попап
        if (screen.width > 768) { // если ширина экрана больше заданного числа, то запустить анимацию
            let start = Date.now(); // получить стартовое время анимации (в момент клика)
            let timer = setInterval(() => {
                let timePassed = Date.now() - start; // запуск таймера, отнять от текущего реального времени стартовое время, после клика
                if (timePassed >= 800) {
                    clearInterval(timer); // если время достигло определенного числа удалить setInterval 
                    return;
                }
                draw(timePassed); // отрисовка анимации 
            });
            let draw = (timePassed) => {
                let wContent = +getComputedStyle(popupContent).width.split('px')[0]; // получить стили попап контента (блок с самой формой, а не вся обёртка, с попап )
                wContent = -wContent / 2 + 50 + 'px'; // данные для центрирования по горизонтали
                popupContent.style.left = timePassed / 16 + '%'; // центрирование по горизонтали
                popupContent.style.marginLeft = wContent; // центрирование по горизонтали
            };
        }
    };
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', showPopup); // открытие попап по клику
    });
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popUp.style.display = 'block';
        });
    });

   popUp.addEventListener('click', (event) => {
    let target = event.target;

        if(target.classList.contains('popup-close')){
            popUp.style.display = 'none';
        } else {

           target = target.closest('.popup-content');
           if(!target) {
               popUp.style.display = 'none';
           }
        } 
   });

};

export default togglePopUp;