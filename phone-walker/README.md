# Phone Walker

Your friend JT lives in Salt Lake City, where the city blocks are laid out in a nice even grid. He likes to walk places, and he likes to play NetHack on his phone while he's walking. It's easiest to focus on a game and not pay attention to where you going if you can just walk straight, so JT prefers to walk in straight lines to get where he is going, but Salt Lake is always closing streets for construction, blocking his nice straight paths.

You'll receive JT's starting location on the first line, destination on the second line, and each subsequent line will represent a closed intersection. Your job is to find the shortest and straightest route for JT to take. Output the path as one point per line. There will always be a unique answer.

Oh yeah, Salt Lake's grid system happens to max out at 4,294,967,295 blocks ;)

**Sample input:**

```
0,0
2,4
0,1
2,0
```

**Sample output:**

```
0,0
1,0
1,1
1,2
1,3
1,4
2,4
```
