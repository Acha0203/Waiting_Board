import React, { FC, memo } from 'react';

const BoardHeader: FC = memo(() => (
  <div className="bg-gradient flex justify-center items-top">
    <h1 className="new-tegomin t-shadow text-3xl sm:text-5xl text-teal-600 pt-5">いらっしゃいませ</h1>
  </div>
));

export default BoardHeader;
