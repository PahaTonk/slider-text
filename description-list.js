'use strict';
const List = (function() {
    // экземляр  класса li
    class ListItem {
        constructor (title = '', description = '', CSSClass = '') {
            this.title = title;
            this.description = description;
            this.CSSClass = CSSClass;
        }

        createElement(elHTML, text, CSSClass) {
            const el =  document.createElement(elHTML);
            text ? el.innerText = text : null;
            CSSClass ? el.classList.add( ...CSSClass ) : null;
            return el;
        }

        get createItemHTML () {
            const li = this.createElement('li', '', this.CSSClass);
            const title = this.createElement('h3', this.title);
            const description = this.createElement('p', this.description);

            li.appendChild(title);
            li.appendChild(description);

            return li;
        }
    }
    
    // экземляр  класса списка
    class List {
        constructor (CSSClass, quantityNodes, quantityNodesChank, listItems) {
            this.CSSClass = CSSClass;
            this.childNodes = quantityNodes; //всего кол-во li
            this.quantityNodesChank = quantityNodesChank; //кол-во li в ul
            this.listItems = listItems; // массив с данными
            
            this.resizeInnerWidth = 0;
            this.balance = this.childNodes % this.quantityNodesChank;
            this.quantityChanks = (this.childNodes - this.balance) / this.quantityNodesChank; //кол-во ul
            this.balance = this.balance ? ++this.quantityChanks : null; 
            
        }
        
        // фабричный метод создания li 
        _addChildNodes(nodeHTML, start, end, ind) {
            let node = document.createElement(nodeHTML);
            node.setAttribute('data-num', ind);
            node.classList.add('description-list_wrappers', `description-list_wrapper-${ind}`);

            for ( let i = start; i < end; i++ ) {
                const li = new ListItem( this.listItems[i].title, this.listItems[i].description, this.listItems[i].CSSClass );
                node.appendChild( li.createItemHTML );
            }

            start === 0 ? node.classList.add('active') : null;

            return node;
        }
        
        // созданем ul-ы и наполненяем их li
        get createListNode() {
            const list = document.createElement('div');
            list.classList.add(this.CSSClass);

            for (let i = -1; ++i < this.quantityChanks; ) {
                const numStart = this.quantityNodesChank * i;
                let numEnd = numStart + this.quantityNodesChank;
                numEnd > this.childNodes ? numEnd = this.childNodes : null;

                list.appendChild( this._addChildNodes( 'ul', numStart, numEnd, i+1 ) );
            }

            return list;
        }

        _addNavChildNodes(flag, ind) {
            ind = +ind+1;
            //cоздаем button
            let node = document.createElement('button');
            node.setAttribute('type', 'button');
            node.setAttribute('data-nav', ind);
            node.classList.add('navigation-button');
            
            // создаем span
            let nodeSpan = document.createElement('span');
            nodeSpan.textContent = ind;
            
            node.appendChild(nodeSpan);
            
            flag ? node.classList.add('active') : null;

            return node;
        }
        
        // создаём навигационные элементы
        get createListNavigationNode() {
            const list = document.createElement('div');
            list.classList.add('navigation-wrapper');

            for ( let i = 0; i < this.quantityChanks; i++ ) {
                !i ? list.appendChild( this._addNavChildNodes(true, i) ) : list.appendChild( this._addNavChildNodes(false, i) );
            }
            
            return list;
        }
        
        // перелистывание чанков(ul)
        _turnOver(flag = false, ind = 0) {
            this._removeClassOrAttribute('active-descr', 'style'); 
            this._checkScrollWidthOneChank();

            let localFlag = true; // флаг для отслеживания границ скролла
            let navFlag = false; // флаг для отслеживания нажатия навиг-ых кнопок

            const removeClass = () => {
                const activeElements = this.parent.querySelectorAll('.active');
                if (!ind) {
                    ind = +activeElements[0].getAttribute('data-num'); // забираем из атрибута индекс
                } else {
                    navFlag = !navFlag; // сигнализируем нажатие навиг-ой кнопки
                }

                !flag ? ind -= 2 : null; // проверяем отмотку в лево
                
                if (ind < 0 || ind >= this.quantityChanks && !navFlag) {
                    localFlag = !localFlag; // сигнализируем выход за границу скролла
                    return;
                }

                for (let i = activeElements.length; --i > -1; ) {
                    activeElements[i].classList.remove('active');
                }
            }
            const addTransitionX = () => {
                const transitionEl = document.querySelectorAll(`.${this.CSSClass} > ul`);
                
                const num = navFlag ? ind - 1 : ind;
                for (let i = transitionEl.length; --i > -1; ) {
                    transitionEl[i].setAttribute('style', `transform:translateX(-${num * this.scrollWidth}px)`);
                }
                
                const dataAttr = navFlag ? ind : ind + 1;
                document.querySelector(`[data-num="${dataAttr}"]`).classList.add('active');
                document.querySelector(`[data-nav="${dataAttr}"]`).classList.add('active');
            }

            removeClass();
            if (!localFlag) return;
            addTransitionX();
        }
        
        // удаление классов и стилей у эл-та описания
        _removeClassOrAttribute(sel, attr) {
            const collElem = document.querySelectorAll(`.${sel}`);
            for (let i = collElem.length; --i > -1; ) {
                collElem[i].classList.remove(sel);
                collElem[i].setAttribute(attr, '');
            }
        }
        
        // включение активного элемента 
        _activateDescriptionElem() {
            let height = this.target.scrollHeight;
            this.target.classList.add('active-descr');
            this.target.setAttribute('style', `height: ${height}px;`);
        }
        
        // установка ширины прокрутки чанков
        _checkScrollWidthOneChank() {
            this.scrollWidth = document.querySelector(`.${this.CSSClass}`).offsetWidth;
        }
        // обработчик нажатия кнопки мыши
        _mousedownDescriptionlist(e) {
            if ( e.target.tagName.toLowerCase() === 'h3' ) { // отлавлваем нажатие по заголовку
                this.target = e.target.nextElementSibling; // записываем елемент который нужно будет открыть
            } else {
                this.target = undefined;
            }
            this.xOld = e.offsetX || e.changedTouches[0].clientX;
        }
        // обработчик поднятия кнопки мыши
        _mouseupDescriptionlist(e) {
            
            this.xNew = e.offsetX || e.changedTouches[0].clientX;
            
            if ( this.xOld - this.xNew > 30 ) {
                this._turnOver(true);
            } else if ( this.xOld - this.xNew < -30 ) {
                this._turnOver();
            } else if ( this.target ){
                this._removeClassOrAttribute('active-descr', 'style');

                this._activateDescriptionElem();
            }
        }
        
        // обработчик клика по кнопке навигации
        _clickNavButton(e) {
            const target = e.target.tagName.toLowerCase() === 'span' ? e.target.parentElement : e.target;
            
            if (target.classList.contains('navigation-button')) {
                const ind = target.getAttribute('data-nav');
                this._turnOver(true, +ind);
            } 
        }
        
        // сборка/рендер всех нодов и навешивание обработчиков
        get descriptionlist() {
            this.parent = document.createElement('div');
            this.parent.classList.add('popular-functionality__description-list-wrapper');

            const navigationParent = this.createListNavigationNode;

            this.mousedownList = this._mousedownDescriptionlist.bind(this);
            this.mouseupList = this._mouseupDescriptionlist.bind(this);
            this.clickNavigation = this._clickNavButton.bind(this);

            this.parent.addEventListener( 'mousedown', this.mousedownList );
            this.parent.addEventListener( 'mouseup', this.mouseupList );
            this.parent.addEventListener( 'touchstart', this.mousedownList );
            this.parent.addEventListener( 'touchend', this.mouseupList );
            navigationParent.addEventListener( 'click', this.clickNavigation );
            
            
            window.addEventListener('resize', (e) => {
                if (e.target.innerWidth === this.resizeInnerWidth ) {
                    this.resizeInnerWidth = e.target.innerWidth;
                    return;
                }
                this.resizeInnerWidth = e.target.innerWidth;
                
                this._checkScrollWidthOneChank();
                this._turnOver(true, 1);
            });
            
            this.parent.appendChild(this.createListNode);
            this.parent.appendChild(navigationParent);

            return this.parent;
        }
    }
    
    return {
        classList : List,
    };
})();