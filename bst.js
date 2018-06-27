class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key
    this.value = value
    this.parent = parent
    this.left = null
    this.right = null
  }

  bfs(values = []) {
    const queue = [this]

    while (queue.length) {
      const node = queue.shift()
      this.values.push(node.value)

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    return values
  }

  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values)
    }

    values.push(this.value)

    if (this.right) {
      values = this.right.dfs(values)
    }

    return values
  }

  insert(key, value) {
    if (!value) value = key

    // tree is empty
    if (!this.key) {
      this.key = key
      this.value = value
    }

    // key is less than this.key
    else if (key < this.key) {
      // this.left does not exist
      if (!this.left) {
        this.left = new BinarySearchTree(key, value, this)
      }
      // this.left exists
      else {
        this.left.insert(key, value) // recurse
      }
    }

    // key is greater than this.key
    else {
      // this.right does not exist
      if (!this.right) {
        this.right = new BinarySearchTree(key, value, this)
      }
      // this.right exists
      else {
        this.right.insert(key, value) // recurse
      }
    }
  }

  find(key) {
    // key matchs
    if (this.key === key) return this.value
    // key is less than this.key and this.left exists
    else if (key < this.key && this.left) this.left.find(key)
    // key is greater than this.key and this.right exists
    else if (this.key < key && this.right) this.right.find(key)
    // key error
    else throw new Error('Key error')
  }

  remove(key) {
    // node matches key
    if (this.key === key) {
      // has two children
      if (this.left && this.right) {
        const rightMin = this.right._findMin()
        this.key = rightMin.key
        this.value = rightMin.value
        rightMin.remove(rightMin.key)
      }

      // has only left child
      else if (this.left) {
        this._replaceWith(this.left)
      }

      // has only right child
      else if (this.right) {
        this._replaceWith(this.right)
      }

      // has no children
      else {
        this._replaceWith(null)
      }
    }

    // key is less than this.key and this.left is not null
    else if (this.left && key < this.key) {
      this.left.remove(key)
    }

    // key is greater than this.key and this.right exists
    else if (this.right && this.key < key) {
      this.right.remove(key)
    }

    // tree is empty
    else throw new Error('Key error')
  }

  _replaceWith(node) {
    // this.parent exists
    if (this.parent) {
      // this is parents left child
      if (this === this.parent.left) {
        this.parent.left = node
      }
      // this is parents right child
      else if (this === this.parent.right) {
        this.parent.right = node
      }

      // node exists
      if (node) {
        node.parent = this.parent
      }
    }
    // this.parent does not exist
    else {
      // node exists
      if (node) {
        this.key = node.key
        this.value = node.value
        this.left = node.left
        this.right = node.right
      }
      // node does not exist
      else {
        this.key = this.value = this.left = this.right = null
      }
    }
  }

  _findMin() {
    // this.left does not exist
    if (!this.left) {
      return this
    }

    // this.left exists
    return this.left._findMin() // recurse
  }
}

module.exports = BinarySearchTree
