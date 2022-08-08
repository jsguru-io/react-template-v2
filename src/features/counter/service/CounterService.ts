import { AxiosResponse } from 'axios';
import BaseService from '../../../utils/service/HttpClient';
import { Employee } from '../model/employee';

interface EmployeeResponse{
  data:Employee[],
  message:string,
  status:'string'
}

const getEmployee = async (data = {}, query = {}): Promise<Employee[]> => {
  const baseService = new BaseService().getAPiService();
  const queryString = baseService.qs.stringify(query);
  const path = baseService.url.build?.('employees');
  const url = BaseService.combine(path, queryString);
  const response: AxiosResponse<EmployeeResponse> = await baseService.get(url, data);
  return response.data.data;
};

export { getEmployee };
