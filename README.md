# Заготовка для модальных окон, в сборке блокировка прокрутки и стоппер анимации при ресайзе.
__________________________
1. По сути это уже стартовый проект для разработки. Бонус это класс для модальных окон, заморозка прокрутки, функция хелпер для проверки элемента при делегировании события и стопер анимации при ресайзе.
Стек:
Gulp + Webpack (js собираем все в один файл, polyfills добавляем из core.js ручками в файл main.js)
SCSS
html include - fileinclude - https://www.npmjs.com/package/gulp-file-include
оптимизация картинок
шрифты просто переносит без обработок

Это моя минимальная сборка - https://github.com/Basovich/gulp-simple
__________________________
2. Как использовать.
Внутри этой сборки:
***
const modal = new Modal({
    // Срабатывает при открытии модалки
    isOpen: (modal, attr) => {       
        console.log(attr); // атрибут окна которое сейчас открылось
        console.log(modal); // обьект модалки
    },
    // Срабатывает при закрытии модалки
    isClose: (modal) => { 
        console.log(modal); // обьект модалки
    }
})  

Если надо выдернуть этот класс в другую сбоку, то надо учесть, что этот класс имеет зависимость от двух файлов /assets/libs/scroll_locker.js и /helper-function/get-target.js. Первый обеспечивает заморозку прокрутки, а второй это воспомогательная функция для проверки элемента при делегирования события.
__________________________
3. Для внесения изменений (обновляем проект, пред установкой):
npm i -g npm-check-updates <br>
ncu -u <br>
npm i

