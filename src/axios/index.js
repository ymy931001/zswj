import http from "./tools";


// export const url = 'http://192.168.1.228:8081';
// export const url = 'http://192.168.1.225:8081';
// export const url = 'http://47.110.248.244:8081';
// export const url = 'http://121.41.8.207:8081';
// export const url = 'http://192.168.1.241:9081';
export const url = 'http://47.98.110.30:9081';
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




//调用打印机
export const getAllPlatformLoginInfo = params =>
  http.get(url + "/getAllPlatformLoginInfo", {
    Authorization: params[0],
  });


