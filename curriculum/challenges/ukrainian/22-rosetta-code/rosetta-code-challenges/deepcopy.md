---
id: 596a8888ab7c01048de257d5
title: Deepcopy (Глибоке копіювання)
challengeType: 1
forumTopicId: 302247
dashedName: deepcopy
---

# --description--

Write a function that returns a deep copy of a given object. The copy must not be the same object that was given.

Це завдання не буде перевірятися для:

<ul>
  <li>Об’єкти з властивостями, які є функціями</li>
  <li>Об’єкти дати або об’єкти з властивостями, які є об’єктами дати</li>
  <li>Регулярні вирази або об’єкти з властивостями, які є регулярними виразами</li>
  <li>Копіювання прототипу</li>
</ul>

# --hints--

`deepcopy` має бути функцією.

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})` має повертати об'єкт.

```js
assert(typeof deepcopy(obj1) === 'object');
```

`deepcopy` не має повертати той самий об'єкт, який був заданий.

```js
assert(deepcopy(obj2) != obj2);
```

Під час переходу об'єкта, який містить масив, `deepcopy` має повертати глибоку копію об'єкта.

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

Під час переходу об'єкта, який містить інший об'єкт, `deepcopy` має повертати глибоку копію об'єкта.

```js
assert.deepEqual(deepcopy(obj3), obj3);
```

# --seed--

## --after-user-code--

```js
const obj1 = { test: 'test' };
const obj2 = {
  t: 'test',
  a: ['an', 'array']
};
const obj3 = {
  t: 'try',
  o: obj2
};
```

## --seed-contents--

```js
function deepcopy(obj) {

  return true;
}
```

# --solutions--

```js
function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```
