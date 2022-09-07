import axios from "axios";


const baseUrl = "http://localhost:3000/Student";

class StudentService{
    getStudents(){
        return axios.get(baseUrl);
    }

    createStudent(student){
        return axios.post(baseUrl,student);
    }

    deleteStudent(id){
        return axios.delete(`${baseUrl}/${id}`);
    }

    UpdateStudent(id,student){
        return axios.put(`baseUrl+/${id}`,student);
    }

    // export const deleteUser = async (id) => {
    //     return await axios.delete(`${url}/${id}`);
    // }
}
export default new StudentService()