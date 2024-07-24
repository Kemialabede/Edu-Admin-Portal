import { useRef, useState } from 'react';
import Select from '../../components/select';
import { ImUpload2 } from 'react-icons/im';
import { FaDownload } from 'react-icons/fa';
import Button from '../../components/button';
import { CSVLink } from 'react-csv';
import { data, headers } from '../../mocks/csvQuestionData';
import { Form, Formik } from 'formik';
import { useUploadBatchQuestions } from '../../hooks/mutation/useUploadBatchQuestions';
import { bulkUploadSchema } from '../../utilities/validation';

const BulkUpload = ({ courses, setIsShown }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const formRef = useRef();

  const { mutate: createBatchQuestions, isPending } = useUploadBatchQuestions({
    setIsShown,
  });

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('file', values.file);
    formData.append('course_uuid', values.course_uuid);
    createBatchQuestions(formData);
  };

  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      if (
        // file.type === 'text/csv' ||
        // file.name.endsWith('.csv') ||
        file.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.name.endsWith('.xlsx') ||
        file.name.endsWith('.xls')
      ) {
        setFileName(file.name);
        setFieldValue('file', file);
        setError('');
      } else {
        setFileName('');
        setError('Please upload only XLSX files and XLS files');
      }
    }
  };

  return (
    <>
      <div className="sample-csv-box">
        <h3>Download Sample Upload</h3>
        <p>Use this template for your bulk upload</p>
        <Button theme="secondary" size="sm">
          <CSVLink data={data} headers={headers} title="Sample Questions">
            <FaDownload style={{ marginRight: '8px' }} />
            Download Template
          </CSVLink>
        </Button>
      </div>
      <Formik
        initialValues={{
          course_uuid: '',
          file: null,
        }}
        innerRef={formRef}
        onSubmit={handleSubmit}
        validationSchema={bulkUploadSchema}
      >
        {(formik) => (
          <Form>
            <div>
              <Select
                title="Course"
                name="course_uuid"
                onChange={(e) => {
                  formik.setFieldValue('course_uuid', e.target.value);
                }}
                placeholder="Select course"
                error={formik.errors.course_uuid}
                options={courses?.map((item) => ({
                  label: item.name,
                  value: item.uuid,
                }))}
              />
            </div>
            <br />
            <div className="file-upload" onClick={handleDivClick}>
              {fileName ? <p>Selected file: {fileName}</p> : <ImUpload2 />}
              <span className="browse-text">Browse</span>
              <input
                type="file"
                id="fileInput"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept=".xlsx,.xls"
                onChange={(e) => handleFileChange(e, formik.setFieldValue)}
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="create-program__btn">
              <Button
                theme="primary"
                size="sm"
                loading={isPending}
                disabled={!formik.isValid}
              >
                Create Question
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BulkUpload;
