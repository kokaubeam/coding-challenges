# Fiat Currency

In the Bitcoin economy, the blockchain keeps a ledger of every transaction that has ever been made, since the beginning of time. As you can imagine, this ledger has gotten really big, over 41 GB as of September 2015. Miners allow for new transactions to be recored, by adding the new transaction onto the end of the current blockchain, and repeatedly calculating the SHA256 hash along with different nonce values until they find a hash that has enough leading 0 bytes to meet the current rules. More about the hashing algorithm can be read at https://en.bitcoin.it/wiki/Block_hashing_algorithm

But we don't care about any of that, we're just here to make tons of money. The first line of input is our starting cash. Each subsequent line of input contains the current bitcoin price, and an action -- "buy", "sell", or "hold" (do nothing). Each buy or sell is of one bitcoin. Process all the input, and then output how much cash we have at the end.

For instance, "97 buy" means we spend 97 cash to purchase one bitcoin. "103 sell" means we then sell one coin, adding 103 to our total cash. All prices are integers.

You can assume that we won't buy when we don't have enough cash, and we won't sell more coins than we have.

## Example

STDIN:

    225
    105 buy
    102 hold
    101 hold
    106 sell
    102 buy
    107 sell

STDOUT:

    231