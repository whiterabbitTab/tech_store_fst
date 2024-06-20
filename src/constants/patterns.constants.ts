interface IPatterns {
  username: RegExp,
  email: RegExp;
  password: RegExp;
  confirmpass: RegExp;
  firstname: RegExp;
  surname: RegExp;
  phone: RegExp;
}

const pattern_email = /[a-zA-Z]{3}[0-9a-zA-Z]*\d*@(gmail)*(yandex)*(mail)*[.]\D{2}[a-z]*/
const pattern_password = /[0-9a-zA-Z$@!?%]{7}[0-9a-zA-Z$@!?%]*/
const pattern_name = /[A-Z]{1}[a-z]*/
const pattern_username = /[A-Za-z]{3}[A-Za-z0-9_$]*/
const pattern_phone = /[+7][(9][0-9)]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}/

export const patterns: IPatterns = {
  firstname: pattern_name,
  surname: pattern_name,
  username: pattern_username,
  email: pattern_email,
  password: pattern_password,
  confirmpass: pattern_password,
  phone: pattern_phone
}