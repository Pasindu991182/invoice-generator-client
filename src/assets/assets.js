// src/assets/assets.js

import template1 from './template1.png';
import template2 from './template2.png';
import template3 from './template3.png';
import template4 from './template4.png';
import landing1 from './landing1.jpg';
import landing2 from './landing2.jpg';
import landing3 from './landing3.jpg';
import landing4 from './landing4.jpg';
import logo from './logo.png';

const assets = {
  template1,
  template2,
  template3,
  template4,
  landing1,
  landing2,
  landing3,
  landing4,
  logo,
};

export const templates = [
  { id: "template1", label: "Template 1", image: assets.template1 },
  { id: "template2", label: "Template 2", image: assets.template2 },
  { id: "template3", label: "Template 3", image: assets.template3 },
  { id: "template4", label: "Template 4", image: assets.template4 },
];

export default assets;
