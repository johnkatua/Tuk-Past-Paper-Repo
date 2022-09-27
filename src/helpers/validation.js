import * as yup from "yup";

export const validateRegisterUser = (user) => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  return schema.validate(user);
};

export const validateLoginUser = (user) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  return schema.validate(user);
};

export const validatePaperDetails = (paper) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    file: yup.mixed().required("File is required"),
    year: yup.string().required(),
    status: yup.string().required(),
    course: yup.string().required(),
    faculty: yup.string().required(),
    academicYear: yup.string().required(),
  });
  return schema.validate(paper);
};

export const validateFacultyDetails = (faculty) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    acronym: yup.string().required(),
    description: yup.string().required(),
  });
  return schema.validate(faculty);
};
