---
id: 594810f028c0303b75339acc
title: Problema ABC
challengeType: 1
forumTopicId: 302220
dashedName: abc-problem
---

# --description--

You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:

<pre>(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
</pre>

# --instructions--

Implementa una función que toma una cadena (palabra) y determina si la palabra puede ser escrita con la colección dada de bloques.

Algunas reglas a tener en cuenta:

<ul>
  <li>Once a letter on a block is used, that block cannot be used again.</li>
  <li>La función debería ser insensible a mayúsculas y minúsculas.</li>
</ul>

# --hints--

`canMakeWord` debe ser una función.

```js
assert(typeof canMakeWord === 'function');
```

`canMakeWord` debe devolver un valor booleano.

```js
assert(typeof canMakeWord('hi') === 'boolean');
```

`canMakeWord("cork")` debe devolver verdadero.

```js
assert(canMakeWord(words[0]));
```

`canMakeWord("BooK")` debe devolver falso.

```js
assert(!canMakeWord(words[1]));
```

`canMakeWord("TReAT")` debe devolver verdadero.

```js
assert(canMakeWord(words[2]));
```

`canMakeWord("COMMON")` debe devolver falso.

```js
assert(!canMakeWord(words[3]));
```

`canMakeWord("squAD")` debe devolver verdadero.

```js
assert(canMakeWord(words[4]));
```

`canMakeWord("conFUSE")` debe devolver verdadero.

```js
assert(canMakeWord(words[5]));
```

# --seed--

## --after-user-code--

```js
const words = ['bark', 'BooK', 'TReAT', 'COMMON', 'squAD', 'conFUSE'];
```

## --seed-contents--

```js
function canMakeWord(word) {

}
```

# --solutions--

```js
function canMakeWord(word) {
  const characters = 'BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM';
  const blocks = characters.split(' ').map(pair => pair.split(''));

  const letters = [...word.toUpperCase()];
  let length = letters.length;
  const copy = new Set(blocks);

  letters.forEach(letter => {
    for (let block of copy) {
      const index = block.indexOf(letter);

      if (index !== -1) {
        length--;
        copy.delete(block);
        break;
      }
    }
  });
  return !length;
}
```
