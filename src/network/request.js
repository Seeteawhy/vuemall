import axios from "axios"

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: '10000'
  })

  instance.interceptors.request.use(fulfill => {
    return fulfill
  }, err => {
    console.log(err)
  })
  return instance(config)
}