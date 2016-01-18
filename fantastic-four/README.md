# Fantastic Four

Tic-Tac-Toe++!

Ah, that children's classic, the board game that almost feels like it's strategic when you're 6 years old. Unfortunately, playing an expanded version on an unbounded board with other 6 year olds is tedious, as they keep insisting they've won when the game is clearly not over.

Let's automate away the problem of having to manually crush the dreams of children with your superior scoring ability.

## Constraints

The input will always be a square 2 dimensional matrix of cells (comma delimited within rows, each row is delimited by a new line), each cell having a value that is one of "B" (black), "R" (red), or "_" (empty). Each point is placed once and may never be moved or changed for the remainder of the game.

## Example

**STDIN:**

```
B,B,R,_,R
B,_,R,_,R
_,B,B,_,R
B,_,R,_,_
B,B,R,_,R
```

The above game has no win condition fulfilled currently.

A Win condition exists when there are 4 cells consecutively in any direction (horizontally, vertically, diagonally) that have the same non-empty value (only B or R). A win condition, when identified, is conveyed by the output "Win_[winning_color]" as the first line, with the top-left-most (prioritize top over left) coordinate of the winning sequence on the second line as "[row,column]". Zero-based indexing, top left is the origin.

A game with no current winner should output "Unsettled" as the first line, with the count of remaining empty cells on the board as the second line.

A game with no possible wins from here forward should output "Draw", with the count of remaining empty cells on the board as the second line.

Because play is turn based, there will never be a game state where there is more than one win condition on the board. The program should return "Invalid" in this case, with the top-left-most coordinate of each win sequence on each following line, ordered from the top left by row.

### Horizontal win

**STDIN:**

```
B,B,R,_,R
B,_,R,_,R
_,B,B,B,B
B,_,R,_,_
B,B,R,_,R
```

**STDOUT:**

```
Win_B
[2,1]
```

### Vertical Win

**STDIN:**

```
B,B,R,_,R,_
B,_,R,_,R,B
_,B,R,B,B,R
B,_,R,_,_,_
B,B,B,_,R,_
B,R,_,_,R,_
```

**STDOUT:**

```
Win_R
[0,2]
```

### Diagonal Win

**STDIN:**

```
_,_,_,_,_,_,_,_,_,_
_,_,_,_,_,_,_,_,_,_
_,_,_,_,_,_,_,_,_,_
_,_,_,_,_,B,_,_,_,_
_,_,_,_,B,_,_,_,_,_
_,_,_,B,_,_,_,_,_,_
_,_,B,_,_,_,_,_,_,_
_,_,_,_,_,R,R,R,_,_
_,_,_,_,_,_,_,_,_,_
_,_,_,_,_,_,_,_,_,_
```

**STDOUT:**

```
Win_B
[3,5]
```

### Unfinished

**STDIN:**

B,B,R,_,R
B,_,R,_,R
_,B,B,_,R
B,_,R,_,_
B,B,R,_,R

**STDOUT:**

```
Unsettled
9
```

### Complete Draw

**STDIN:**

```
B,R,B,R
R,R,B,B
B,B,R,R
R,B,R,B
```

**STDOUT:**

```
Draw
0
```

### Inevitable Draw

**STDIN:**

```
B,B,R,R,B,B,_,R,B,R
B,B,R,B,B,B,R,B,R,B
R,R,B,R,R,B,B,R,R,B
B,R,B,R,R,R,B,R,B,B
_,B,B,R,B,B,B,R,R,R
R,R,R,B,_,R,R,B,R,R
R,B,B,R,R,B,R,B,R,B
B,R,R,R,B,R,R,R,B,_
R,B,B,B,R,_,B,R,B,B
B,_,R,B,B,R,_,B,R,R
```

**STDOUT:**

```
Draw
7
```

### Invalid State

**STDIN:**

```
B,R,B,R
B,R,B,R
B,R,B,R
B,R,B,R
```

**STDOUT:**

```
Invalid
[0,0]
[0,1]
[0,2]
[0,3]
```

Now get out there and show those kids who's boss.

