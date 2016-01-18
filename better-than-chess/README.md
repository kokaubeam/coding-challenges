# It's Totally Better Than Chess

Go is an amazing game of strategy and cunning where players take turns placing colored stones on a board to try to surround more territory than their opponent.

Playing it is really fun. Scoring it is really tedious.

Build a program that can take the serialized state of a Go board and output the final score according to the following rules:

1. A space with a stone on it is not worth any points.
2. spaces are contiguous if they are related horizontally or vertically (not diagonally)
3. Each cell of space inside a contiguous region of spaces surrounded by a single
color of stones is worth one point for that color. (being against a wall is the same
as being surrounded)
4. Each cell of space that is in a contiguous regions of spaces that is touched by
both black and white stones is neutral, and worth points for neither player.
5. Boards are not bounded, but will always be a square (3x3, 5x5, 6x6, 9x9, 25x25, etc)
6. Each row of input is a row on the board.
7. Each cell is delimited by spaces
8. B = a black stone, W = a white stone, _ = an empty space

**Sample input:**

```
B _ _ _
B B B B
W W W W
W _ _ W
```

**Sample output (black is always listed first):**

```
Black: 3
White: 2
```

Automate the scoring, and you can spend more time playing!
