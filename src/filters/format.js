/**
 * @Author: 魏巍
 * @Date:   2017-09-21T11:56:55+08:00
 * @Email:  js_weiwei_100@hotmail.com
 * @Filename: format.js
 * @Last modified by:   魏巍
 * @Last modified time: 2017-09-25T14:08:01+08:00
 */


export const normalTime=(time)=>{
	if(time){
		var oDate=new Date();
		oDate.setTime(time);

		var y=oDate.getFullYear();
		var m=oDate.getMonth()+1;
		var d=oDate.getDate();

		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();

		return y+'-'+m+'-'+d+' '+h+':'+m+':'+s;
	}
};
