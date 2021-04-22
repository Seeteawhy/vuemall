//防抖 短时间触发多次，只执行一次
export function debounce(func, delay = 300) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.call(this, ...args)
    }, delay)
  }
}

export function timeFormat(type,date){
	var date = new Date(date);
	var o = {   
		"m+" : date.getMonth()+1,	//月份   
		"d+" : date.getDate(),		//日   
		"h+" : date.getHours(),		//小时   
		"i+" : date.getMinutes(),	//分   
		"s+" : date.getSeconds(),	//秒   
	};   
	if(/(y+)/.test(type)){
		type=type.replace(RegExp.$1,(date.getFullYear()+"").substr(4-RegExp.$1.length)); 
	};    
	for(var k in o){
		if(new RegExp("("+ k +")").test(type)){
			type=type.replace(RegExp.$1,(RegExp.$1.length==1)?(o[k]):(("00"+ o[k]).substr((""+o[k]).length))); 
		}; 
	}
	return type; 
}
