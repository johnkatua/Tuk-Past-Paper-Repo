import * as yup from 'yup';

export const validateRegisterUser = user => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
  });
  return schema.validate(user);
};

export const validateLoginUser = user => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  return schema.validate(user);
}