import React, { Component } from 'react';
import VedioListItem from '../vedio-list-item/vedio-list-item.component';

import  './vedio-list.style.scss';

const VedioList = ({vedios, selectedVedio}) => {
  
  return (
  <ul className="col-md-4 list-group">
      {
        vedios.map(vedio=> <VedioListItem key={vedio.etag} vedio={vedio} selectedVedio={selectedVedio} />)
      }
  </ul>
)};
export default VedioList