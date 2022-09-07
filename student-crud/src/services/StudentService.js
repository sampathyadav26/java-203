import axios from "axios";
const baseUrl="http://localhost:3000/student";
class StudentService{

    getAllStudents(){
        return axios.get(baseUrl);
    }

}
export default new StudentService();