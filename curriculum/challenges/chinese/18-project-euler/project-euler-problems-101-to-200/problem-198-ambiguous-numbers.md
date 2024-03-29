---
id: 5900f4331000cf542c50ff45
title: '问题 198：模糊数字'
challengeType: 1
forumTopicId: 301836
dashedName: problem-198-ambiguous-numbers
---

# --description--

A best approximation to a real number $x$ for the denominator bound $d$ is a rational number $\frac{r}{s}$ (in reduced form) with $s ≤ d$, so that any rational number $\frac{p}{q}$ which is closer to $x$ than $\frac{r}{s}$ has $q > d$.

通常，对于所有分母边界唯一确定对实数的最佳近似。 However, there are some exceptions, e.g. $\frac{9}{40}$ has the two best approximations $\frac{1}{4}$ and $\frac{1}{5}$ for the denominator bound $6$. We shall call a real number $x$ ambiguous, if there is at least one denominator bound for which $x$ possesses two best approximations. 显然，模糊的数字必然是理性的。

How many ambiguous numbers $x = \frac{p}{q}$, $0 &lt; x &lt; \frac{1}{100}$, are there whose denominator $q$ does not exceed ${10}^8$?

# --hints--

`ambiguousNumbers()` should return `52374425`.

```js
assert.strictEqual(ambiguousNumbers(), 52374425);
```

# --seed--

## --seed-contents--

```js
function ambiguousNumbers() {

  return true;
}

ambiguousNumbers();
```

# --solutions--

```js
// solution required
```
