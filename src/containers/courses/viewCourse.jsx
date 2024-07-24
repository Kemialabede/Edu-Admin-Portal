import DashboardLayout from '../../components/layout';
import PDFPreview from '../../components/pdfPreviewer';
import VideoPreview from '../../components/videoPreview';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchSingleCourse } from '../../hooks/queries/useFetchSingleCourse';

const ViewCourse = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isFetching } = useFetchSingleCourse(params?.id);

  const getProxiedUrl = (url) => {
    // Replace the original domain with /api
    return url.replace('https://api.ksmartapp.com', '/api');
  };

  const isVideoFile = (fileName) => {
    const videoExtensions = ['.mp4', '.mov', '.avi', '.webm'];
    return videoExtensions.some((ext) => fileName.toLowerCase().endsWith(ext));
  };

  return (
    <DashboardLayout>
      <div className="courseMaterials">
        <div className="courseMaterials__heading">
          <div
            onClick={() => navigate(-1)}
            style={{ display: 'flex', alignItems: 'center', gap: '7px' }}
          >
            <IoArrowBack style={{ width: '25px', height: '25px' }} />
            <h2>{data?.name}</h2>
          </div>
          <div></div>
        </div>
        <div className="courseMaterials__pdf">
          {!isFetching &&
            data?.course_materials?.map((item, index) => {
              const proxiedUrl = getProxiedUrl(item.file_path);
              if (item.file_path.endsWith('.pdf')) {
                return (
                  <div key={index} className="flex-item">
                    <PDFPreview pdfUrl={proxiedUrl} />
                  </div>
                );
              } else if (isVideoFile(item.file_path)) {
                return (
                  <div key={index} className="flex-item">
                    <VideoPreview videoUrl={proxiedUrl} />
                  </div>
                );
              } else {
                return (
                  <div key={index} className="flex-item">
                    <p>Unsupported file type: {item.file_path}</p>
                  </div>
                );
              }
            })}
        </div>
        {!isFetching && data?.course_materials?.length === 0 && (
          <div className="courseMaterials__empty">
            <img src="/src/assets/icons/placeholder.png" />
            <p>No course materials available</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ViewCourse;
