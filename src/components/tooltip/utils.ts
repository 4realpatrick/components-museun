function checkShouldElementShowTooltip(el: Element): boolean {
  let { clientWidth, scrollWidth } = el;
  /**
   * 如果元素没有溢出，也不显示tooltip
   */
  if (scrollWidth > clientWidth) {
    if (IEVersion()) {
      return el.getBoundingClientRect().width === clientWidth;
    }
    return true;
  }
  return false;
}

export function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isIE =
    userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isIE11 =
    userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;

  return isIE || isEdge || isIE11;
}