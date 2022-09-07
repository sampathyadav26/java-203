import axios from "axios"
const baseUrl="http://localhost:5000/students"
class StudentService{

    getAllStudents(){
        return axios.get(baseUrl);
    }
    getStudent(id){
        return axios.get(`${baseUrl}/${id}`)
    }
    createStudent(student){
        return axios.post(baseUrl,student);
    }
    deleteStudent(id){
        return axios.delete(`${baseUrl}/${id}`);
    }
    updateStudent(id,student){
        return axios.put(`${baseUrl}/${id}`,student);
    }
}

export default new StudentService();

