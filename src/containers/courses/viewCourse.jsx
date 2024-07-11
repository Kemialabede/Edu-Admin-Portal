import React from 'react'
import DashboardLayout from '../../components/layout';
import PDFPreview from '../../components/pdfPreviewer';
import Search from '../../components/search';
import './courses.scss';
import VideoPreview from '../../components/videoPreview';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const ViewCourseMaterials = () => {
  const samplePdfUrl = "https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf";
  const sampleVideoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

    const navigate = useNavigate()

  return (
    <DashboardLayout>
      <div className="courseMaterials">
        <div className="courseMaterials__heading">
        <div onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '7px'}}>
        <IoArrowBack style={{ width: '25px', height: '25px' }} />
        <h2>Mathematics 101</h2>
      </div>
          <div>
            <Search />
          </div>
        </div>
        <div className='courseMaterials__pdf'>
          <div className='flex-item'>
          <PDFPreview pdfUrl={samplePdfUrl} />
          </div>
           <div className='flex-item'>
          <VideoPreview videoUrl={sampleVideoUrl} />
          </div>
           <div className='flex-item'>
          <PDFPreview pdfUrl={samplePdfUrl} />
          </div>
           <div className='flex-item'>
          <VideoPreview videoUrl={sampleVideoUrl} />
          </div>
           <div className='flex-item'>
          <PDFPreview pdfUrl={samplePdfUrl} />
          </div>
           <div className='flex-item'>
          <PDFPreview pdfUrl={samplePdfUrl} />
          </div>
           <div className='flex-item'>
          <PDFPreview pdfUrl={samplePdfUrl} />
          </div>
           <div className='flex-item'>
          <VideoPreview videoUrl={sampleVideoUrl} />
          </div>
           <div className='flex-item'>
          <VideoPreview videoUrl={sampleVideoUrl} />
          </div>
           <div className='flex-item'>
          <VideoPreview videoUrl={sampleVideoUrl} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ViewCourseMaterials;
