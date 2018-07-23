var hotItemList = document.querySelectorAll('.card-container.ais-card-hotaliway .card-content .card-tab-item:first-child li');
var deletedCount = 0;
Array.from(hotItemList).map(function(item) {
  if (shouldBlock(item)) {
    item.style.display = 'none';
    deletedCount++;
  } else if (deletedCount) {
    var itemNoElm = item.querySelector('span');

    if (itemNoElm && itemNoElm.innerText) {
      itemNoElm.innerText = parseInt(itemNoElm.innerText) - deletedCount;
    }
  }
});

function shouldBlock(elm) {
  var filterConf = [
    '相亲',
    '征婚',
    '颜值',
    '萌妹子',
    '小姐姐',
    '小仙女',
    '对象',
    '征女友',
    '征男友',
  ];
  var flag = false;
  var title = (elm && elm.innerText) || '';

  for (var i = filterConf.length; i--;) {
    var item = filterConf[i];
    if (title.indexOf(item) > -1) {
      flag = true;
      break;
    }
  }

  return flag;
}