// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

const mergeTwoLists = (list1, list2) => {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }

    currentNode = currentNode.next;
  }

  currentNode.next = list1 || list2;

  return tempNode.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1,1,2,3,4,4]
