# The Penny Fairy

Your friend JT has a problem. Every morning when he unlocks his car, he finds new pennies in his cupholder and ketchup packets scattered everywhere. He's not sure who's putting them there or how they're doing it -- only he has a key -- but that's not actually what he's worried about. JT is concerned that eventually he won't be able to fit his Soylent travel mug in the cupholder.

He's started tallying how many pennies are left every night, and has discovered that it depends on how many were there before; it grows by a constant factor. This growth rate may not be an integer, but the number of pennies always will be (rounding up when necessary), e.g. 18 -> 27 -> 41 -> 62 ...

JT has also calculated how many pennies can go in the cupholder before the mug won't fit. He just needs to figure out how long he can safely wait before removing the pennies.

Given the penny count from yesterday, the penny count from today, and a maximum penny capacity, calculate the minimum number of days it will take the penny population to meet or exceed the capacity.

## Example 1

**STDIN:**

```
1
10
10000
```

**STDOUT:**

```
3
```

## Example 2

**STDIN:**

```
4
6
20
```

**STDOUT:**

```
3
```
