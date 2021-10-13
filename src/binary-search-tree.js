const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

Node = class {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = class BinarySearchTree {

    constructor() {
        this.treeRoot = null;
    }

    root() {
        return this.treeRoot;
    }

    add(data) {

        this.treeRoot = addNode(this.treeRoot, data);

        function addNode(node, data) {
            if (!node) { return new Node(data) }
            if (node.data === data) { return node }
            if (data < node.data) {
                node.left = addNode(node.left, data)
            } else {
                node.right = addNode(node.right, data)
            }
            return node;
        }

    }

    has(data) {

        return hasData(this.treeRoot, data);

        function hasData(node, data) {
            if (!node) { return false }
            if (node.data === data) { return true }
            return data < node.data ? hasData(node.left, data) : hasData(node.right, data);
        }
    }

    find(data) {

        return findData(this.treeRoot, data);

        function findData(node, data) {
            if (!node) { return null }
            if (node.data === data) {
                return node
            }
            return data < node.data ? findData(node.left, data) : findData(node.right, data);
        }

    }

    remove(data) {

        this.treeRoot = removeNode(this.treeRoot, data);

        function removeNode(node, data) {
            if (!node) { return null }
            if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else if (node.data > data) {
                node.left = removeNode(node.left, data)
                return node;
            } else {

                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                let minFromBigger = node.right;
                while (minFromBigger.left) {
                    minFromBigger = minFromBigger.left;
                }

                node.data = minFromBigger.data;
                node.right = removeNode(node.right, node.data);
                return node;
            }

        }

    }

    min() {

        if (!this.treeRoot) { return null }

        let current = this.treeRoot;
        while (current.left) {
            current = current.left;
        }
        return current.data;

    }

    max() {

        if (!this.treeRoot) { return null }

        let current = this.treeRoot;
        while (current.right) {
            current = current.right;
        }
        return current.data;

    }

}