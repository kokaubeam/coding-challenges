# Twisted Binaries

Note: This problem has been modified since it was first posted:

A few of the examples broke the "The edges of each input array will always be valid" constraint. This didn't affect their solutions.
You have some manually sorted data (all integers), and need to find the first index of a given integer. Some of these data sets can be fairly large, so try to stay efficient.

The catch? Manually sorted data naturally has some errors, and you really want the first index of a correctly placed integer.

## Constraints

- Input will always be one digit per line.
- The first line of input is the token to find, it is not part of the array to search.
- The other lines of input is an array of mostly sorted integers for the slice (g,h,i,j,k) inside the array [a..z], the value at index i is valid if the value at i is less than or equal to value at index j (or, if j is invalid, the value at k) AND the value at i is larger than or equal to the value at index h (or, if h is inavlid, the value at g) the token to find will be an integer, which may or may not be in the array.
- If the integer is not in the array at all, the expected return value is "-1", followed by a second line with the index of where it should go if it were to be inserted.
- If the integer is in the array, the expected return value is the earliest index of the array that has that value and is valid with respect to constraint 4.
- Invalid values don't change the index of subsequent values, they're just discarded as candidates, so you still want to find the index of the first valid position in the original array.
- The edges of each input array will always be valid (that is, you can assume that the first and last number in the array are valid.)

## Examples

### Not in the array

**Input:**

```
3
1
```

**Output:**

```
-1
1
```

### In the array

**Input:**

```
3
1
3
5
```

**Output:**

```
1
```

### In a coincidentally correct array more than once

**Input:**

```
42
1
32
40
41
42
42
42
48
48
55
67
102
102
151
```

**Output:**

```
4
```

### In an invalid spot

**Input:**

```
42
1
42
32
40
41
48
48
55
67
102
102
151
```

**Output:**

```
-1
5
```

### In multiple spots, only one is valid

**Input:**

```
999
1
30
32
999
40
41
48
48
55
67
76
84
999
102
102
151
257
999
999
1000
1200
1313
```

**Output:**

```
17
```

### In multiple spots, one a valid spot with an invalid neighbor, two in invalid spots

**Input:**

```
55
1
30
55
32
40
41
48
50
999
55
67
76
84
99
102
102
151
257
999
55
1000
1200
1313
```

**Output:**

```
9
```
