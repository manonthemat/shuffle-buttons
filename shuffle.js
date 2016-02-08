'use strict';

function shuffle(array) { // straight from npm package "knuth"
  let m = array.length;
  while (m) {
    let i = Math.floor(Math.random() * m--);
    let t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function runme() {
  let elementsWithTag = document.body.getElementsByTagName('button');
  let elements = [];
  for (let i = 0; i < elementsWithTag.length; ++i) {
    elements.push(elementsWithTag[i].innerHTML);
  };
  shuffle(elements);
  for (let i = 0; i < elementsWithTag.length; ++i) {
    elementsWithTag[i].innerHTML = elements[i];
  };
}

runme();
