import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
})

// eslint-disable-next-line import/prefer-default-export
export const getPastLaunchesRequest = () => axiosInstance.get('/launches/past')
