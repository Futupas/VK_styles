// ==UserScript==
// @name VK_styles
// @description Makes Vk for me, with my styles
// @author Olexandr Panov
// @license MIT
// @version 2.0
// @include https://vk.com/*
// ==/UserScript==

var style_1_href = 'http://vk-sites.bitballoon.com/styles_0.css';
var style_1 = document.createElement('link');
  style_1.setAttribute('rel', 'stylesheet');
  style_1.setAttribute('href', style_1_href);

  document.querySelector('head').appendChild(style_1);