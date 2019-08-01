'use stric';
(function() {
        //добавление/рендер
        const popularFunctionalityList = new List.classList( 'popular-functionality__description-list', listItems.arrList.length, 7, listItems.arrList );
        
        document.querySelector('.popular-functionality__description').appendChild( popularFunctionalityList.descriptionlist );
                
        // открытие 1 активного эл-та
        const activeDescr = document.querySelector('.description-list_wrapper-1 .item-1 p');
        popularFunctionalityList.target = activeDescr;
        popularFunctionalityList._activateDescriptionElem();
        
        // обработчик нажатия на кнопку "Обсудить проект"
        window.addHandlerButton('.chant-box_button');
        
        // обработчик портфолио клика
        window.portfolioArticleClickHandler('.portfolio-list');
})();