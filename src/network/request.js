import axios from 'axios'
// import router from '../router'
// import store from '../store'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://10.112.94.137:33060/',
    timeout: 5*60*1000
  })

  // instance.interceptors.request.use((config) => {
  //   if(store.state.token){
  //     config.headers.common['Authorization'] = 'Bearer ' + store.state.token
  //   }
  //   return config;
  // }, err => {
  //   return Promise.reject(err);
  // })

  // instance.interceptors.response.use(res => {
  //   if(res.data.status=='401'||res.data.status=='408') {
  //     localStorage.clear();
  //     if(router.currentRoute.fullPath!='/login') {
  //       router.replace({
  //         path: '/login',
  //       })
  //     }
  //   }
  //   return res
  // }, err => {
  //   if(err){
  //     switch(err.status){
  //       case "401":
  //         localStorage.clear();
  //         if(router.currentRoute.fullPath!='/login') {
  //           router.replace({
  //             path: '/login',
  //           })
  //         }
  //     }
  //   }
  // })

  return instance(config)
}
