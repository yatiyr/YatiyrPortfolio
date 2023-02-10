import { theme } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { css } from '@emotion/react';

const prismBaseTheme = css`
  .article > h2 {
    font-family: 'Noto Serif', serif;
    padding: ${theme.space[8]} 0 ${theme.space[2]};
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.bold};
  }
  .article p,
  .article ul,
  .article ol {
    font-family: 'Inter', sans-serif;
    margin: ${theme.space[4]} 0 ${theme.space[8]};
    line-height: ${theme.lineHeights.tall};
  }
  .article p {
    display: inline;
  }
  .article a:hover {
    text-decoration: underline;
  }
  .article a.chakra-link {
    text-decoration: none;
  }
  .article img {
    border-radius: ${theme.radii.md};
  }
  .article #table-of-contents + ul,
  .article ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
  .article #table-of-contents + ul > li,
  .article ol > li {
    margin-bottom: ${theme.space[2]};
  }
  .article .icon.icon-link::before {
    content: '#';
    margin-right: ${theme.space[2]};
    display: inline-flex;
  }
  .article blockquote > p {
    padding: ${theme.space[4]};
    margin: 0;
    border: 1px solid;
    border-radius: ${theme.radii.md};
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: #d6e7ff;
    background: #030314;
    text-shadow: none;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    line-height: 1.5;
    letter-spacing: .2px;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    text-align: left;
  
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
  
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection,
  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    color: inherit;
    background: #1d3b54;
    text-shadow: none;
  }
  
  pre[class*='language-'] {
    border: 1px solid #2a4555;
    border-radius: 5px;
    padding: 1.5em 1em;
    margin: 1em 0;
    overflow: auto;
  }
  
  :not(pre) > code[class*='language-'] {
    color: #f0f6f6;
    background: #2a4555;
    padding: 0.2em 0.3em;
    border-radius: 0.2em;
    box-decoration-break: clone;
  }
  
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #446e69;
  }
  
  .token.punctuation {
    color: #d0ff00;
  }
  
  .token.property,
  .token.tag,
  .token.boolean,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #d6e7ff;
  }
  .token.number {
    color: #00ff1e
  }
  
  .token.selector,
  .token.attr-name,
  .token.builtin,
  .token.inserted {
    color: #e60067;
  }
  
  .token.string,
  .token.char {
    color: #49c6ec;
  }
  
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #ec8e01;
    background: transparent;
  }
  .token.operator {
    color: #ff00ff;
  }
  
  .token.atrule,
  .token.attr-value {
    color: #0fe468;
  }
  .token.keyword {
    color: #bc92ff;
  }
  
  .token.class-name {
    color: #ff3c91;
  }
  .token.function {
    color : #9efff5;
  }
  
  .token.regex,
  .token.important,
  .token.variable {
    color: #d6e7ff;
  }
`;

const prismDarkTheme = css`
  ${prismBaseTheme};
`;

const PrismTheme = () => (
    <>
      <Global styles={prismDarkTheme}/>
    </>
)

export default PrismTheme;