import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService"

export default function ProductDetails() {
    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService=new ProductService()
        productService.getByProductName(name).then(result=>setProduct(result.data.data)).catch()
    },[])

  let { name } = useParams(); //iki tarafta aynı ise tekini yazıyoruz let{id:id}
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.unitPrice} TL</Card.Meta>
            <Card.Description>
             <strong>{product.category?.categoryName}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
