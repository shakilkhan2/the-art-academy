import React from 'react';

import { Helmet } from 'react-helmet-async';
import PopularClasses from '../home/popularClasses/PopularClasses';

const Classes = () => {
  return (
    <div>
       <Helmet>
            <title>Courses | The Art Academy</title>
          </Helmet>
      <PopularClasses/>
    </div>
  );
};

export default Classes;