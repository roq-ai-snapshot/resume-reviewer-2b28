import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comments: yup.string().nullable(),
  resume_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
