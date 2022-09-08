import axios from "axios";
const baseurl = " http://localhost:3000/students";

class StudentService {
    getAllstudents() {
        return axios.get(baseurl);
    }
    getStudent(id){
        return axios.get(`${baseurl}/${id}`);
      }
    createStudent(student){
        return axios.post(baseurl,student)
    }
    deleteStudent(id){
        return axios.delete(`${baseurl}/${id}`);
    }
    updateStudent(id,student){
        return axios.put(`${baseurl}/${id}`,student);
    }
}
export default new StudentService();