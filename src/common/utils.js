//防抖 短时间触发多次，只执行一次
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.call(this, ...args)
    }, delay)
  }
}