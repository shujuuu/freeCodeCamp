---
id: 5e6dd14192286d95fc43046e
title: Завдання найдовшого рядка
challengeType: 1
forumTopicId: 385275
dashedName: longest-string-challenge
---

# --description--

In this challenge, you have to find the strings that are the longest among the given strings.

# --instructions--

Напишіть функцію, яка приймає масив рядків і повертає рядки, довжина яких дорівнює найдовшій довжині.

# --hints--

`longestString` має бути функцією.

```js
assert(typeof longestString == 'function');
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` має повернути масив.

```js
assert(Array.isArray(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg'])));
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` має повернути масив `["ccc", "ggg"]`.

```js
assert.deepEqual(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg']), [
  'ccc',
  'ggg'
]);
```

`longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])` має повернути `["afedg", "sdccc", "efdee", "geegg"]`.

```js
assert.deepEqual(
  longestString(['afedg', 'bb', 'sdccc', 'efdee', 'f', 'geegg']),
  ['afedg', 'sdccc', 'efdee', 'geegg']
);
```

`longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])` має повернути `["bhghgb", "fssdrr"]`.

```js
assert.deepEqual(
  longestString(['a', 'bhghgb', 'ccc', 'efde', 'fssdrr', 'ggg']),
  ['bhghgb', 'fssdrr']
);
```

`longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])` має повернути `["ahgfhg", "bdsfsb", "ggdsfg"]`.

```js
assert.deepEqual(
  longestString(['ahgfhg', 'bdsfsb', 'ccc', 'ee', 'f', 'ggdsfg']),
  ['ahgfhg', 'bdsfsb', 'ggdsfg']
);
```

`longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])` має повернути `["gzzzgg"]`.

```js
assert.deepEqual(longestString(['a', 'bbdsf', 'ccc', 'edfe', 'gzzzgg']), [
  'gzzzgg'
]);
```

# --seed--

## --seed-contents--

```js
function longestString(strings) {

}
```

# --solutions--

```js
function longestString(strings) {
    var mx = 0;
    var result = []
    strings.forEach(function (e) {
        if (e.length > mx) {
            mx = e.length
            result = [e]
        } else if (e.length == mx)
            result.push(e)
    })

    return result
}
```
