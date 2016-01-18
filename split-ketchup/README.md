# Spilt Ketchup

Your former co-worker JT works at a distributed storage startup. Recently their offices were beset by thieves looking for next-generation prototypes.
While ransacking JT’s desk, the thieves (who came away empty-handed) scattered his many ketchup packets all over the floor. The end result looks something like this:

```
- - - - x - - - x
- x - - - - x - x
- - - - - - - - -
- - - x - - - x -
x - - - J - - - -
- - - - - - x - -
- - x - - - - - x
- - - - x - - x -
- - - - - - - - -
```

Forlorn but undeterred, JT (J) begins to pick up the ketchup packets (x), moving from nearest packet to nearest packet. Your task is to determine how far JT must walk to pick up all of the ketchup packets.

## Input

The first line of STDIN will contain the number of ketchup packets JT is looking for. Subsequent lines will each contain an X,Y pair with each value between 0 and 1 inclusive.

JT always begins in the middle of the floor, at position 0.5,0.5.

Your program should print the total distance traveled rounded to exactly two decimal places (meaning 1.9 should be printed as 1.90).

## Example

**STDIN:**

```
4
0.3,1
0.7,0.2
0.4,0.4
0.9,0.5
```

**STDOUT:**

```
1.64
```