const ONLY_LETTERS = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const REGULAR_EXPRESSION = {
    name:ONLY_LETTERS,
    surname:ONLY_LETTERS,
    email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    province:ONLY_LETTERS,
    city:ONLY_LETTERS,
    zipCode:/^[0-9]*$/,
    address:/^\s*\S+(?:\s+\S+){2}/

}
export default REGULAR_EXPRESSION;