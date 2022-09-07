import axios from "axios";
const baseUrl="http://localhost:3000/employee";

class EmployeeServices{
    getAllEmployees(){
       return axios.get(baseUrl);
    }
    getEmployee(id){
      return axios.get(`${baseUrl}/${id}`);
    }
    deleteEmployee(id){
      return axios.delete(baseUrl+"/"+id);
    }
    
    updateEmployee(id,employee){
    return axios.put(`${baseUrl}/${id}`,employee)
    }
    createEmployee(employee){
     return axios.post(baseUrl,employee)
    }

}
export default new EmployeeServices();