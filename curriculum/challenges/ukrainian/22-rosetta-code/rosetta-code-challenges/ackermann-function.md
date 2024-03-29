---
id: 594810f028c0303b75339acf
title: Функція Акермана
challengeType: 1
forumTopicId: 302223
dashedName: ackermann-function
---

# --description--

The Ackermann function is a classic example of a recursive function, notable especially because it is not a primitive recursive function. It grows very quickly in value, as does the size of its call tree.

Функція Акермана зазвичай визначається наступним чином:

$A(m, n) = \\begin{cases} n+1 & \\mbox{if } m = 0 \\\\ A(m-1, 1) & \\mbox{if } m > 0 \\mbox{ and } n = 0 \\\\ A(m-1, A(m, n-1)) & \\mbox{if } m > 0 \\mbox{ and } n > 0. \\end{cases}$

Її аргументи ніколи не є від'ємними, і вона завжди закінчується.

# --instructions--

Напишіть функцію, що повертає значення $A(m, n)$. Довільна точність є бажаною (оскільки функція зростає так швидко), але не є обов'язковою.

# --hints--

`ack` має бути функцією.

```js
assert(typeof ack === 'function');
```

`ack(0, 0)` повинен повернутися як 1.

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)` має повернутися як 3.

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)` повинен повернутися як 13.

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)` повинен повертатися як 61.

```js
assert(ack(3, 3) === 61);
```

# --seed--

## --seed-contents--

```js
function ack(m, n) {

}
```

# --solutions--

```js
function ack(m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
```
