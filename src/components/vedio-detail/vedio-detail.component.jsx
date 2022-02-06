import React from 'react';

import './vedio-detail.style.scss';

const VedioDetail = ({vedio}) => {
  if (!vedio) {
    return <div>loading</div>
  }
  const { snippet:{title, description}, id: {videoId} } = vedio;
  const url = `https://www.youtube.com/embed/${videoId}`;
 return (
  <div className='vedio-detail col-md-8 pt-3'>
      <div className="embed-responsive">
        <iframe className='embed-responsive-item w-100' height="500px"  src={url}></iframe>
      </div>
      <div className="details">
        <div className="text-uppercase">{title.slice(0, 80)}...</div>
        <div className="description">{description}</div>
      </div>
  </div>
 );
}

export default VedioDetail;