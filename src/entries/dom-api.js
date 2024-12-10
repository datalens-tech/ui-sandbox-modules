import {document as lightJsDocument} from '@litejs/dom';
import {CSSStyleDeclaration} from '@litejs/dom/css';

CSSStyleDeclaration.prototype.setProperty = function(key, value) {
	this[key] = value;
};

export const document = lightJsDocument;