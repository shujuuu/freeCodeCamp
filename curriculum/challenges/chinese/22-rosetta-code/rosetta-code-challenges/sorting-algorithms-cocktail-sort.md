---
id: 5a23c84252665b21eecc8004
title: 排序算法/鸡尾酒排序
challengeType: 1
forumTopicId: 302312
dashedName: sorting-algorithmscocktail-sort
---

# --description--

The <a href="https://rosettacode.org/wiki/Sorting_algorithms/Cocktail_sort" target="_blank" rel="noopener noreferrer nofollow">cocktail sort</a> is an improvement on the Bubble Sort. Given an array of numbers, the cocktail sort will traverse the array from start to finish, moving the largest number to the end. Then, it will traverse the array backwards and move the smallest number to the start. It repeats these two passes, moving the next largest/smallest number to its correct position in the array until it is sorted.

# --instructions--

编写一个使用鸡尾酒排序对给定数组进行排序的函数。

# --hints--

`cocktailSort` 应该是一个函数。

```js
assert(typeof cocktailSort == 'function');
```

`cocktailSort([25, 32, 12, 7, 20])` 应该返回一个数组。

```js
assert(Array.isArray(cocktailSort([25, 32, 12, 7, 20])));
```

`cocktailSort([25, 32, 12, 7, 20])` 应该返回 `[7, 12, 20, 25, 32]`。

```js
assert.deepEqual(cocktailSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`cocktailSort([38, 45, 35, 8, 13])` 应该返回 `[8, 13, 35, 38, 45]`。

```js
assert.deepEqual(cocktailSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`cocktailSort([43, 36, 20, 34, 24])` 应该返回 `[20, 24, 34, 36, 43]`。

```js
assert.deepEqual(cocktailSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`cocktailSort([12, 33, 26, 18, 1, 16, 38])` 应该返回 `[1, 12, 16, 18, 26, 33, 38]`。

```js
assert.deepEqual(cocktailSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`cocktailSort([3, 39, 48, 16, 1, 4, 29])` 应该返回 `[1, 3, 4, 16, 29, 39, 48]`。

```js
assert.deepEqual(cocktailSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function cocktailSort(arr) {

}
```

# --solutions--

```js
function cocktailSort(arr) {
  let isSorted = true;
  while (isSorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;

    isSorted = false;

    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        isSorted = true;
      }
    }
  }

  return arr;
}
```
