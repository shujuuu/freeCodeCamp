---
id: 5e44414f903586ffb414c950
title: Калькулятор вірогідностей
challengeType: 10
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-probability-calculator" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.


# --instructions--

Уявімо, що у капелюсі лежить 5 синіх, 4 червоні та 2 зелені кульки. Яка вірогідність того, що з 4 кульок, які ви витягнете, принаймні 1 буде червоною та 2 зеленими? І хоча можливо прорахувати вірогідність за допомогою вищої математики, легше буде написати програму для виконання великої кількості експериментів, щоб оцінити приблизну вірогідність.

У цьому проєкті напишіть програму, яка визначатиме вірогідність випадкового діставання певних кульок із капелюха.

Спершу створіть клас `Hat` в `prob_calculator.py`. Клас має прийняти змінну кількість аргументів, що вказують кількість кульок усіх кольорів із капелюха. Наприклад, об’єкт класу можна створити такими способами:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Капелюх завжди створюється з принаймні однією кулькою. Аргументи, які передаються в об’єкт-капелюх, під час створення мають конвертуватися в поле класу `contents`. `contents` має бути списком рядків, де один елемент дорівнює кожній кульці у капелюсі. Кожний елемент списку має бути назвою кольору, яка позначає кульку певного кольору. Наприклад, якщо ваш капелюх `{"red": 2, "blue": 1}`, то `contents` має бути `["red", "red", "blue"]`.

Клас `Hat` повинен мати метод `draw`, який приймає аргумент з позначенням кількості кульок, які можна витягти з капелюха. Цей метод має випадково витягати кульки з `contents` та повертати ці кульки списком рядків. Кульки не повинні повертатися до капелюха після того, як їх витягли (як в експерименті з урною без заміни). Якщо кількість кульок, які треба витягти, перевищує доступну кількість, поверніть усі кульки.

Потім створіть функцію `experiment` в `prob_calculator.py` (не в класі `Hat`). Ця функція повинна приймати наступні аргументи:

- `hat`: об’єкт-капелюх з кульками, що потрібно скопіювати у функцію.
- `expected_balls`: об’єкт, який вказує на точну кількість кульок, які треба вийняти з капелюха для експерименту. Наприклад, щоб визначити вірогідність того, що ви витягнете 2 сині та 1 червону кульки з капелюха, встановіть `expected_balls` на `{"blue":2, "red":1}`.
- `num_balls_drawn`: кількість кульок, які треба витягти з капелюха в кожному експерименті.
- `num_experiments`: кількість експериментів, які треба провести. (Чим більше експериментів було проведено, тим точнішою буде вірогідність.)

Функція `experiment` повинна повертати вірогідність.

Допустимо, якщо ви хочете визначити вірогідність витягти щонайменше 2 червоні кульки та одну зелену, коли витягаєте п’ять кульок з капелюха, де лежить шість чорних, чотири червоні та три зелені кульки. Для цього вам треба виконати `N` експериментів, порахувати скільки `M` разів ви можете витягти принаймні дві червоні кульки та одну зелену кульку та вирахувати вірогідність як `M/N`. Кожен експеримент складається з капелюха (з певними кульками), витягування декількох кульок та перевірки, чи ви витягли необхідні кульки.

Ось так ви можете викликати функцію `experiment`, базуючись на прикладі зверху з 2000 експериментами:

```py
hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={"red":2,"green":1},
                  num_balls_drawn=5,
                  num_experiments=2000)
```

Оскільки все базується на випадкових витяганнях, то вірогідність буде злегка відрізнятися з кожним новим запуском коду.

*Підказка: спробуйте використати вже імпортовані модулі зверху `prob_calculator.py`. Не ініціалізуйте випадкове початкове значення в `prob_calculator.py`.*

## Розробка

Запишіть свій код у `prob_calculator.py`. Для розробки ви можете використати `main.py`, щоб протестувати свій код. Натисніть кнопку «run» і `main.py` запуститься.

Шаблонний код містить інструкції `import` для модулів `copy` та `random`. Спробуйте використати їх у своєму проєкті.

## Тестування

Модульні тести для цього проєкту знаходяться в `test_module.py`. Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

# --hints--

Проєкт повинен правильно вираховувати вірогідність та пройти всі тести.

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