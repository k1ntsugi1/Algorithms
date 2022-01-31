/* eslint-env jest */
import BFS from '../src/Breadth-First-Search';
import { mkTree, mkNode } from '../src/tree.js';

let tree;
let tree2;
let tree3;
beforeEach(() => {
  tree = mkTree('/');
  mkNode(tree, '/', 'firstfile', 'file');
  mkNode(tree, '/', 'secondfile', 'file');
  mkNode(tree, '/', 'BOOM', 'file');
  mkNode(tree, '/', 'firstBox', 'directory');
  mkNode(tree, '/', 'secondBox', 'directory');
  mkNode(tree, 'firstBox', 'thirdBox', 'directory');
  mkNode(tree, 'firstBox', 'BOOM', 'file');
  mkNode(tree, 'secondBox', 'fourthBox', 'directory');
  mkNode(tree, 'fourthBox', 'BOOM', 'file');

  tree2 = mkTree('/');
  mkNode(tree2, '/', 'firstfile', 'file');
  mkNode(tree2, '/', 'secondfile', 'file');
  mkNode(tree2, '/', 'firstBox', 'directory');
  mkNode(tree2, '/', 'secondBox', 'directory');
  mkNode(tree2, 'firstBox', 'thirdBox', 'directory');
  mkNode(tree2, 'firstBox', 'BOOM', 'file');
  mkNode(tree2, 'secondBox', 'fourthBox', 'directory');
  mkNode(tree2, 'fourthBox', 'BOOM', 'file');

  tree3 = mkTree('/');
  mkNode(tree3, '/', 'firstfile', 'file');
  mkNode(tree3, '/', 'secondfile', 'file');
  mkNode(tree3, '/', 'firstBox', 'directory');
  mkNode(tree3, '/', 'secondBox', 'directory');
  mkNode(tree3, 'firstBox', 'thirdBox', 'directory');
  mkNode(tree3, 'firstBox', 'BAAM', 'file');
  mkNode(tree3, 'secondBox', 'fourthBox', 'directory');
  mkNode(tree3, 'fourthBox', 'BOOM', 'file');
});
describe('findWay', () => {
  test('usualWork', () => {
    expect(BFS(tree, 'BOOM')).toBe('/ -> BOOM');
    expect(BFS(tree2, 'BOOM')).toBe('/ -> firstBox -> BOOM');
    expect(BFS(tree3, 'BOOM')).toBe('/ -> secondBox -> fourthBox -> BOOM');
  });

  test('unusualWork', () => {
    expect(BFS(tree, 'BAAM')).toBeNull();
  });
});
