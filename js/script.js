"use strict";

// Filters 
const menuParents = document.querySelectorAll('.menu-categories__item'),
	submenuItems = document.querySelectorAll('.submenu-categories');

// Показать меню подкатегорий
for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];
	menuParent.addEventListener('click', () => {
		const submenuNumber = parseInt(menuParent.getAttribute('data-item'));
		submenuItems[submenuNumber].classList.remove('hidden');
		submenuItems[submenuNumber].classList.add('show');
	});
}


// Выбрать все категории
function check(field, flag) {
	if (flag == 1) {
		for (let i = 0; i < field.length; i++) {
			field[i].checked = true;
		}
	} else {
		for (let i = 0; i < field.length; i++) {
			field[i].checked = false;
		}
	}
}

// Кол-во выбранных товаров
function takeNumbersGoods(form) {
	const itemsList = form.querySelectorAll('ul li'),
		numberForm = form.dataset.item;
	let totalNumberGoods = 0;

	itemsList.forEach(liElem => {
		const input = liElem.querySelector('input');
		if (input.checked) {
			const itemNumber = parseInt(liElem.querySelector('span').dataset.count);
			totalNumberGoods += itemNumber;
		}
	});

	form.classList.remove('show');
	form.classList.add('hidden');
	

	menuParents.forEach(menuItem => {
		if (menuItem.dataset.item == numberForm) {
			const menuItemText = menuItem.querySelector('span');
			if (totalNumberGoods !== 0) {
				menuItemText.innerHTML = `(${totalNumberGoods})`;
			} else {
				menuItemText.innerHTML = '';
			}
		}
	});
}

// Сбросить все выбранные категории
function resetCategories() {
	const checkboxes = document.querySelectorAll('.submenu-categories__item input'),
          radioButtons = document.querySelectorAll('.filters-certificate__checkbox');

	checkboxes.forEach((checkbox) => {
		checkbox.checked = false;
	});

    radioButtons[0].checked = true;


	menuParents.forEach(menuItem => {
		const menuItemText = menuItem.querySelector('span');
		menuItemText.innerHTML = '';
	});
};
// search
const searchButton = document.querySelector('.search-field__submit'),
      serchResultsNull = document.querySelector('.search-results__null'),
      serchResults = document.querySelector('.search-results__content'),
      preloader = document.querySelector('.preloader');

searchButton.addEventListener('click', () => {
    preloader.classList.remove('active');
    serchResults.classList.remove('active');
    serchResultsNull.classList.add('active');
})

// кнопка Смотреть еще
const data = [
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
    {
        title: 'Cыворотка крем для рук',
        company: 'Shiseido',
        link: '#'
    },
]

class Product{
    constructor(data) {
        this.wrapper = document.querySelector('.search-results__items');
        this.data = data;

        // generate HTML block
        this.wrapper.append(this.generateBlock());

    }

    generateBlock(){
        const wrapBlock = document.createElement('div');

        wrapBlock.classList.add('search-results__item', 'search-item');

        // generate title
        const title = document.createElement('h3');
        title.classList.add('search-item__title')
        title.innerText = `${this.data.title}`;

        // generate company
        const company = document.createElement('p');
        company.classList.add('search-item__text');
        company.innerText = `${this.data.company}`;

        // generate button
        const button = document.createElement('a');
        button.classList.add('search-item__btn', 'btn', 'btn-red');
        button.innerText = 'Подробнее';
        button.href = `${this.data.link}`;

        // append elements to wrap block
        wrapBlock.append(title);
        wrapBlock.append(company);
        wrapBlock.append(button);

        return wrapBlock;
    }
}

const moreProductsButton = document.querySelector('.search-results__btn'),
      productsItemsParent = document.querySelector('.search-results__items');
let   productsItems = productsItemsParent.childNodes;

for (let i=0; i < 4; i++) {
    if (data.length <= productsItems.length){
        moreProductsButton.classList.add('hidden');
    }else{
        new Product(data[i]);
    }
}

moreProductsButton.addEventListener('click', () => {
    for (let i=0; i < 8; i++) {
        if (data.length <= productsItems.length){
            moreProductsButton.classList.add('hidden');
        }else{
            new Product(data[i]);
        }
    }
});


// Берем выбранные категории 
const showCatTrigger = document.querySelector('[data-show]'),
      allCats = document.querySelectorAll('[data-cat]'),
      allBrands = document.querySelectorAll('[data-brand]');

showCatTrigger.addEventListener('click', () => {
    takeSelectedCategories(allCats);
    takeSelectedBrands(allBrands);
});

function takeSelectedCategories(allCats){
    let selectedCats = [];

    allCats.forEach((cat) => {
        const titleCat = cat.querySelector('label').textContent,
              checkboxCat = cat.querySelector('input');
        if (checkboxCat.checked) {
            selectedCats.push(titleCat);
        }
    });
    if (selectedCats.length > 0){
        console.log(selectedCats);
    }
    return selectedCats;
    
}

function takeSelectedBrands(allBrands){
    let selectedBrands = [];

    allBrands.forEach((brand) => {
        const titleBrand = brand.querySelector('label').textContent,
              checkboxBrand = brand.querySelector('input');
        if (checkboxBrand.checked) {
            selectedBrands.push(titleBrand);
        }
    });

    if (selectedBrands.length > 0){
        console.log(selectedBrands);
    };
    return selectedBrands;
}

// Берем текст из поля поиска
const takeTextTrigger = document.querySelector('.search-field__submit'),
      searchField = document.querySelector('.search-field__wrap input');

takeTextTrigger.addEventListener('click', () => {
    console.log(searchField.value)
});


// Modal
const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelectorAll('[data-close]'),
    modalContent = document.querySelector('.filters__menu');

    // открытие модального окна
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            modal.classList.add('show');
            modalContent.classList.remove('hidden');
            modalContent.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

    });

    // закрытие модального окна
    function closeModal() {
        submenuItems.forEach( (submenuItem) => {
            submenuItem.classList.remove('hidden');
        })
        modalContent.classList.remove('show');
        modalContent.classList.add('hidden');
        modal.classList.remove('show');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    modalCloseBtn.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // закрытие модального окна кликом на подложку
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });



