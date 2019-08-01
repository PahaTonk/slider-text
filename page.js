'use strict';
(function() {
        //добавление/рендер
        const popularFunctionalityList = new List.classList( 'popular-functionality__description-list', listItems.arrList.length, 7, listItems.arrList );
        
        document.querySelector('.popular-functionality__description').appendChild( popularFunctionalityList.descriptionlist );
                
        // открытие 1 активного эл-та
        popularFunctionalityList.addActiveLi('.description-list_wrapper-1 .item-1 p');
})();