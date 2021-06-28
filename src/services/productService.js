import axios from "axios"
export default class ProductService{
    getPrducts(){
      return axios.get("http://localhost:8080/api/products/getall")
    }

    getByProductName(productName){
      return axios.get("http://localhost:8080/api/products/getByProductName?productName="+ productName)
  }

  productAdd(product){
    return axios.post("http://localhost:8080/api/products/add")
  }
}