import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup.string().required('Email address is required'),
  password: yup
    .string()
    .required('password is required')
    .min(6, 'Cannot be less than six characters'),
});

export const createLevelSchema = yup.object().shape({
  name: yup.string().required('Level is required'),
});

export const createClassSchema = yup.object().shape({
  name: yup.string().required('Class is required'),
  level_uuid: yup.string().required('Level is required'),
});

export const createCourseSchema = yup.object().shape({
  name: yup.string().required('Course name is required'),
  class_id: yup.string().required('Class is required'),
});

export const editCourseMaterialSchema = yup.object().shape({
  course_uuid: yup.string().required('Course name is required'),
  material_name: yup.string().required('Material name is required'),
});

export const createCourseMaterialSchema = yup.object().shape({
  course_uuid: yup.string().required('Course name is required'),
  material_name: yup.string().required('Material name is required'),
  file: yup
    .mixed()
    .required('A file is required')
    .test('fileType', 'Only PDF and video files are allowed', (value) => {
      if (!value) return false;
      return (
        (value && value.type === 'application/pdf') ||
        (value && value.type.startsWith('video/'))
      );
    })
    .test('fileSize', 'File size is too large', (value) => {
      if (!value) return false;
      return value && value.size <= 5000000; // 5MB limit
    }),
});

export const singleUploadSchema = yup.object().shape({
  course_uuid: yup.string().required('Course name is required'),
  question: yup.string().required('Question is required'),
  a: yup.string().required('Option A is required'),
  b: yup.string().required('Option B is is required'),
  c: yup.string(),
  d: yup.string(),
  answer: yup.string().required('Answer is required'),
});

export const adminSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  role: yup.string().required('Role is required'),
});

export const changePasswordValidationSchema = yup.object().shape({
  current_password: yup
    .string()
    .required('Current password is required')
    .min(6, 'Cannot be less than six characters'),
  new_password: yup
    .string()
    .required('New password is required')
    .min(8, 'Must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,}$/,
      'Must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character',
    ),
  new_password_confirmation: yup
    .string()
    .required('Please confirm your new password.')
    .oneOf([yup.ref('new_password')], 'Your passwords do not match.'),
});

export const bulkUploadSchema = yup.object().shape({
  course_uuid: yup.string().required('Course is required'),
  file: yup
    .mixed()
    .required('File is required')
    .test('fileFormat', 'Only XLSX and XLS files are allowed', (value) => {
      if (!value) return true; // Let required handle null/undefined
      return (
        value.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        value.name.endsWith('.xlsx') ||
        value.name.endsWith('.xls')
      );
    }),
});
