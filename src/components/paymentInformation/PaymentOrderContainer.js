import PaymentOrder from "./PaymentOrder";
import { useParams } from "react-router";
import { firestore } from "../../firebase";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import LoadingBars from "../LoadingBars";
const PaymentOrderContainer = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);
        const collection = firestore.collection("orders");
        let query = collection.doc(id);
        query = query.get();

        query
            .then((snapshot)=>{
                setOrder(snapshot.data());
                setLoading(false);
                toast.success("¡Muchas gracias por su compra!", {
                    style:{
                        backgroundColor:"#383838",
                        color:"#ffffff"
                    }
                })
            })
            .catch((error)=> {
                setLoading(false);
                toast.error("Lo siento, no se ha podido cargar su orden", {
                    style:{
                        backgroundColor:"#383838",
                        color:"#ffffff"
                    }
                })
                console.log(error);
            })


    }, [id])

    return (
        <div className="payment-order-container">
            { order && <PaymentOrder order={order}/> }
            <ToastContainer/>
            { loading &&  <LoadingBars/>}
        </div>
    )
}

export default PaymentOrderContainer
