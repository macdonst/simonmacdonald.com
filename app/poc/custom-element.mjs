import BaseElement from './base-element.mjs'
import CustomElementMixin from './custom-mixin.mjs'
import TemplateMixin from './template-mixin.mjs'

export default class CustomElement extends CustomElementMixin(TemplateMixin(BaseElement)) {}
