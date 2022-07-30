import React from 'react';
import { useParams } from 'react-router';

export const UserDetail = () => {
  var parms = useParams();
  console.log(parms.id)
  return <div>
    

  </div>;
};
