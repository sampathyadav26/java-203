import axios from "axios";


const baseUrl = "http://localhost:3000/student";
class StudentService {


    getAllStudentS() {
        return axios.get(baseUrl);

    }
    getAllStudent(id){
        return axios.get(`${baseUrl}/${id}`)
    }
    putALLStudentS(students){
        return axios.post(baseUrl,students);
    }
    deleteStudentS(id){
        return axios.delete(`${baseUrl}/${id}`)
    }
    updateStudentsS(id,students){
        return axios.put(`${baseUrl}/${id}`,students)
    }
}

export default new StudentService();
