import {
  getChilds, getName,
  getType,
} from './tree.js';

const BFS = (tree, aim) => {
  const roads = [];
  const connection = ' -> ';
  const queue = getChilds(tree);

  while (queue.length !== 0) {
    const node = queue.shift();
    const [currentRoad] = roads.filter((road) => road.endsWith(getName(node)));
    const fullRoad = currentRoad == null ? getName(node) : currentRoad;

    if (!(fullRoad.endsWith(aim))) {
      if (getType(node) === 'directory') {
        const futureNodesForCheck = getChilds(node);
        const futureRoadsForCheck = futureNodesForCheck.map((underNode) => fullRoad
                                                    + connection + getName(underNode));
        roads.push(...futureRoadsForCheck);
        queue.push(...futureNodesForCheck);
      }
    } else {
      return getName(tree) + connection + fullRoad;
    }
  }
  return null;
};

export default BFS;
