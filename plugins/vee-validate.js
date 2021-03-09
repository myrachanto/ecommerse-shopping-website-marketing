import { extend } from 'vee-validate'
import { required, min, alpha, email, confirmed, numeric } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
})
extend('min', {
  ...min,
  message: 'This is less than 4 charaters'
})

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})
extend('confirmed', {
  ...confirmed,
  message: 'Corfimation failed'
})
extend('numeric', {
  ...numeric,
  message: 'Numeric is required'
})
