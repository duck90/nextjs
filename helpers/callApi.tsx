import axios from 'axios';

interface CallApiParams {
  method: 'GET' | 'POST';
  url: string;
  body?: any;
  serverCookie?: any;
}

interface UserInfo {
  id: number;
  nickname: string;
  password: string;
  userId: string;
}

const callApi = (param: CallApiParams) => {
  switch (param.method) {
    case 'GET':
      return axios.get<UserInfo[]>(param.url);

    case 'POST':
      return axios.post<any>(param.url, param.body);
    
    default: break;
  }
}

export default callApi;