const BST = require('./bst')

function createTree() {
  const bst = new BST()
  bst.insert(25)
  bst.insert(15)
  bst.insert(50)
  bst.insert(10)
  bst.insert(24)
  bst.insert(35)
  bst.insert(70)
  bst.insert(4)
  bst.insert(12)
  bst.insert(18)
  bst.insert(31)
  bst.insert(44)
  bst.insert(66)
  bst.insert(90)
  bst.insert(22)
  return bst
}

function preOrder(bst, values = []) {
  values.push(bst.value)

  if (bst.left) {
    values = preOrder(bst.left, values)
  }

  if (bst.right) {
    values = preOrder(bst.right, values)
  }

  return values
}

function inOrder(bst) {
  return bst.dfs()
}

function postOrder(bst, values = []) {
  if (bst.left) {
    values = postOrder(bst.left, values)
  }

  if (bst.right) {
    values = postOrder(bst.right, values)
  }

  values.push(bst.value)

  return values
}

function main() {
  const bst = createTree()

  console.log(preOrder(bst))
  console.log(inOrder(bst))
  console.log(postOrder(bst))
}

if (require.main === module) main()
