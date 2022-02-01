import React from 'react';

const VedioDetail = ({vedio}) => {
  if (!vedio) {
    return <div>loading</div>
  }
  console.log(vedio);
  const { snippet:{title, description}, id: {videoId} } = vedio;
  const url = `https://www.youtube.com/embed/${videoId}`;
 return (
  <div className='vedio-detail col-md-8 pt-3'>
      <div className="embed-responsive">
        <iframe className='embed-responsive-item w-100' height="500px"  src={url}></iframe>
      </div>
      <div className="details">
        <div className="text-uppercase">{title}</div>
        <div className="">{description}</div>
      </div>
  </div>
 );
}

export default VedioDetail;