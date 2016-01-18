# Water Retentive

This is a simplified version of water retention problem on mathematical surfaces (e.g. water retention on the surface of a magic square). Given an array of integers which gives the contour of the surface, you have to find out the amount of water that can be held by the surface.

The sample input consists of N integers which represent the given surface configuration (elements of the array). The output should be a single integer denoting the number of units of water that can be held by the given surface configuration.

## Example

**STDIN:**

```
2 0 0 3 0 4
```

This can be visualized as

          |
      |   |
|     |   |
| _ _ | _ |

This configuration can store 7 units of water.

**STDOUT:**

```
7
```

## Example

**STDIN:**

```
0 4 4 2 3
```

This represents the following shape:

  | |  
  | |   |
  | | | |
_ | | | |

**STDOUT:**

```
1
```
