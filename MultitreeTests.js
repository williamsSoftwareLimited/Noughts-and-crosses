var _mt = new multitree(),
    _values = [];

// ===========Tests=============
// when the tests are no longer understandable delete

// the check _values being empty
_mt.add(_values);
// the test _values being of zero length
_values = []; _mt.add(_values);

// add one head item
_values[0] = 1; _mt.add(_values);

// add second head item
_values[0] = 2; _mt.add(_values);


// try add third head item which is a duplicate
_values[0] = 2; _mt.add(_values);

// the values = 2, 3 which should add a node to the node that has value 3
_values[1] = 3; _mt.add(_values);

// the values = 2, 3, 4 which should add a node to the node that has value 4
_values[2] = 4; _mt.add(_values);

_values = [1, 2, 5]; 
_mt.add(_values);

_values = [1, 4, 8 , 9, 11];
_mt.add(_values);

_values = [1, 4, 8, 11, 9];
_mt.add(_values);


_mt.traverse(_mt.head);

_values = [1, 4, 8];
_mt.add(_values);
console.log("This should only show the node below the current node ");
_mt.traverse(_mt.currentNode);
