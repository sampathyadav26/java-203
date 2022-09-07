import axios from "axios"

const baseUrl = "http://localhost:3000/Employee"
class EmployeeServices {
    getAllEmployee() {
        return axios.get(baseUrl)
    }

    getEmployee(id) {
        return axios.get(`${baseUrl}/${id}`);
    }

    CreateEmployee(employee) {
        return axios.post(`${baseUrl}`, employee);
    }
    UpdateEmployee(id, employee) {
        return axios.put(`${baseUrl}/${id}`, employee);
    }
    DeleteEmployee(id){
        return axios.delete(`${baseUrl}/${id}`)
    }


}
export default new EmployeeServices();