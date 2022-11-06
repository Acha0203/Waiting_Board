import React, { FC, memo } from 'react';
import BoardHeader from '../atoms/BoardHeader';
import BoardBody from '../molecules/BoardBody';

const Board: FC = memo(() => (
  <div className="flex flex-col justify-center items-center">
    <BoardHeader />
    <BoardBody />
  </div>
));

export default Board;
