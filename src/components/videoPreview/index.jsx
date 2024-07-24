import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';
import DeleteVideo from './deleteVideo';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPreview = ({ videoUrl }) => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const getEmbedUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const isYouTubeVideo = (url) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
  };

  return (
    <div>
      {videoUrl &&
        (isYouTubeVideo(videoUrl) ? (
          <iframe
            width="320"
            height="240"
            src={getEmbedUrl(videoUrl)}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <ReactPlayer
            url={videoUrl}
            controls={true}
            width="320px"
            height="240px"
            onError={handleVideoError}
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload',
                },
              },
            }}
          />
        ))}
      <div className="pdfPreviewer__actions">
        <p>Introduction to Calculus</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            cursor: 'pointer',
          }}
        >
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <IoOpenOutline className="pdfPreviewer__actions__view" />
          </a>
          <MdOutlineDelete
            className="pdfPreviewer__actions__delete"
            onClick={() => handleOpenModal('delete')}
          />
        </div>
      </div>
      <DeleteVideo
        isShown={openModal === 'delete'}
        setIsShown={() => setOpenModal(false)}
      />
    </div>
  );
};

export default VideoPreview;
