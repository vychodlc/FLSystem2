import { request } from "./request";

export function sendTask(string) {
  let formData = new FormData();
  formData.append('data',string)
  return request({
    method: 'POST',
    url: '/measure/measure',
    data: formData
  })
}

export function getList(p) {
  return request({
    url: '/measure/list_measure',
    params: {p:p}
  })
}

export function getFilterList(params) {
  return request({
    url: '/measure/search_measure',
    params
  })
}

export function getDetail(id) {
  return request({
    url: '/measure/detail',
    params: {mea_id:id}
  })
}

export function getForm(params) {
  return request({
    url: '/measure/statistics',
    params: {
      cycle: params.cycle,
      business_name: params.business_name,
      cpe_ip: params.cpe_ip,
      business_ser_ip: params.business_ser_ip,
      measure_type: params.measure_type,
      start_time: (new Date(params.time)).valueOf()/1000
    }
  })
}

export function getBusinessList() {
  return request({
    url: '/measure/list_business',
  })
}

export function getIPList(business_name) {
  return request({
    url: '/measure/list_ip',
    params: {business_name: business_name}
  })
}

export function deleteItem(mea_id) {
  return request({
    url: '/measure/delete_measure',
    params: { mea_id }
  })
}