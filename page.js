'use strict';
(function() {
        const render = (arr) => {
                //добавление/рендер ()
                popularFunctionalityList = new List.classList( 'popular-functionality__description-list', arr.length, 7, arr );

                document.querySelector('.popular-functionality__description').appendChild( popularFunctionalityList.descriptionlist );
                // открытие 1 активного эл-та
                popularFunctionalityList.addActiveLi('.description-list_wrapper-1 .item-1 p');
        }
        // запрос на сервер за данными
        let popularFunctionalityList;
        fetch('list.json')
                .then( response => {
                        if (response.ok) {
                                return response.json();
                        }
                        throw new Error(`Error: ${response.status}`);
                 } )
                .then( arr => render(arr) )
                .catch( err => {
                    console.log(err);
                    render(listItems.arrList);
                } );
})();