import http from "./tools";


// export const url = 'http://192.168.1.228:8081';
// export const url = 'http://192.168.1.225:8081';
// export const url = 'http://47.110.248.244:8081';
// export const url = 'http://121.41.8.207:8081';
export const url = 'http://192.168.1.241:9081';
export const urls = 'http://47.98.110.30:8088/zs/smoke';
// export const url = 'http://47.98.110.30:9081';
// export const url = 'https://filing.terabits.cn:8000';



//登录
export const login = params =>
  http.post(url + "/login", {
    username: params[0],
    password: params[1],
  });


//登录
export const miejunsystem = params =>
  http.get(url + "/meiJun_system", {

  });




//获取所有账号
export const getAllPlatformLoginInfo = params =>
  http.get(url + "/getAllPlatformLoginInfo", {
    // Authorization: `bearer ${localStorage.getItem("accesstokens")}`,
  });


//编辑账号
export const editPlatformLoginInfo = params =>
  http.post(url + "/editPlatformLoginInfo", {
    // Authorization: `bearer ${localStorage.getItem("accesstokens")}`,
    platformLoginInfos: params[0], 
  });

//获取某个平台账号
export const getPlatformLoginInfoByType = params =>
  http.get(url + "/getPlatformLoginInfoByType", {
    platformType: params[0],
  });

