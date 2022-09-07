import axios from "axios";
const productBaseUrl = "http://localhost:3011/cart";
class ProductServices {
  getAllProductsFromCart() {
    return axios.get(productBaseUrl);
  }
  addProductToCart(product) {
    return axios.post(`${productBaseUrl}`, product);
  }
  removeProductFromCart(id){
    return axios.delete(`${productBaseUrl}/${id}`);
  }
}
export default new ProductServices();
