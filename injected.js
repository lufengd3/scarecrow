window.tmpCanvasText = '';
window.tmpCanvasTextWithoutLineBreaks = '';
window.originalFillText = CanvasRenderingContext2D.prototype.fillText
CanvasRenderingContext2D.prototype.fillText = function() {
  // console.log(arguments[0]);
  window.tmpCanvasText += arguments[0] + '\n';
  window.tmpCanvasTextWithoutLineBreaks += arguments[0];
  window.originalFillText.apply(this, arguments)
}

setTimeout(() => {
  console.log(window.tmpCanvasText);
  console.log('');
  console.log('%c 控制台输入 console.log(tmpCanvasText) 查看最新文字内容', 'background: #222; color: #bada55');
  console.log('%c 控制台输入 console.log(tmpCanvasTextWithoutLineBreaks) 无换行符版本', 'background: #222; color: #bada55');
}, 3000)