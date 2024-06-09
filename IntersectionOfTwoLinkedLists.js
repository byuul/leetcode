/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let p = headA;
    let q = headB;

    while (p !== q) {
        p = p === null ? headA : p.next;
        q = q === null ? headB : q.next;
    }

    return p;
};
