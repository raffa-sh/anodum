import isNonEmptyTextNode from '../src/is-non-empty-text-node';

describe('isNonEmptyTextNode', () => {
  it('"text" is a non empty text node ', () => {
    const node = document.createTextNode('text');
    const result = isNonEmptyTextNode(node);
    expect(result).toBe(true);
  });

  it('"" is not a non empty text node', () => {
    const node = document.createTextNode('');
    const result = isNonEmptyTextNode(node);
    expect(result).toBe(false);
  });

  it('"object" is not a non empty text node', () => {
    const node = document.createElement('div');
    const result = isNonEmptyTextNode(node);
    expect(result).toBe(false);
  });
});
