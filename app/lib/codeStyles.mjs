export default function CodeStyles() {
  return `
  <style scope="global">
    /*!
      Theme: OceanicNext
      Author: https://github.com/voronianski/oceanic-next-color-scheme
      License: ~ MIT (or more permissive) [via base16-schemes-source]
      Maintainer: @highlightjs/core-team
      Version: 2021.09.0
    */

    /*
    base00  #1B2B34  Default Background
    base01  #343D46  Lighter Background (Used for status bars, line number and folding marks)
    base02  #4F5B66  Selection Background
    base03  #65737E  Comments, Invisibles, Line Highlighting
    base04  #A7ADBA  Dark Foreground (Used for status bars)
    base05  #C0C5CE  Default Foreground, Caret, Delimiters, Operators
    base06  #CDD3DE  Light Foreground (Not often used)
    base07  #D8DEE9  Light Background (Not often used)
    base08  #EC5f67  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
    base09  #F99157  Integers, Boolean, Constants, XML Attributes, Markup Link Url
    base0A  #FAC863  Classes, Markup Bold, Search Text Background
    base0B  #99C794  Strings, Inherited Class, Markup Code, Diff Inserted
    base0C  #5FB3B3  Support, Regular Expressions, Escape Characters, Markup Quotes
    base0D  #6699CC  Functions, Methods, Attribute IDs, Headings
    base0E  #C594C5  Keywords, Storage, Selector, Markup Italic, Diff Changed
    base0F  #AB7967  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
    */

    pre code.hljs {
      display: block;
      overflow-x: auto;
      padding: 1em;
    }

    code.hljs {
      padding: 3px 5px;
    }

    .hljs {
      color: #C0C5CE;
      background: #1B2B34;
    }

    .hljs::selection,
    .hljs ::selection {
      background-color: #4F5B66;
      color: #C0C5CE;
    }


    /* purposely do not highlight these things */
    .hljs-formula,
    .hljs-params,
    .hljs-property
    {}

    /* base03 - #65737E -  Comments, Invisibles, Line Highlighting */
    .hljs-comment {
      color: #65737E;
    }

    /* base04 - #A7ADBA -  Dark Foreground (Used for status bars) */
    .hljs-tag {
      color: #A7ADBA;
    }

    /* base05 - #C0C5CE -  Default Foreground, Caret, Delimiters, Operators */
    .hljs-subst,
    .hljs-punctuation,
    .hljs-operator {
      color: #C0C5CE;
    }

    .hljs-operator {
      opacity: 0.7;
    }

    /* base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted */
    .hljs-bullet,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-selector-tag,
    .hljs-name,
    .hljs-deletion {
      color: #EC5f67;
    }

    /* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
    .hljs-symbol,
    .hljs-number,
    .hljs-link,
    .hljs-attr,
    .hljs-variable.constant_,
    .hljs-literal {
      color: #F99157;
    }

    /* base0A - Classes, Markup Bold, Search Text Background */
    .hljs-title,
    .hljs-class .hljs-title,
    .hljs-title.class_
    {
      color: #FAC863;
    }

    .hljs-strong {
      font-weight:bold;
      color: #FAC863;
    }

    /* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
    .hljs-code,
    .hljs-addition,
    .hljs-title.class_.inherited__,
    .hljs-string {
      color: #99C794;
    }

    /* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
    .hljs-built_in,
    .hljs-doctag, /* guessing */
    .hljs-quote,
    .hljs-keyword.hljs-atrule,
    .hljs-regexp {
      color: #5FB3B3;
    }

    /* base0D - Functions, Methods, Attribute IDs, Headings */
    .hljs-function .hljs-title,
    .hljs-attribute,
    .ruby .hljs-property,
    .hljs-title.function_,
    .hljs-section {
      color: #6699CC;
    }

    /* base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed */
    .hljs-type,
    /* .hljs-selector-id, */
    /* .hljs-selector-class, */
    /* .hljs-selector-attr, */
    /* .hljs-selector-pseudo, */
    .hljs-template-tag,
    .diff .hljs-meta,
    .hljs-keyword {
      color: #C594C5;
    }
    .hljs-emphasis {
      color: #C594C5;
      font-style: italic;
    }

    /* base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?> */
    .hljs-meta,
    /*
      prevent top level .keyword and .string scopes
      from leaking into meta by accident
    */
    .hljs-meta .hljs-keyword,
    .hljs-meta .hljs-string
    {
      color: #AB7967;
    }

    .hljs-meta .hljs-keyword,
    /* for v10 compatible themes */
    .hljs-meta-keyword {
      font-weight: bold;
    }
  </style>`
}
