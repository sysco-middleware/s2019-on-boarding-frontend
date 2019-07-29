export const required = value => (value ? undefined : "Required");
export const requiredName = value =>
  value && !/^[a-zA-Z ]+$/i.test(value) ? "Invalid Name" : undefined;
export const Number = value =>
  value && !/^[0-9]+$/i.test(value) ? "Invalid Number" : undefined;
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
export const emailSysco = value =>
  value && !/^[A-Z0-9._%+-]+@(sysco\.no)$/i.test(value)
    ? "Invalid email address"
    : undefined;
