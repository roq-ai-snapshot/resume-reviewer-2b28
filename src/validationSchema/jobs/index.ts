import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  requirements: yup.string().nullable(),
  salary: yup.number().integer().nullable(),
  company_id: yup.string().nullable().required(),
});
