import axios from "axios"
export default class ProductService{
    getPrducts(){
      return axios.get("http://localhost:8080/api/products/getall")
    }

}