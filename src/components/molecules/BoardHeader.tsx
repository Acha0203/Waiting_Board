import React, { FC, memo } from 'react';
import Welcome from '../atoms/heading/Welcome';

const BoardHeader: FC = memo(() => (
  <div className="bg-gradient flex justify-center items-top">
    <Welcome />
  </div>
));

export default BoardHeader;
