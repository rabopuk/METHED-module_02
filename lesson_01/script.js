'use strict';

const lists = document.querySelectorAll('.item');
const titles = document.querySelectorAll('.item__title');
const propsLists = document.querySelectorAll('.props__list');
const items = document.querySelectorAll('.props__item');


// Убираю рекламу
const ad = document.querySelector('.ads');
ad.remove();

// Карточки в нужном порядке
lists[3].after(lists[0]);

// Цветные списки на места ставлю
propsLists[3].replaceWith(propsLists[4]);
titles[3].after(propsLists[3]);

// Айтемы в списках
items[2].after(items[14]);
items[19].after(items[44]);
items[19].after(items[43]);

// Заголовки
const titleOne = titles[1].cloneNode(true); //
const titleTwo = titles[4].cloneNode(true);
const titleThree = titles[3].cloneNode(true);
titles[1].textContent = titleThree.textContent;
titles[3].textContent = titleTwo.textContent;
titles[4].textContent = titleOne.textContent;
titles[2].textContent = 'This и прототипы объектов';
