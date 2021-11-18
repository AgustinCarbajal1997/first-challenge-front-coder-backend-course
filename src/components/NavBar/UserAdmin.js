import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const UserAdmin = () => {
    const { changePermit } = useContext(CartContext)
    return (
        <div className="permits-container">
            <label>
                User
                <input type="radio" name="permits" value="user" defaultChecked onClick={()=> changePermit("user") }/>
            </label>
            <label>
                Admin
                <input type="radio" name="permits" value="admin" onClick={()=> changePermit("admin")} />
            </label>
        </div>
    )
}

export default UserAdmin
