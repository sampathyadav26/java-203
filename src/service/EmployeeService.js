import axios from "axios";
const baseURL="http://localhost:3000/employees"
class EmployeeService{
getAllEmployees(){
    return axios.get(baseURL);
}
getEmployee(id){
    return axios.get(`${baseURL}/${id}`);
}
createemploye(employee){
    return axios.post(baseURL,employee)
}
deleteemployee(id){
    return axios.delete(`${baseURL}/${id}`)
}
updateemployee(id,employee){
    return axios.put(`${baseURL}/${id}`,employee)
}
}
export default new EmployeeService();