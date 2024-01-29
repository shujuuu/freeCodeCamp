---
id: 5e46f8d6ac417301a38fb92d
title: Камінь-ножиці-папір
challengeType: 10
forumTopicId: 462376
dashedName: rock-paper-scissors
---

# --description--

В цьому завданні ви створите програму, щоб грати в камінь-ножиці-папір. Програма, яка обиратиме випадково, зазвичай виграватиме у 50%. Щоб виконати це завдання, ваша програма повинна зіграти матчі проти чотирьох різних ботів, вигравши принаймні 60% ігор у кожному матчі.

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-rock-paper-scissors" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Ми досі розробляємо інтерактивну складову для навчальної програми з машинного навчання. Поки вам доведеться використовувати інші ресурси, щоб виконати це завдання.

# --instructions--

У файлі `RPS.py` вам надається функція під назвою `player`. Функція приймає аргумент, який є рядком, що описує останній хід суперника («R», «P» або «S»). Функція повинна повертати рядок, що представляє наступний хід для відтворення («R», «P» або «S»).

Функція гравця отримає порожній рядок як аргумент для першої гри в матчі, оскільки немає попередньої гри.

У файлі `RPS.py` показано приклад функції, яку вам потрібно оновити. Приклад функції визначається двома аргументами (`player(prev_play, opponent_history = [])`). Функція ніколи не викликається другим аргументом, тому він є абсолютно необов’язковим. Причина, чому функція з прикладу містить другий аргумент (`opponent_history = []`), полягає в тому, що це єдиний спосіб зберегти стан між послідовними викликами функції `player`. Вам потрібен лише аргумент `opponent_history`, якщо ви хочете стежити за історією ходів супротивника.

*Підказка: щоб перемогти всіх чотирьох супротивників, ваша програма повинна мати багато стратегій, які змінюються залежно від гри супротивника.*

## Розробка

Не змінюйте `RPS_game.py`. Запишіть весь свій код у `RPS.py`. Для розробки ви можете використати `main.py`, щоб протестувати свій код.

`main.py` імпортує функцію гри та ботів із `RPS_game.py`.

Щоб перевірити свій код, пограйте в гру за допомогою функції `play`. Функція `play` приймає чотири аргументи:

- два гравці грають один проти одного (насправді гравцями є функції)
- кількість ігор, які потрібно зіграти в матчі
- додатковий аргумент для перегляду записів кожної гри. Встановіть його на `True`, щоб побачити ці повідомлення.

```py
play(player1, player2, num_games[, verbose])
```

Наприклад, ось як можна викликати функцію, якщо ви хочете, щоб `player` та `quincy` зіграли один проти одного 1000 ігор та бажаєте побачити результати кожної гри:

```py
play(player, quincy, 1000, verbose=True)
```

Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Модульні тести для цього проєкту знаходяться в `test_module.py`. Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Якщо ви видалите коментар в останньому рядку в `main.py`, тести запустяться автоматично, коли ви натиснете кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

# --hints--

Проєкт повинен пройти усі тести Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```