import axios from "axios";

const baseurl = "http://localhost:3000/user";
const url = "https://fakestoreapi.com/products";

class FashionService {
  getAllProducts() {
    return axios.get(url);
  }
  createProduct(products){
    return axios.post(baseurl, products);
  }
  getProduct(id) {
    return axios.get(`${url}/${id}`);
  }
}

export default new FashionService()