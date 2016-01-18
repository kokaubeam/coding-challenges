# Rotten Avocados

JT is a fruit vendor at the local farmer's market. He has got some locally grown avocados in his inventory that are about to go bad. Help him calculate the number of days it will take for the whole bunch to go bad. The avocados are arranged in a 2D array (each cell can hold a single avocado), with numbers representing their state (0 -> empty cell, 1 -> good avocado, 2 -> rotten avocado). A rotten avocado can turn a good avocado to bad in 1 day. Also a rotten avocado can affect only those cells that are adjacent to its own cell (up, down, left, right).

You will get two integers M and N as the first line of input, where M is the row count of the 2D array, N is the column count of the array.

They will be followed by M lines, each having N integers (values ranging from 0 to 2). They represent the arrangement of avocados in each row.

You should output a single integer that denotes the number of days required for the whole bunch to turn bad. In case the whole bunch cannot be turned bad, output -1

## Example 1

**STDIN:**

```
3 5
2 1 0 2 1
1 0 1 2 1
1 0 0 2 1
```

**STDOUT:**

```
2
```

## Example 2

**STDIN:**

```
3 5
2 1 0 2 1
0 0 1 2 1
1 0 0 2 1
```

**STDOUT:**

```
-1
```
