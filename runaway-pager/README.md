# Runaway Pager

You and your friends have traveled back in time to the 1980s and the only way you can communicate with your friends is via two-way pager. You have a terrible wireless plan, and you get charged by the character, so you and your friends try to find an easy way to compress the messages you're sending to each other. Your know-it-all friend who's into these sorts of things suggests you all use a simplified [run-length encoding](https://en.wikipedia.org/wiki/Run-length_encoding) to try to shorten the messages that get sent.

She suggests using the following scheme:

- Only the letters A-Z are used. There are no spaces.
- If a letter appears just once, encode the letter as-is, so `CAT` becomes `CAT`.
- If a letter is repeated, encode the letter as the letter followed by the number of times it repeats, so `CAAAATTT` becomes `CA4T3`.

Your program must accept lines of text and output for each the same line of text encoded according to the scheme above.

## Example

**STDIN:**

```
AABZZZZQQJ
SHAZBOT
BQQRRRRRRZ
BBBQTTTTTTF
```

**STDOUT:**

```
A2BZ4Q2J
SHAZBOT
BQ2R6Z
B3QT6F
```
