import axios from "axios"
const baseUrl="http://localhost:3000/employee"
class EmployeeService{

    getAllEmpolyees(){
        return axios.get(baseUrl);
    }

    getEmployee(id){
        return axios.get(`${baseUrl}/${id}`);
    }
    createEmployee(Employee){
        return axios.post(baseUrl,Employee);
    }
    updateEmployee(id, Employee) {
        return axios.put(`${baseUrl}/${id}`, Employee);
      }
    deleteEmployees(id){
        return axios.delete(`${baseUrl}/${id}`)
      }
}
console.log(baseUrl)
export default new EmployeeService();