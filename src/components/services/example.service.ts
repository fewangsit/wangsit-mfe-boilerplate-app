import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { FetchResponse } from '@fewangsit/wangsvue-fats/datatable';
import { FetchOptionResponse } from '@tagsamurai/fats-api-services/src/types/fetchResponse.type';
import { GetOptionsParams, GetUsersParams } from '../dto/user.dto';
import { Member } from '@/types/member.type';
import { getBaseURL } from '@tagsamurai/fats-api-services';

type GetOptionsResponse = FetchOptionResponse<GetOptionsParams>;

const API = ({ headers = {}, params = {} } = {}): AxiosInstance => {
  const user = JSON.parse(localStorage.getItem('user') ?? '{}');
  const BASE_URL = getBaseURL();

  const instance = axios.create({
    baseURL: `${BASE_URL}/user`,
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      ...headers,
    },
    params,
  });

  return instance;
};

const UserServices = {
  getUsers: (
    params: GetUsersParams,
  ): Promise<AxiosResponse<FetchResponse<Member>>> => {
    return API({ params }).get('');
  },

  getOptions: (
    params: GetOptionsParams,
  ): Promise<AxiosResponse<GetOptionsResponse>> => {
    return API({ params }).get('/options');
  },
};

export default UserServices;
