function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  var allRanked = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i<allRanked.length;i++) {
    allRanked[i].innerHTML = (parseInt(allRanked[i].innerHTML)+n);
  }
}

function deepestChild(selector) {
  console.log('RUN');
  var all;
  if (selector){
    all = document.querySelector(selector);
  } else {
    selector = '#grand-node';
    all = document.querySelector(selector);
  }
  var canWeGoDeeper = false;
  for (let i=0;i<1;i++) {
    console.log('LOOP');
    if (all.children[0]) {
      canWeGoDeeper = true;
      console.log('GOING DEEPER');
      selector = deepestChild(selector+" div");
      canWeGoDeeper = false;
    } else {
      selector = document.querySelector(selector);
      console.log('DONE');
    }
  }
  if (canWeGoDeeper === false){
    console.log(selector);
    return selector;
  }
}



