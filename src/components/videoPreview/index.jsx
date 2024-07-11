import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import DeleteVideo from "./deleteVideo";
import { useState } from "react";

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

  return (
    <div>
      {videoUrl && (
        <iframe
          width="320"
          height="240"
          src={getEmbedUrl(videoUrl)}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
      <div className="pdfPreviewer__actions">
      <p>Introduction to Calculus</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer'}}>
          <a href={videoUrl} target="_blank" ><IoOpenOutline className='pdfPreviewer__actions__view'/></a>
                    <MdOutlineDelete className='pdfPreviewer__actions__delete' onClick={() => handleOpenModal('delete')} />
                </div>
      </div>
      <DeleteVideo isShown={openModal === 'delete'} setIsShown={() => setOpenModal(false)} />
    </div>
  );
};

export default VideoPreview;