---
id: 5e444136903586ffb414c94d
title: Калькулятор часу
challengeType: 10
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-time-calculator" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

# --instructions--

Напишіть функцію під назвою `add_time`, яка приймає два обов’язкових параметри та один необов’язковий параметр:

- початковий час в 12-годинному форматі (закінчується на AM чи PM)
- проміжок часу, який позначає кількість годин та хвилин
- (необов’язково) перший день тижня, байдуже на регістр

Функція повинна додати проміжок часу до початкового часу та повернути результат.

Якщо результатом буде наступний день, то повинне бути `(next day)` після часу. Якщо результат буде за декілька днів, то повинне бути `(n days later)` після часу, де n — це кількість днів.

Якщо функції задано довільний параметр першого дня тижня, то вивід має показувати день тижня у результаті. День тижня у виводі повинен бути після часу та перед кількістю днів.

Нижче наведені приклади різних випадків, які має опрацьовувати функція. Слідкуйте за інтервалами та пунктуацією в результатах.

```py
add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
```

Не імпортуйте бібліотеки Python. Припустимо, що початковий час є дійсним часом. Хвилини у проміжку часу будуть цілим числом меншим за 60, але години можуть бути будь-яким числом.

## Розробка

Запишіть свій код у `time_calculator.py`. Для розробки ви можете використати `main.py`, щоб протестувати свою функцію `time_calculator()`. Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Модульні тести для цього проєкту знаходяться в `test_module.py`. Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

# --hints--

Проєкт повинен правильно додавати час та пройти всі тести.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```