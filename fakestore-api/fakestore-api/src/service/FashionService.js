import axios from 'axios';
const baseurl =" https://fakestoreapi.com/products";

class FashionService {
  getAllProducts() {
    return axios.get(baseurl);
  }
}

export default new FashionService();