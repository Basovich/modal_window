# Заготовка для модальных окон, в сборке блокировка прокрутки и стоппер анимации при ресайзе.
__________________________
1. По сути это уже стартовый проект для разработки. <br>
Бонус это класс для модальных окон, заморозка прокрутки, функция хелпер для проверки элемента при делегировании события и стопер анимации при ресайзе.<br><br>
Стек:<br>
1. Gulp + Webpack (js собираем все в один файл, polyfills добавляем из core.js ручками в файл main.js)<br>
2. SCSS<br>
3. Html include - fileinclude - https://www.npmjs.com/package/gulp-file-include<br>
4. Oптимизация картинок<br>
5. Шрифты просто переносит без обработок<br>
<br><br>
Это моя минимальная сборка - https://github.com/Basovich/gulp-simple
__________________________
2. Как использовать.
Внутри этой сборки:
<pre>
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
</pre>
    
Если надо выдернуть этот класс в другую сбоку, то надо учесть, что этот класс имеет зависимость от двух файлов /assets/libs/scroll_locker.js и /helper-function/get-target.js. <br>
Первый обеспечивает заморозку прокрутки, а второй это воспомогательная функция для проверки элемента при делегирования события.
__________________________
3. Для внесения изменений (обновляем проект, пред установкой):<br>
npm i -g npm-check-updates <br>
ncu -u <br>
npm i

