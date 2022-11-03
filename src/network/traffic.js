import { request } from "./request";

export function overview() {
  return request({
    url: '/traffic/overview',
  })
}

export function performance(params) {
  return request({
    url: '/traffic/performance',
    params
  })
}

export function rate(params) {
  return request({
    url: '/traffic/rate',
    params
  })
}

export function delay(params) {
  return request({
    url: '/traffic/delay',
    params
  })
}

export function get_delay() {
  return request({
    url: '/traffic/get_delay',
  })
}