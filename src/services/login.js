import request from '../utils/request';

export async function accountLogin(params){
  return request('/pandora/adminUser/login',{
    method:'post',
    body:params,
  });
}