// const config = {
//     serverHost : 'http://localhost/'
// };

// let _util = {
//     request: function (param) {
//         let _this = this;
//         $.ajax({
//             type: param.method || 'GET',
//             url: param.url || '',
//             dataType: param.type || 'json',
//             data: param.data || '',
//             success: (res) => {
//                 if (0 === res.status) {
//                     typeof param.success === 'function' && param.success(res.data, res.msg);
//                 } else if (2 === res.status) {
//                     // _this.doLogin();
//                 } else if (3 === res.status) {
//                     typeof param.error === 'function' && param.error(res.msg);
//                 }
//             },
//             error: (errMsg) => {
//                 //TO-DO
//             }

//         });
//     },
//     doLogin: function() {
//         window.location.href = './account-login.html?redirect='+encodeURIComponent(window.location.href);

//     },
//     getServerUrl : function(path) {
//         return config.serverHost + path;
//     }
// };

module.exports = {
    aaa : 'aaa'
}