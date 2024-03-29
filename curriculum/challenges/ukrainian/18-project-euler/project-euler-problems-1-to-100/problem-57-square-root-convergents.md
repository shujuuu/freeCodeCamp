---
id: 5900f3a51000cf542c50feb8
title: 'Завдання 57: наближення квадратного кореня'
challengeType: 1
forumTopicId: 302168
dashedName: problem-57-square-root-convergents
---

# --description--

Можна переконатися в тому, що квадратний корінь з двійки можна виразити у вигляді нескінченного дробу.

<div style='text-align: center;'>$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</div>

Наблизивши цей вираз для перших чотирьох ітерацій, отримаємо:

$1 + \\frac 1 2 = \\frac 32 = 1.5$

$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$

Наступними трьома наближеннями є $\\frac {99}{70}$, $\\frac {239}{169}$ та $\\frac {577}{408}$, але восьме наближення $\\frac {1393}{985}$ є першим прикладом виразу, в якому кількість цифр у чисельнику перевищує кількість цифр у знаменнику.

Скільки дробів містять більше цифр у чисельнику ніж у знаменнику в перших `n` наближеннях?

# --hints--

`squareRootConvergents(10)` має повернути число.

```js
assert(typeof squareRootConvergents(10) === 'number');
```

`squareRootConvergents(10)` має повернути 1.

```js
assert.strictEqual(squareRootConvergents(10), 1);
```

`squareRootConvergents(100)` має повернути 15.

```js
assert.strictEqual(squareRootConvergents(100), 15);
```

`squareRootConvergents(1000)` має повернути 153.

```js
assert.strictEqual(squareRootConvergents(1000), 153);
```

# --seed--

## --seed-contents--

```js
function squareRootConvergents(n) {

  return true;
}

squareRootConvergents(1000);
```

# --solutions--

```js
function squareRootConvergents(n) {
  function countDigits(number) {
    let counter = 0;
    while (number > 0) {
      counter++;
      number = number / 10n;
    }
    return counter;
  }

  // Use BigInt as integer won't handle all cases
  let numerator = 3n;
  let denominator = 2n;
  let moreDigitsInNumerator = 0;

  for (let i = 2; i <= n; i++) {
    [numerator, denominator] = [
      numerator + 2n * denominator,
      denominator + numerator
    ];

    if (countDigits(numerator) > countDigits(denominator)) {
      moreDigitsInNumerator++;
    }
  }
  return moreDigitsInNumerator;
}
```
