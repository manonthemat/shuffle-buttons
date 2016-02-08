document.addEventListener('DOMContentLoaded', function() {
  console.log("everyday I'm shuff-e-ling");
  chrome.tabs.executeScript(null, {file: "shuffle.js"});
  console.log("shuffled enough");
});
