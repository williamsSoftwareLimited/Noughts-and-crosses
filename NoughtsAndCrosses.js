/*
Noughts and crosses is like TicTacToe, eg
 | |    O|X|
 | |     |O|
 | |     |X|O   etc...   
 As there effectively 3 symbols (2 I here you shout!) well yes but in computing terms there's a blank(null) or whatever.
 The symbols blank=0, X=1 and O=2. Makes base-3 (clock)mathematics and so:
 | | = 0*3^0 + 0*3^1  + 0*3^2 = 0
 |X| = 0*3^3 + 1*3^4  + 0*3^5 = 81
 | | = 0*3^6 + 0*3^7  + 0*3^8 = 0   the total board being 81
 -------------------------------------------------------------
O| | = 2*3^0 + 0*3^1  + 0*3^2 = 2
 |X| = 0*3^3 + 1*3^4  + 0*3^5 = 81
 | | = 0*3^6 + 0*3^7  + 0*3^8 = 0   the total board being 83
  -------------------------------------------------------------
O| |X= 2*3^0 + 0*3^1  + 1*3^2 = 11 
 |X| = 0*3^3 + 1*3^4  + 0*3^5 = 81
 | | = 0*3^6 + 0*3^7  + 0*3^8 = 0   the total board being 92
   -------------------------------------------------------------
O|O|X= 2*3^0 + 2*3^1  + 1*3^2 = 17 
 |X| = 0*3^3 + 1*3^4  + 0*3^5 = 81
 | | = 0*3^6 + 0*3^7  + 0*3^8 = 0   the total board being 98
    -------------------------------------------------------------
O|O|X= 2*3^0 + 2*3^1  + 1*3^2 = 17 
 |X| = 0*3^3 + 1*3^4  + 0*3^5 = 81  WINNER!
X| | = 1*3^6 + 0*3^7  + 0*3^8 = 729 the total board being 827
    -------------------------------------------------------------

How many winning combinations are there?
X|X|X           X|-|-
-|-|- X 4 = 4 + -|X|- X 2 = 6
-|-|-           -|-|X
So there's only 6 winning combinations (under rotation) for any symbol.

The winning values with no other values (C) are, 
1*3^0 + 1*3^1  + 1*3^2 = 13 + C,  (horizontal top line)
1*3^3 + 1*3^4  + 1*3^5 = 351 + C = 27 * 13 + C, (horizontal middle line)
1*3^6 + 1*3^7  + 1*3^8 = 9477 + C = 27 * 351 + C, (horizontal bottom line)
1*3^0 + 1*3^3  + 1*3^6 = 757 + C, (vertical left line)
1*3^1 + 1*3^4  + 1*3^7 = 2271 + C = 3 * 757 + C, (vertical left line)
1*3^2 + 1*3^5  + 1*3^8 = 6813 + C = 3 * 2271 + C, (vertical left line)
1*3^0 + 1*3^4  + 1*3^8 = 6642 + C,  (diagonal from top left to right line)
1*3^2 + 1*3^4  + 1*3^6 = 819 + C,  (diagonal from top left to right line)

or for Os' multiply by 2, eg
2*3^0 + 2*3^1  + 2*3^2 = 26 + C = 2 * 13 + C,
1*3^3 + 1*3^4  + 1*3^5 = 702 + C = 2 * 351 + C,
1*3^6 + 1*3^7  + 1*3^8 = 18954 + C = 2 * 9477 + C, etc....

 -------------------------------------------------------------

*/
