import { useReducer, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import PaymentInformation from "./PaymentInformation";
import INITIAL_FORM_STATE from "./InitialFormState";
import REGULAR_EXPRESSION from "./RegularExpressions";
import { formReducer } from "./FormReducer";
import { firestore } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import firebase from 'firebase/app';
import 'firebase/firestore';
import LoadingBars from "../LoadingBars";

const PaymentInformationContainer = () => {
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(formReducer, INITIAL_FORM_STATE)
    const { products, clearProducts } = useContext(CartContext);
    const history = useHistory();
    
    const onChangeInputHandler = (e) => {
        const data = e.target.value;
        const regex = REGULAR_EXPRESSION[e.target.name].test(data); 
        const modification = {
            item: e.target.name,
            value:data,
            onBlur:false,
            checked:regex
        }
        dispatch({ type:"MODIFY_INPUT", payload:modification })
    }
    const onBlurRegex = (e) => {
        dispatch({ type:"BLUR_REGEX", payload:e.target.name })
    }

    const onConfirmCartHandler = () => {
        const checkedInputs  = Object.values(state).map((item)=> item.checked).every((item)=> item === true);
        if(!checkedInputs){
            toast.error("¡No ha completado todos los campos!",{
                style:{
                    backgroundColor:"#383838",
                    color:"#ffffff"
                }
            });
            dispatch({ type: "TOTAL_BLUR_REGEX" })
            return;
        }
        
        // agregando un nueva orden
        setLoading(true);
        const dataBuyer = Object.keys(state).reduce((obj, item)=> ({ ...obj, [item]:state[item].value }),{});
        
        const selectedProducts = products.map((item)=> ({ 
            itemId:item.itemId,
            title:item.title,
            quantity:item.quantity,
            price:item.price
         }))
        
        const date = new Date();
        const dd = date.toLocaleDateString()
        const total = products.map((item)=> item.quantity * item.price).reduce((a,b)=> a + b);
        
        const newOrder = {
            buyer:dataBuyer,
            items:selectedProducts,
            date:dd,
            total
        }
        const orders = firestore.collection("orders");

        const collection = firestore.collection("items").where(firebase.firestore.FieldPath.documentId(), "in", selectedProducts.map(item => item.itemId));
        const query = collection.get();
        const batch = firestore.batch();


        Promise.all([
            orders.add(newOrder),
            query
        ])
        .then((response)=>{
            const [newOrder, snapshot] = response;
            // actualiza stocks
            snapshot.docs.forEach((docSnapshot) => {
                const findIndex = selectedProducts.findIndex(item => item.itemId === docSnapshot.id);
                if(docSnapshot.data().unites >= selectedProducts[findIndex].quantity){
                  batch.update(docSnapshot.ref, { unites: docSnapshot.data().unites - selectedProducts[findIndex].quantity });
                }
            })
            batch.commit() 
            // cupon de compra
            setLoading(false);
            history.push(`/payment-information/${newOrder.id}`);
            clearProducts()            
        })
        .catch((error)=>{
            setLoading(false);
            toast.error("¡Ha ocurrido un error!");
            console.log(error);
        })

    }

    return (
        <>
            {
                products.length > 0 
                ? (
                    <PaymentInformation 
                        state={state} 
                        onChangeInputHandler={onChangeInputHandler}
                        onConfirmCartHandler={onConfirmCartHandler}
                        onBlurRegex={onBlurRegex}
                        products={products}    
                    />
                    )
                : (<div className="alert-cart-no-products">
                    <h2>NO HAY PRODUCTOS EN EL CARRITO</h2>
                    <Link to="/"><button >HOME</button></Link>
                    </div>)
            }
            { loading &&  <LoadingBars/>}
            <ToastContainer/>
        </>
    )
}


export default PaymentInformationContainer
