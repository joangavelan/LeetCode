// const head = [1, 2, 3, 4, 5];
// const head = [1, 2, 3, 4, 5, 6];

//leetcode solution slow and fast pointers
var middleNode = function(head) {
  slow = fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
};

// const middleNode = (head) => head.slice(Math.floor(head.length / 2));

// const middleNode = (head) => {
//   const arr = Array.from(head);
//   const mid = Math.floor(arr.length / 2);
//   return arr.slice(mid);
// };

// middleNode(head) // [3, 4, 5];