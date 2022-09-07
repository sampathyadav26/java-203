import axios from "axios";
const productBaseUrl = "  http://localhost:3010/products";
class ProductServices {
  getAllProducts() {
    return axios.get(`${productBaseUrl}`);
  }
  getProduct(id) {
    return axios.get(`${productBaseUrl}/${id}`);
  }
  createProduct(product) {
    return axios.post(`${productBaseUrl}`, product);
  }
  deleteProduct(id){
    return axios.delete(`${productBaseUrl}/${id}`);
  }
  updateProduct(id, product) {
    return axios.put(`${productBaseUrl}/${id}`,product);
  }
}
export default new ProductServices();
