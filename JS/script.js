/*1- выбирать элементы на странице*/
//1-1 выбрать эл по id
let header = document.getElementById("title");
console.log(header);

//1-2 выбрать 1 эл по селектору
const container = document.querySelector('.container');
console.log(container);

//1-3 выбрать несколько эл по селектору
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

/* 2 - работа с контентом */

console.log(header.textContent);//только текст без тегов

console.log(header.innerHTML); // и текст и теги
console.log(header.outerHTML); // извлекаем сам элемент+текст и теги
console.log(header.innerText);//текст без тегов
console.log(header.outerText);//текст без тегов

header.textContent = 'Новый заголовок <i class="bi bi-eyeglasses"></i>';//изменить текст (теги воспринимаются как текст)
header.innerHTML = 'Новый заголовок <i class="bi bi-eyeglasses"></i>';// меняем html (теги воспринимаются как теги)
header.outerHTML = '<h3>Новый заголовок <i class="bi bi-eyeglasses"></i></h3>';//полностью перезаписываем и содержимое и сам тег

/* 3 - работа с классами (с атрибутом class) */
const h2 = document.querySelector('h2');
//добавление классов
h2.classList.add('big');
h2.classList.add('blue');
h2.classList.add('title');

//удаление классов
h2.classList.remove('big');
//проверить есть ли класс у элемента
console.log(h2.classList.contains('blue'))
//"переключатель" классов
for(let elem of paragraphs){
    //elem.classList.toggle('text');
    if(elem.classList.contains('text'))
    {
        elem.classList.remove('text')
    } else{
        elem.classList.add('text')
    }
}

/* 4 - работа со стилями (атрибут style) */
const btn = document.querySelector('input[type=submit]')
console.log(btn);
//добавление стилей
btn.style.color = 'blue';
btn.style.background = 'violet';
btn.style.fontSize = '24px';
btn.style.border = '2px solid darkBlue'

/* 5 - работа с атрибутами */
let link = document.querySelector('li:nth-child(3) a')
console.log(link);
//считываем атрибут
console.log(link.getAttribute('href'));
//установить/изменить атрибут
link.setAttribute('href', 'https://midis.ru/');
link.setAttribute('target', '_blank');

//удалить атрибут
btn.removeAttribute('style');

/* 6 - создание нового элемента(тега) */
const block = document.createElement('div');
block.classList.add('block');
block.innerText = 'новый блок';
container.append(block);

const image = document.createElement('img');
image.setAttribute('src', 'img/1.jpg')
image.alt = 'шрэкс';//ещё один способ добавлять атрибут
image.style.width = '50px';
//container.append(image) //в конец контейнера
//container.prepend(image); //в начало контейнера
//container.before(image); //до контейнера
container.after(image); // после контейнера

/* 7 - выбор потомков элементов */
//выбираем все параграфы
const lorems = document.querySelectorAll('p');
console.log(lorems);

//только дочерние параграфы
const content = document.querySelector('.content');
const loremsInContent = content.querySelectorAll('p');
console.log(loremsInContent);

/* 8 - выбор предков */
let form = btn.closest('form');
form.style.border = '2px dotted orange';

/* 9 - обработка событий (клик по кнопке) */
btn.addEventListener('click', function(event){
    event.preventDefault();//отменяем поведение по умолчанию, бновление страницы
    const body = document.querySelector('body');
    body.style.background = 'darkBlue'
    body.style.color = 'white'
    const pass = document.querySelector('input[type=password]').value;
    console.log(pass)
});
