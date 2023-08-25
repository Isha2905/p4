export const addErrorIntoField = (errors) => errors ? { error: true } : { error: false };
export const phoneRegEx = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const pswdRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const accountRegEx = /^([0-9]{3})$/;
export const aadharRegEx = /^([0-9]{16})$/;
export const panRegEx = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
export const DateRegex =  /^ (0 [1-9]|1) [- /.] (0 [1-9]| [0-9]|3) [- /.] (19|20)dd+$/
export const TextRegex =/^[a-zA-Z0-9]*$/
