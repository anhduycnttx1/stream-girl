import useValidate from '@vuelidate/core'

const { helpers, required, email } = require('@vuelidate/validators')

const formRegister = (user) => {
  const rules = {
    display_name: { isRequired: helpers.withMessage('', required) },
    password: { isRequired: helpers.withMessage('', required) },
    confirm_password: {
      isRequired: helpers.withMessage('', required),
      sameAs: (value) => value === user.password,
    },
    tel: { isRequired: helpers.withMessage('', required) },
  }
  return useValidate(rules, user)
}

const formLogin = (data) => {
  const rules = {
    email: {
      isRequired: helpers.withMessage('', required),
      isEmail: helpers.withMessage('', email),
    },
    password: { isRequired: helpers.withMessage('', required) },
  }
  return useValidate(rules, data, { $scope: false })
}

const formSendEmail = (mail) => {
  const rules = {
    email: {
      isRequired: helpers.withMessage('', required),
      isEmail: helpers.withMessage('', email),
    },
  }
  return useValidate(rules, mail, { $scope: false })
}

const formChangeEmail = (newEmail) => {
  const rules = {
    email: {
      isRequired: helpers.withMessage('', required),
      isEmail: helpers.withMessage('', email),
    },
  }
  return useValidate(rules, newEmail, { $scope: false })
}

const formChangePassword = (passwords) => {
  const rules = {
    password: { isRequired: helpers.withMessage('', required) },
    confirm_password: {
      isRequired: helpers.withMessage('', required),
      sameAs: (value) => value === passwords.password,
    },
  }
  return useValidate(rules, passwords, { $scope: false })
}

export {
  formRegister,
  formLogin,
  formSendEmail,
  formChangeEmail,
  formChangePassword,
}
