import { useState, useContext } from "react";
import { ToastContainer } from "react-toastify";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { useHistory } from "react-router";
const ItemDetail = ({ item, isExist }) => {
    const { addProduct } = useContext(CartContext);
    const [currentImg, setCurrentImg] = useState(0);
    const history = useHistory();
    

    const onAdd = (itemNumber) => {
        addProduct({...item, quantity:itemNumber})
    }
    

    return (
        <>
         <div className="product-view-carousel">
                <div className="product-view-carousel__bigImage">
                    <img src={item.images[currentImg]} alt={item.title}/>
                </div>
                <div className="product-view-carousel__previewPics">
                    {item.images.map((img, index)=>{
                        return(
                            <img src={img} alt={item.title} key={index} onClick={() => setCurrentImg(index)}/>
                        )
                    })}
                </div>
            </div>
            
            <div className="product-view-title-info">
                <h2>{item.title}</h2>
                <h3>$ {item.price}</h3>

                    {
                        !item.unites && (<div><h3>No hay stock por el momento</h3></div>)
                    }
                    {
                        (item.unites && isExist) ? <div className="div-buttons" onClick={()=> history.push("/cart")}><button className="add-to-cart-button">Ir al carrito</button></div> : null
                    }
                    {
                        (item.unites && !isExist) ? <ItemCount initial={1} stock={parseInt(item.unites)} onAdd={onAdd}/> : null
                    }
                    
            </div>
            
            
                
                
                
            <div className="product-view-specifications">
                <h2>{item.title}</h2>
                <ul className="product-view-specifications__ul">
                    <h3>Especificaciones técnicas</h3>
                    {item.specifications.map((esp, index) =>{
                        return(
                            <li key={index} className="product-view-specifications__li">
                                <h3>{esp.title}</h3>
                                <h4>{esp.especifications1}</h4>
                                <h4>{esp.especifications2}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="product-view-features">
                <h3>Descripción</h3>
                <ul className="product-view-features__ul">
                        {item.description.map((desc, index)=>{
                        return(
                                <li key={index} className="product-view-features__li">
                                    <h3>{desc.title}</h3>
                                    <p>{desc.paragraph}</p>
                                </li>
                            )
                        })}
                </ul>
            </div>  
            <ToastContainer/> 
        </>
    )
}

export default ItemDetail
