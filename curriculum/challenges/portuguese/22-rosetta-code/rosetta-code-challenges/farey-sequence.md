---
id: 59c3ec9f15068017c96eb8a3
title: Sequência de Farey
challengeType: 1
forumTopicId: 302266
dashedName: farey-sequence
---

# --description--

The Farey sequence <code>F<sub>n</sub></code> of order `n` is the sequence of completely reduced fractions between `0` and `1` which, when in lowest terms, have denominators less than or equal to `n`, arranged in order of increasing size.

A *sequência de Farey*, algumas vezes, é incorretamente chamada de *série de Farey*.

Cada sequência de Farey:

<ul>
  <li>starts with the value  0,  denoted by the fraction  $ \frac{0}{1} $</li>
  <li>ends with the value  1,  denoted by the fraction  $ \frac{1}{1}$.</li>
</ul>

As sequências de Farey de ordens `1` a `5` são:

<ul>
  <li style='list-style: none;'>${\bf\it{F}}_1 = \frac{0}{1}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_2 = \frac{0}{1}, \frac{1}{2}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_3 = \frac{0}{1}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_4 = \frac{0}{1}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_5 = \frac{0}{1}, \frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{2}{5}, \frac{1}{2}, \frac{3}{5}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{1}{1}$</li>
</ul>

# --instructions--

Escreva uma função que retorne a sequência de Farey de ordem `n`. A função deve ter um parâmetro que é `n`. Ela deve retornar a sequência como um array.

# --hints--

`farey` deve ser uma função.

```js
assert(typeof farey === 'function');
```

`farey(3)` deve retornar um array

```js
assert(Array.isArray(farey(3)));
```

`farey(3)` deve retornar `['0/1','1/3','1/2','2/3','1/1']`

```js
assert.deepEqual(farey(3),['0/1', '1/3', '1/2', '2/3', '1/1']);
```

`farey(4)` deve retornar `['0/1','1/4','1/3','1/2','2/3','3/4','1/1']`

```js
assert.deepEqual(farey(4), ['0/1', '1/4', '1/3', '1/2', '2/3', '3/4', '1/1']);
```

`farey(5)` deve retornar `['0/1','1/5','1/4','1/3','2/5','1/2','3/5','2/3','3/4','4/5','1/1']`

```js
assert.deepEqual(farey(5), [
  '0/1',
  '1/5',
  '1/4',
  '1/3',
  '2/5',
  '1/2',
  '3/5',
  '2/3',
  '3/4',
  '4/5',
  '1/1'
]);
```

# --seed--

## --seed-contents--

```js
function farey(n) {

}
```

# --solutions--

```js
function farey(n) {
  const sequence = [{ string: "0/1", float: 0.0 }];
  for (let i = 1; i < n; i++) {
    for (let j = n; j >= i; j--) {
      if (i === 1 || j % i > 0) {
        sequence.push({ string: `${i}/${j}`, float: i / j });
      }
    }
  }
  return sequence
    .sort((a, b) => a.float - b.float)
    .map(e => e.string)
}
```
