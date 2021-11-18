const PaymentInformationInput = ({ item, state, onChangeInputHandler, onBlurRegex }) => {
  return (
    <div>
        <label>{item.label}</label>
        <input
            className={`payment-information-form-input ${
            !state[item.name].checked && state[item.name].onBlur && "payment-input-error"
            }`}
            type="text"
            name={item.name}
            value={state[item.name].value}
            onChange={onChangeInputHandler}
            onBlur={onBlurRegex}
            // onBlurCapture={onBlurRegex}
        />
    </div>
  );
};

export default PaymentInformationInput;
