import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const intialState={
    cartItems:cartItems
}

export default function carReducer(state=intialState,{type,payload}) { 
    switch (type) {
        case ADD_TO_CART:
            let product=state.cartItems.find(c=>c.product.id===payload.id)
            if (product) {
                product.quantity++;
                return {
                    ...state
                }
            } else {
                return{
                    ...state ,
                    cartItems:[...state.cartItems,{quantity:1,product:payload}]
                }
            }
            case REMOVE_FROM_CART:
            return{
                ...state,//burada state referans olarak alıyoruz ve daha sonra değiştirmek için bir sonraki adıma gönderiyoruz
                cartItems:state.cartItems.filter(c=>c.product.id!==payload.id)//karttakilerden bizim gönderdiğiz idye eşit olanı çıkar ve yani bir array oluştur onu bana getir
            }
        default:
            return state;
    }
}