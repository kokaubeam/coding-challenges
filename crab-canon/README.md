# Crab Canon

A crab canon is a musical piece, composed of two melodic lines played together, where the second line is the reverse of the first line. Or in other words, if you stuck the second line to the end of the first line (instead of playing them together) the piece would be a palindrome.

Your job is to take a piece of music and determine whether it is a crab canon or not. Music is represented as an ascii staff (always treble clef), with notes represented by their duration (2). there will be no sharps or flats.

The lines and spaces of a staff are significant, and represent note values:

g:       
f: ------
e:       
d: ------
c:       
b: ----2-
a:    1  
g: --1---
f:  1    
e: 1-----
d:       

Each horizontal character represents 1 beat of music and you will never have notes overlap, so 2- represents those two beats, and you would never see 21.

You'll receive many pairs of two staffs (they won't line wrap) as input. Each staff will be separated by a newline (so staffs 1 & 2 should be considered, then staffs 3 & 4, etc). For each pair, you need to print out "yes" or "no", indicating whether the pair of staffs is a crab canon.

## Example

**STDIN:**

```
1          
-1---------
  1        
---1-------
    1      
-----1-----
      1    
-------1---
        1  
---------1-
          1

          1
---------1-
        1  
-------1---
      1    
-----1-----
    1      
---1-------
  1        
-1---------
1          

     
-----
     
-----
     
-----
    1
---1-
  1  
-1---
1    

     
-----
     
-----
     
-----
    1
---1-
  1  
-1---
1    
```

**STDOUT:**

```
yes
no
```
