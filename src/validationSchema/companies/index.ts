import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  founded_date: yup.date().nullable(),
  location: yup.string().nullable(),
  industry: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
