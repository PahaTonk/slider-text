'use strict';
(function() {
        // запрос на сервер за данными
        let popularFunctionalityList;
        fetch('list.json')
                .then( response => response.json() )
                .then( arr => {
                        //добавление/рендер
                        popularFunctionalityList = new List.classList( 'popular-functionality__description-list', arr.length, 7, arr );

                        document.querySelector('.popular-functionality__description').appendChild( popularFunctionalityList.descriptionlist );
                        // открытие 1 активного эл-та
                        popularFunctionalityList.addActiveLi('.description-list_wrapper-1 .item-1 p');
                } )
                .catch( err => console.log(err) );
})();