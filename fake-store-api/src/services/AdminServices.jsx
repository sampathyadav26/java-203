import axios from "axios"
const adminBaseUrl="  http://localhost:3013/admins"
class AdminServices{
    getAllAdmins(){
        return axios.get(adminBaseUrl);
    }
}
export default new AdminServices();