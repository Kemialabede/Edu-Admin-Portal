import React, { useRef, useState } from 'react';
import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import { ImUpload2 } from 'react-icons/im';
import Select from '../../components/select';
import { useFetchCourses } from '../../hooks/queries/useFetchCourses';
import { editCourseMaterialSchema } from '../../utilities/validation';
import { useCreateCourseMaterial } from '../../hooks/mutation/useCreateCourseMaterial';
import { useFetchClasses } from '../../hooks/queries/useFetchClasses';

const CreateCourseMaterial = ({ isShown, setIsShown }) => {
  const formRef = useRef();
  const { data } = useFetchCourses({});
  const fileInputRef = React.useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [className, selectedClassName] = useState('');
  const { data: classes } = useFetchClasses({
    query: {},
  });

  const filteredCourses = data?.data?.filter((i) => i.class_name === className);

  const { mutate: createCourseMaterial, isPending } = useCreateCourseMaterial({
    setIsShown,
  });

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === 'application/pdf' || file.type.startsWith('video/'))
    ) {
      setSelectedFile(file);
      setFieldValue('file', file); // Add this line
    } else {
      alert('Only PDF and video files are allowed.');
      setSelectedFile(null);
      setFieldValue('file', null); // Add this line
    }
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('course_uuid', values.course_uuid);
    formData.append('material_name', values.material_name);
    createCourseMaterial(formData);
  };

  return (
    <Modal
      title="Create Course Material"
      isShown={isShown}
      setIsShown={setIsShown}
    >
      <Formik
        initialValues={{
          course_uuid: '',
          material_name: '',
          file: null,
        }}
        innerRef={formRef}
        onSubmit={handleSubmit}
        validationSchema={editCourseMaterialSchema}
      >
        {(formik) => {
          const renderPreview = () => {
            if (!formik.values.file) return null;

            const fileUrl = URL.createObjectURL(formik.values.file);

            if (formik.values.file.type === 'application/pdf') {
              return (
                <iframe
                  src={fileUrl}
                  style={{ width: '100%', height: '300px', border: 'none' }}
                  title="PDF Preview"
                />
              );
            } else if (formik.values.file.type.startsWith('video/')) {
              return (
                <video
                  src={fileUrl}
                  style={{ width: '100%', maxHeight: '300px' }}
                  controls
                >
                  Your browser does not support the video tag.
                </video>
              );
            }
          };
          return (
            <Form>
              <div style={{ marginBottom: '10px' }}>
                <Select
                  title="Classes"
                  placeholder="Select Class"
                  options={classes?.data?.map((item) => ({
                    label: item.class_name,
                    value: item.class_name,
                  }))}
                  onChange={(e) => {
                    selectedClassName(e.target.value);
                  }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Select
                  title="Course Name"
                  name="course_uuid"
                  placeholder="Select Course"
                  options={filteredCourses?.map((item) => ({
                    label: item.name,
                    value: item.uuid,
                  }))}
                  onChange={(e) => {
                    formik.setFieldValue('course_uuid', e.target.value);
                  }}
                  error={formik.errors.course_uuid}
                />
              </div>
              <div>
                <Input
                  title="Material name"
                  name="material_name"
                  value={formik.values.material_name}
                  onChange={formik.handleChange}
                  error={formik.errors.material_name}
                  type="text"
                />
              </div>
              <div
                className="file-upload"
                onClick={handleDivClick}
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                {!formik.values.file && <ImUpload2 />}
                <span className="browse-text"> Browse</span>
                <input
                  type="file"
                  id="fileInput"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange(e, formik.setFieldValue)}
                  accept="application/pdf,video/*"
                />
                {formik.values.file ? (
                  <div style={{ marginTop: '10px' }}>
                    <p>Selected file: {formik.values.file.name}</p>
                    {renderPreview()}
                  </div>
                ) : (
                  <p>Only PDF and video files allowed</p>
                )}
                {formik.errors.file && (
                  <div className="error">{formik.errors.file}</div>
                )}
              </div>
              <div className="create-program__btn">
                <Button
                  theme="primary"
                  size="sm"
                  disabled={!formik.isValid}
                  loading={isPending}
                >
                  Create material
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default CreateCourseMaterial;
