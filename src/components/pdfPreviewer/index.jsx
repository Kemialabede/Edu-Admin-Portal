import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import './pdfPreviewer.scss';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { IoOpenOutline } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';
import DeletePdf from './deletePdf';
import ViewPdf from './viewPdf';

const PDFPreview = ({ pdfUrl }) => {
  const [openModal, setOpenModal] = useState(null);
  const [showFullPDF, setShowFullPDF] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  return (
    <>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <div>
          <div className="pdfPreviewer">
            <div className="pdfPreviewer__pdf">
              <Viewer fileUrl={pdfUrl} />
            </div>
            <div className="pdfPreviewer__actions">
              <p>Understanding Maths</p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  cursor: 'pointer',
                }}
              >
                <IoOpenOutline
                  className="pdfPreviewer__actions__view"
                  onClick={() => setShowFullPDF(true)}
                />
                <MdOutlineDelete
                  className="pdfPreviewer__actions__delete"
                  onClick={() => handleOpenModal('delete')}
                />
              </div>
            </div>
          </div>
        </div>
      </Worker>
      <DeletePdf
        isShown={openModal === 'delete'}
        setIsShown={() => setOpenModal(false)}
      />

      <ViewPdf isShown={showFullPDF} setIsShown={() => setShowFullPDF(false)}>
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
      </ViewPdf>
    </>
  );
};

export default PDFPreview;
