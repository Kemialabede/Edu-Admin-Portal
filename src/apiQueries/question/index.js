import { QUESTION_API } from '../../services/api';
import instance from '../../services/axiosInstance';

export const addSingleQuestion = (payload) =>
  instance.post(`${QUESTION_API}/add-question`, payload);

export const batchQuestionUpload = (payload) =>
  instance.post(`${QUESTION_API}/batch-upload`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const viewQuestion = (id) => instance.get(`${QUESTION_API}/${id}`);

export const sampleQuestion = () => instance.get(`/question-sample`);

export const updateQuestionSetting = (payload) =>
  instance.post(`${QUESTION_API}/update-question-setting`, payload);

export const viewQuestionSetting = (id) =>
  instance.get(`${QUESTION_API}/fetch-setting/${id}`);

export const updateQuestion = (payload) =>
  instance.post(`${QUESTION_API}/update-question`, payload);

export const deleteQuestion = (id) =>
  instance.delete(`${QUESTION_API}/delete-question/${id}`);
