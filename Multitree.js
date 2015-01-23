/* An example of a low depth multi-tree structure
Head -> Array (of nodes) [ node[0],                                      node[1],                                         node[2],..... ]
                        {.value=1, .next, depth=0}                   {.value=8, .next, depth=0}
                                    /                                             /
                            [ node[0] ]                                       [ node[0],                          node[1] ]
                            {.value=3, .next.count=0 (empty), depth=1}    {.value=9, .next, depth=1}             {.value=16, .next, depth=1}
                                                                                        /                                      /  
                                                                                    [ node[0],node[1],..]                [ node[0],node[1],..]
The initial state is Head -> Array of nodes with nolength
Adding the first element the depth is set to 0, the value is set and an element is added to the head -> array
Adding a second element (or more) is weird!, the structure to add to the tree has to have the elements in order eg [1,2,3,....]
An add scans the head to see if the value is there, if it is, it travels down the to the next node and checks if the next element is there.
Furthermore, if the element isn't there and there are still more elements then a new tree from the rest of the values is formed 
and added to the correct node on the tree.
*/

// the multitree class (ish)
var multitree = function () {

    // this is the basic node for each vertex
    this.node = function (value, depth) {
        this.value = value;
        this.depth = depth;
        this.next = [];
    }

    // a blank array of nodes all at depth 0
    this.head = [];

    // this is the current node that points to a parking spot on the tree
    this.currentNode; 

    // an example of adding a node to the head this.head[0] = new node(1, 0);
    // the values are a list of values to add to the tree, this is shorterned one by one as we travel down the tree
    // the newHead is the head of the current node to be studied
    this.add = function (values) {
        var headCount, // for looping through all the heads values
            nextNode = this.head; // the next node as we move down the tree

        for (var valuesCount = 0; valuesCount < values.length; valuesCount++) { // the main loop for looping through all the values
            headCount = 0;            

            // check the values has values, return if not
            if (!values || values.length == 0) {
                console.log("multitree.add: an attempt was made at adding values=undefined or values.length=0");
                return;
            }
            console.log("multitree.add: start, with headCount=" + headCount + " valuesCount=" + valuesCount + " the value is " + values[valuesCount] + " the nextNode.length="+nextNode.length);
            // check if the first value value[0] is in the head node if not add it
            // loop through the head array if the value is found, break from the loop and the count will not be equal to head.length
            while (headCount < nextNode.length) {
                // if a value is found in the head then break (and don't add the value)
                console.log("multitree.add: headCount=" + headCount + " valuesCount=" + valuesCount);
                if (nextNode[headCount].value == values[valuesCount]) {
                    console.log("multitree.add: a value=" + values[valuesCount] + " was found in the head at index=" + headCount + " at depth=" + valuesCount + " this won't be added.");
                    break;
                }
                headCount++;
            }
            // if the count is equal to the length of the head nodes then at the end of the head node array so add another.
            // *[1]BUG* with values shorter than the tree depth, it was adding the last node of the values eventhough the value above had a match
            // at the end of nextNode's (current!) array of values. The bug was worse than this after investigation, was not moving down the tree on multi-vertex entries.
            if (headCount == nextNode.length) {
                nextNode[nextNode.length] = new this.node(values[valuesCount], valuesCount);
                console.log("multitree.add: adding value=" + values[valuesCount] + " to the head, the head now contains " + nextNode[nextNode.length - 1].value + " and has length " + nextNode.length + " at depth=" + nextNode[nextNode.length - 1].depth);

            }// this is [1]BUG needing to move down the node regardless
            // else {
            // !this is incorrect---------------------------------------------------------------- 
                // if the count is less than the head.length then it was found
                // this means that head[count] is pointing to the node that were travelling down 
            // ---------------------------------------------------------------------------------
            // the nextnode is either a new node or a node that exists as we travel down the tree
            this.currentNode = nextNode;
            nextNode = nextNode[headCount].next;
            console.log("multitree.add: moving down the tree, with headCount=" + headCount + " valuesCount=" + valuesCount + " the nextNode.length=" + nextNode.length);
            //}
        }        
        console.log("=====Exiting add=====");
    }

    // a recursive tree traverse that outputs the details of the tree 
    this.traverse = function (node) {
        if (!node) return; // if no node then got to the end
        else {
            for (var i = 0; i < node.length; i++) {
                // print the current nodes values
                console.log("multitree.traverse: node value = " + node[i].value + ", at depth=" + node[i].depth);
                this.traverse(node[i].next);
            }            
        }
    }
}


