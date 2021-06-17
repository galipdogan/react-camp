import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetails from "../pages/ProductDetails";
import CartDetails from "../pages/CartDetails";
export default function Dashbord() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width="twelve">
            <Route exact path="/" component={ProductList}/> 
            <Route exact path="/products" component={ProductList}/>
            <Route path="/products/:name" component={ProductDetails}/>
            <Route path="/cart" component={CartDetails}/> 
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
