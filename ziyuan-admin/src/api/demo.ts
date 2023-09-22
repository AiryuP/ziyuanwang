import axios from '@/utils/request'


export const postData = (params: {} ) => axios.post(  'url', params )

export const getData = (params: {} ) => axios.get(  'url', params )