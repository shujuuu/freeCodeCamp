---
id: bd7188d8c242eddfaeb5bd13
title: Візуалізуйте дані за допомогою теплокарти
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--

**Мета:** створити застосунок, функціонально схожий до <a href="https://heat-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://heat-map.freecodecamp.rocks</a>.

Виконайте історію користувача та пройдіть тести. Використовуйте необхідні вам бібліотеки або API. Оформте за власним стилем.

Ви можете використовувати HTML, JavaScript, CSS та бібліотеку візуалізації D3 на основі svg. Необхідні DOM-елементи запитуються під час кожного тесту. Якщо ви використовуєте фронтенд-фреймворк (наприклад, Vue), результати тестів можуть бути неточними для динамічного вмісту. Ми сподіваємося скоро їх налагодити, однак наразі ці фреймворки не підтримуються для проєктів D3.

**Історія користувача №1:** моя теплокарта повинна мати заголовок з відповідним `id="title"`.

**Історія користувача №2:** моя теплокарта повинна мати опис з відповідним `id="description"`.

**Історія користувача №3:** моя теплокарта повинна мати вісь X з відповідним `id="x-axis"`.

**Історія користувача №4:** моя теплокарта повинна мати вісь Y з відповідним `id="y-axis"`.

**Історія користувача №5:** моя теплокарта повинна мати елементи `rect` із `class="cell"`, що показують дані.

**Історія користувача №6:** потрібно використати принаймні 4 різних кольори заливки для комірок.

**Історія користувача №7:** кожна комірка повинна мати властивості `data-month`, `data-year` та `data-temp` з відповідними значеннями `month`, `year` та `temperature`.

**Історія користувача №8:** властивості `data-month` та `data-year` кожної комірки повинні бути в межах діапазону даних.

**Історія користувача №9:** моя теплокарта повинна мати комірки, розташовані на одному рівні з відповідним місяцем на осі Y.

**Історія користувача №10:** моя теплокарта повинна мати комірки, розташовані на одному рівні з відповідним роком на осі X.

**Історія користувача №11:** моя теплокарта повинна мати декілька позначок з повною назвою місяця на осі Y.

**Історія користувача №12:** моя теплокарта повинна мати декілька позначок з роками від 1754 до 2015 на осі X.

**Історія користувача №13:** моя теплокарта повинна мати легенду з відповідним `id="legend"`.

**Історія користувача №14:** легенда повинна містити елементи `rect`.

**Історія користувача №15:** потрібно використати принаймні 4 різних кольори заливки для елементів `rect`.

**Історія користувача №16:** я можу навести курсор на певну ділянку та побачу спливаючу підказку з відповідним `id="tooltip"`, що показує більше інформації про ділянку.

**Історія користувача №17:** спливаюча підказка повинна мати властивість `data-year`, яка відповідає `data-year` наведеної ділянки.

Ось набір даних, необхідних для виконання цього проєкту: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

Ви можете створити свій проєкт, <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">використовуючи цей шаблон CodePen</a> і натиснувши `Save`. Або ж ви можете скористатися цим посиланням CDN, щоб виконати тести в будь-якому середовищі: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Як тільки закінчите, надайте посилання на свій проєкт з усіма пройденими тестами.

# --solutions--

```js
// solution required
```