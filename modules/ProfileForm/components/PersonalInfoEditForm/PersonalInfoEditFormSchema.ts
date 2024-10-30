import * as yup from 'yup';
export const PersonalInfoEditFormSchema = yup.object({
  fullName: yup.string(),
  email: yup.string().email(),
});
