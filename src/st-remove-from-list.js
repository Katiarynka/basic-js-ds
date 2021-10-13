const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {

    function removeElement(list, position) {

        if (position < 0 || position >= list.length) {
            return undefined;
        }
        let current = list;
        if (position === 0) {
            list = list.next;
        } else {

            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }
        return list;
    }

    let current = l;
    let index = 0;

    while (current) {
        if (current.value === k) {
            l = removeElement(l, index)
        } else { index++ }

        current = current.next;
    }

    return l;
}