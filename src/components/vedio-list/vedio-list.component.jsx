import React, { Component } from 'react';
import VedioListItem from '../vedio-list-item/vedio-list-item.component';

import  './vedio-list.style.scss';

const VedioList = ({vedios}) => {
  
  return (
  <ul className="col-md-4 list-group">
      {
        vedios.map(vedio=> <VedioListItem key={vedio.etag} vedio={vedio} />)
      }
  </ul>
)};
export default VedioList