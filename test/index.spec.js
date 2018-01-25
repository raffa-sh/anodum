import {
  buildTreePathOfNode,
  copyElementAttributes,
  domParser,
  getElementHeight,
  getNodeByTreePath,
  hasNonEmptyPseudoElements,
  hasNonEmptyTextNodes,
  isAttributeNode,
  isChildOfElement,
  isChildOfTag,
  isCommentNode,
  isConditionalCommentNode,
  isDocumentFragmentNode,
  isDocumentNode,
  isDocumentTypeNode,
  isElementNode,
  isEmbedElement,
  isHeadingElement,
  isInteractiveElement,
  isNestingAllowed,
  isNode,
  isNonEmptyTextNode,
  isOneOfTags,
  isPhrasingElement,
  isProcessingInstructionNode,
  isSectioningElement,
  isSelfClosingElement,
  isTag,
  isTextNode,
  nodeTypes,
  normalizeHTML,
  parseDocumentFromString,
  parseElementFromString,
  removeSetOfNodes,
  serializeDocument,
  serializeDocumentType,
  traverseElement,
  traverseNode,
  xmlSerializer
} from '../src/index';

import "./is-attribute-node.spec.js";
import "./is-comment-node.spec.js";
import "./is-conditional-comment-node.spec.js";
import "./is-document-fragment-node.spec.js";
import "./is-document-node.spec.js";
import "./is-document-type-node.spec.js";
import "./is-element-node.spec.js";
import "./is-embed-element.spec.js";
import "./is-heading-element.spec.js";
import "./is-node.spec.js";
import "./is-non-empty-text-node.spec.js";
import "./is-one-of-tags.spec.js";
import "./is-phrasing-element.spec.js";
import "./is-sectioning-element.spec.js";
import "./is-self-closing-element.spec.js";
import "./is-tag.spec.js";
import "./is-text-node.spec.js";

describe('Anodum', ()=>{
  it('buildTreePathOfNode() is defined', ()=>{
    expect(buildTreePathOfNode).toBeDefined();
  });

  it('copyElementAttributes() is defined', ()=>{
    expect(copyElementAttributes).toBeDefined();
  });

  it('domParser is defined', ()=>{
    expect(typeof domParser).toBe("object");
  });

  it('getElementHeight() is defined', ()=>{
    expect(getElementHeight).toBeDefined();
  });

  it('getNodeByTreePath() is defined', ()=>{
    expect(getNodeByTreePath).toBeDefined();
  });

  it('hasNonEmptyPseudoElements() is defined', ()=>{
    expect(hasNonEmptyPseudoElements).toBeDefined();
  });

  it('hasNonEmptyTextNodes() is defined', ()=>{
    expect(hasNonEmptyTextNodes).toBeDefined();
  });

  it('isAttributeNode() is defined', ()=>{
    expect(isAttributeNode).toBeDefined();
  });

  it('isChildOfElement() is defined', ()=>{
    expect(isChildOfElement).toBeDefined();
  });

  it('isChildOfTag() is defined', ()=>{
    expect(isChildOfTag).toBeDefined();
  });

  it('isCommentNode() is defined', ()=>{
    expect(isCommentNode).toBeDefined();
  });

  it('isConditionalCommentNode() is defined', ()=>{
    expect(isConditionalCommentNode).toBeDefined();
  });

  it('isDocumentFragmentNode() is defined', ()=>{
    expect(isDocumentFragmentNode).toBeDefined();
  });

  it('isDocumentNode() is defined', ()=>{
    expect(isDocumentNode).toBeDefined();
  });

  it('isDocumentTypeNode() is defined', ()=>{
    expect(isDocumentTypeNode).toBeDefined();
  });

  it('isElementNode() is defined', ()=>{
    expect(isElementNode).toBeDefined();
  });

  it('isEmbedElement() is defined', ()=>{
    expect(isEmbedElement).toBeDefined();
  });

  it('isHeadingElement() is defined', ()=>{
    expect(isHeadingElement).toBeDefined();
  });

  it('isInteractiveElement() is defined', ()=>{
    expect(isInteractiveElement).toBeDefined();
  });

  it('isNestingAllowed() is defined', ()=>{
    expect(isNestingAllowed).toBeDefined();
  });

  it('isNode() is defined', ()=>{
    expect(isNode).toBeDefined();
  });

  it('isNonEmptyTextNode() is defined', ()=>{
    expect(isNonEmptyTextNode).toBeDefined();
  });

  it('isOneOfTags() is defined', ()=>{
    expect(isOneOfTags).toBeDefined();
  });

  it('isPhrasingElement() is defined', ()=>{
    expect(isPhrasingElement).toBeDefined();
  });

  it('isProcessingInstructionNode() is defined', ()=>{
    expect(isProcessingInstructionNode).toBeDefined();
  });

  it('isSectioningElement() is defined', ()=>{
    expect(isSectioningElement).toBeDefined();
  });

  it('isSelfClosingElement() is defined', ()=>{
    expect(isSelfClosingElement).toBeDefined();
  });

  it('isTag() is defined', ()=>{
    expect(isTag).toBeDefined();
  });

  it('isTextNode() is defined', ()=>{
    expect(isTextNode).toBeDefined();
  });

  it('nodeTypes is defined', ()=>{
    expect(typeof nodeTypes).toBe("object");
  });

  it('normalizeHTML() is defined', ()=>{
    expect(normalizeHTML).toBeDefined();
  });

  it('parseDocumentFromString() is defined', ()=>{
    expect(parseDocumentFromString).toBeDefined();
  });

  it('parseElementFromString() is defined', ()=>{
    expect(parseElementFromString).toBeDefined();
  });

  it('removeSetOfNodes() is defined', ()=>{
    expect(removeSetOfNodes).toBeDefined();
  });

  it('serializeDocument() is defined', ()=>{
    expect(serializeDocument).toBeDefined();
  });

  it('serializeDocumentType() is defined', ()=>{
    expect(serializeDocumentType).toBeDefined();
  });

  it('traverseElement() is defined', ()=>{
    expect(traverseElement).toBeDefined();
  });

  it('traverseNode() is defined', ()=>{
    expect(traverseNode).toBeDefined();
  });

  it('xmlSerializer is defined', ()=>{
    expect(typeof xmlSerializer).toBe("object");
  });
});
