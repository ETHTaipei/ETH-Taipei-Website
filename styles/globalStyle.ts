/* eslint-disable max-len */
import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const ResetStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  text-size-adjust: 100%;
  box-sizing: border-box;
}
body {
    line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}
`;

const GlobalStyle = createGlobalStyle`
body {
   /* overscroll-behavior-y: none; */
  font-family:Lato, Goldman-Sans, Helvetica Neue, Helvetica, Roboto,
    PingFang TC, 微軟雅黑, Microsoft Yahei, sans-serif;
  box-sizing: border-box;
  background-color: ${Colors.seaSalt} ;
}
`;

export { GlobalStyle, ResetStyle };
