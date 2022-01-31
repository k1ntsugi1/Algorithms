/* eslint-env jest */
import { mkTree, mkNode } from '../src/tree.js';

let tree;
let treeClone;
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

  treeClone = {
    name: '/',
    type: 'directory',
    childs: [
      { name: 'firstfile', type: 'file' },
      { name: 'secondfile', type: 'file' },
      { name: 'BOOM', type: 'file' },
      {
        name: 'firstBox',
        type: 'directory',
        childs: [
          { name: 'thirdBox', type: 'directory', childs: [] },
          { name: 'BOOM', type: 'file' },
        ],
      },
      {
        name: 'secondBox',
        type: 'directory',
        childs: [
          {
            name: 'fourthBox',
            type: 'directory',
            childs: [
              { name: 'BOOM', type: 'file' },
            ],
          },
        ],
      },
    ],
  };
});
describe('checkTree', () => {
  test('usualWork', () => {
    expect(tree).toEqual(treeClone);
  });
  test('unusalWork', () => {
    mkNode(tree, 'someDir', 'newDir', 'directory');
    expect(tree).toEqual(treeClone);
  });
});
