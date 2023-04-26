# Карточки

Цей проект було створено за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства
та налаштування додаткових можливостей
[зверніться до документації](https://facebook.github.io/create-react-app/docs/getting-started).

## Мета створення проекту

Метою створення проекту було користування користувачем інтерактивних карток.

## Критерії виконання

1. Верстка фіксована в рх, семантична та валідна.
2. Робота виконана на нативному JS з використанням зборщиків або на React.
3. Немає помилок в консолі браузера.
4. Код відформатований та без коментарів.
5. В репозиторії має бути описаний README.md.

## Технічне завдання

1. Відповідно до макету потрібно реалізувати картки юзера.
2. При клікові на кнопку Follow - текст змінюється на Following. Також
   змінюється колір кнопки. А до кількості фоловерів додається і ваш. Тобто,
   початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде
   100,501.
3. При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто,
   якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається
   в стані Following із відповідним кольором, а кількість фоловерів НЕ
   зменшується до початкового значення.
4. При повторному клікові на кнопку її текст та колір змінюються до початкового
   стану. Також змінюється і кількість фоловерів. Вона зменшується на 1
   (100,500).
5. В коді цифра 100,500 має бути прописана одним значенням (100500). В UI -
   виведено через кому (100,500).

### Бекенд

Створити свій персональний бекенд для розробки за допомогою UI-сервісу
mockapi.io.

### Додатково

Додатково була створи маршрутизація за допомогою React Router.

# Cards

This project was created with the help of
[Create React App](https://github.com/facebook/create-react-app). For
acquaintance and setting additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## The purpose of creating the project

The purpose of creating the project was the user's use of interactive cards.

## Performance criteria

1. The layout is fixed in px, semantic and valid.
2. The work is done on native JS using assemblers or on React.
3. There are no errors in the browser console.
4. The code is formatted and uncommented.
5. A README.md should be described in the repository.

## Technical task

1. According to the layout, you need to implement user cards.
2. When clicking on the Follow button, the text changes to Following. Also the
   color of the button changes. And yours is added to the number of followers.
   That is, the initial number is 100,500 followers. When you click on the
   button it will be 100,501.
3. When the page is updated, the final result of the user's actions should be
   recorded. That is, if you click on the button and refresh the page, the
   button remains the same in the Following state with the corresponding color,
   and the follower count is NOT decreases to the initial value.
4. When you click the button again, its text and color change to the original
   state The number of followers also changes. It decreases by 1 (100,500).
5. In the code, the number 100,500 must be written with one value (100500). In
   the UI - comma-delimited (100,500).

### Backend

Create your personal backend for development using the UI service mockapi.io.

### Additionally

In addition, routing was created using React Router.
