---
id: 5900f4de1000cf542c50fff0
title: 'Завдання 369: бадугі'
challengeType: 1
forumTopicId: 302030
dashedName: problem-369-badugi
---

# --description--

Набір з 4 карт в стандартній колоді з 52 гральних карт називається «бадугі», якщо він не містить пар і всі карти різної масті.

Нехай $f(n)$ буде кількістю способів вибрати $n$ карти з чотирьох карт бадугі. Наприклад, існує $2\\,598\\,960$ способів вибрати п’ять карт зі стандартної колоди з 52 гральних карт, з яких $514\\,800$ містять підмножину бадугі, тому $f(5) = 514800$.

Знайдіть $\sum f(n)$ за умови $4 ≤ n ≤ 13$.

# --hints--

`badugi()` має повернути `862400558448`.

```js
assert.strictEqual(badugi(), 862400558448);
```

# --seed--

## --seed-contents--

```js
function badugi() {

  return true;
}

badugi();
```

# --solutions--

```js
// solution required
```