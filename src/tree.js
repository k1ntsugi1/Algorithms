// preparing before using Breadth-First-Search-graph

const mkTree = (name) => {
  const tree = {
    name: `${name}`,
    type: 'directory',
    childs: [],
  };
  return tree;
};

const getChilds = (node) => node.childs;
const getName = (node) => node.name;
const getType = (node) => node.type;

const mkDir = (node, name) => {
  node.childs.push({
    name: `${name}`,
    type: 'directory',
    childs: [],
  });
};

const mkFile = (node, name) => {
  node.childs.push({
    name: `${name}`,
    type: 'file',
  });
};
const mkNode = (tree, nameOfBirthplace, pointName, pointType) => {
  const findPoint = (node) => {
    const childs = getChilds(node);
    const onlyDir = childs.filter((point) => getType(point) === 'directory');
    const name = getName(node);
    if (name === nameOfBirthplace) {
      if (pointType === 'file') {
        mkFile(node, pointName);
      } else {
        mkDir(node, pointName);
      }
    } else {
      onlyDir.forEach(findPoint);
    }
  };
  findPoint(tree);
};

export {
  mkTree, mkDir,
  mkFile, mkNode,
  getChilds, getName,
  getType,
};
