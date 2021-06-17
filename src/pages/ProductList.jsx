import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import {useDispatch} from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import{toast} from "react-toastify"
export default function ProductList() {

  const dispatch = useDispatch()//bir fonksiyon çağırmak için kullanıyoruz. 

  const [products, setProducts] = useState([]);
  //komponent yüklendiği anda yapılmasını istediğimiz yer burası dataları burada yönetiyoruz
  useEffect(() => {
      let productService=new ProductService()
      productService.getPrducts().then(result=>setProducts(result.data.data)).catch()
  },[]) //yazdığımız servisi çağırıyoruz ve useeffext data döndürdüğünden bizde datanın datasını alıyoruz
  //[] bunun içerisine değişmesini istediğimiz alanları yazıyoruz.

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    toast.success(`${product.productName} sepete eklendi!`)
  }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell> 
          </Table.Row>
        </Table.Header>

        <Table.Body>
        
          {products.map((product) => (
            <Table.Row key={product.id}>
            <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
            <Table.Cell>{product.unitPrice}</Table.Cell>
            <Table.Cell>{product.unitsInStock}</Table.Cell>
            <Table.Cell>{product.quantityPerUnit}</Table.Cell>
            <Table.Cell>{product.category.categoryName}</Table.Cell>
            <Table.HeaderCell><Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></Table.HeaderCell>
          </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
