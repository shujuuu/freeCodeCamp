---
id: 5900f4281000cf542c50ff39
title: 'Завдання 186: підключення до мережі'
challengeType: 1
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

Ось записи із зайнятої телефонної мережі з мільйоном користувачів:

| №   | Хто телефонує | Кому телефонують |
| --- | ------------- | ---------------- |
| 1   | 200007        | 100053           |
| 2   | 600183        | 500439           |
| 3   | 600863        | 701497           |
| ... | ...           | ...              |

Мобільним номером абонента та набраним номером у записі №$n$ є $Caller(n) = S_{2n - 1}$ та $Called(n) = S_{2n}$, де ${S}_{1,2,3,\ldots}$ утворюються за допомогою генератора Фібоначчі:

За умови $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{modulo}\\;1000000)$

За умови $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{modulo}\\;1000000)$

Якщо $Caller(n) = Called(n)$, то вважається, що користувач помилився номером і стався збій виклику. В іншому випадку виклик успішний.

Починаючи з першого запису ми кажемо, що будь-яка пара користувачів $X$ та $Y$ є друзями, якщо $X$ телефонує $Y$ або навпаки. Аналогічно, $X$ є другом друга $Z$, якщо $X$ є другом $Y$ та $Y$ є другом $Z$; і так далі в довших ланцюжках.

Мобільний номер прем’єр-міністра: 524287. Після скількох успішних викликів, не враховуючи збої викликів, 99% користувачів (включно з прем’єр-міністром) стануть друзями прем’єр-міністра, друзями його друзів і т. д.?

# --hints--

`connectednessOfANetwork()` має повернути `2325629`.

```js
assert.strictEqual(connectednessOfANetwork(), 2325629);
```

# --seed--

## --seed-contents--

```js
function connectednessOfANetwork() {

  return true;
}

connectednessOfANetwork();
```

# --solutions--

```js
// solution required
```