// 简单版本
export default function easyThrottle(fn: () => void, delay: number) {
  let valid = true
  return function () {
    if (!valid) {
      //休息时间 暂不接客
      return false
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false
    setTimeout(() => {
      fn()
      valid = true;
    }, delay)
  }
}