import React, { FC, memo } from 'react';

const BoardHeader: FC = memo(() => (
  <div className="bg-gradient flex justify-center items-top mt-5">
    <h1 className="new-tegomin t-shadow text-3xl sm:text-5xl text-sky-600">いらっしゃいませ</h1>
  </div>
));

export default BoardHeader;
