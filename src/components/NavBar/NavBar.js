import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
// import SearchInput from "../Searcher/SearchInput";
import IconCart from "./IconCart";
import Nav from "./Nav";
import FloatMenu from "./FloatMenu";
import LogoHeader from "./LogoHeader";
import CartsCreated from "./CartsCreated";
import UserAdmin from "./UserAdmin";
import IconCreateProduct from "./IconCreateProduct";

const NavBar = ({ menuList }) => {
    const [productsCart, setProductsCart] = useState(0);
    const [openMenu, setOpenMenu] = useState(false)
    const { products, permits } = useContext(CartContext);
    useEffect(() => {
        if(products.length === 0) return setProductsCart(0);
        setProductsCart(products.map(item => item.quantity).reduce((a, b)=> a + b))
    }, [products])
    return (
        <header className="header">
            
            <LogoHeader/>
            {/* <SearchInput/> */}
            <CartsCreated/>
            <IconCart productsCart={productsCart}/>
            <UserAdmin/>
            {
                permits === "admin" && <IconCreateProduct/>
            }
            
            <Nav 
                menuList={menuList}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
            <FloatMenu
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
        </header>
    )
}

export default NavBar
