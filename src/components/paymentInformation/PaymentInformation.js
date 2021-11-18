import DATA_INPUTS from "./DataInputs";
import PaymentInformationInput from "./PaymentInformationInput";
import CheckOutDetail from "./CheckOutDetail";
const PaymentInformation = ({ state, onChangeInputHandler, onConfirmCartHandler, onBlurRegex, products }) => {
    
    return (
        <div className="payment-information-page">

            <div className="payment-information-form">
                <h2>Información de pago</h2>

                {
                    DATA_INPUTS.map((item, index)=> <PaymentInformationInput
                        key={index} 
                        item={item}
                        state={state}
                        onChangeInputHandler={onChangeInputHandler}
                        onBlurRegex={onBlurRegex}
                        />)
                }

            </div>
            <div className="payment-information-detail">
                <CheckOutDetail 
                    products={products}
                    onConfirmCartHandler={onConfirmCartHandler}    
                />
            </div>
        </div>
    )
}

export default PaymentInformation;




