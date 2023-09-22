import axios, { AxiosInstance, AxiosRequestConfig, CancelToken } from 'axios'
import errorHandle from './errorHandle' 
// axios.defaults.withCredentials=true;

class HttpRequest {
  private baseUrl: string
  private pending: any
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.pending = {}
  }
  // 获取axios配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 600000
    }
    return config
  }
  removePending(key: string, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求')
      delete this.pending[key]
    }
  }
  // 设定拦截器
  interceptors(instance: AxiosInstance) {
    // 请求拦截器
    instance.interceptors.request.use((config) => { 
      return config
    }, (err: any) => { 
      errorHandle(err) 
      return Promise.reject(err)
    })

    // 响应请求的拦截器
    instance.interceptors.response.use((res) => { 
      const key = res.config.url + '&' + res.config.method
      this.removePending(key)
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } 
      return Promise.reject(res) 
    }, (err) => { 
      errorHandle(err)
      return Promise.reject(err)
    })
  }
  // 创建实例
  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }
  get(url: string, config?: AxiosRequestConfig) {
    let options
    if (url.indexOf('/json/rings/') !== -1) {
      options = Object.assign(
        {
          method: 'get',
          url: 'http://' + window.location.host + url,
        },
        config
      )
    }
    else {
      options = Object.assign(
        {
          method: 'get',
          url: url,
        },
        config
      )
    }
    return this.request(options)
  }
  post(url: string, data?: any) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
  delete(url: string, data?: any) {
    return this.request({
      method: 'delete',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
