/**
 * @Author: 魏巍
 * @Date:   2017-10-20T13:19:38+08:00
 * @Email:  524314430@qq.com
 * @Last modified by:   魏巍
 * @Last modified time: 2017-11-04T10:43:23+08:00
 */

module.exports = {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    //host:'192.168.0.132',
    //port: '8083',
    proxy:{
        '/api': {
            target: 'http://api.jswei.cn/',  // 接口域名
            changeOrigin: true,  //是否跨域
            secure:false
        }
    }
};
