import React, { FC, memo, useEffect } from 'react';
import Board from '../organisms/Board';

const Layout: FC = memo(() => {
  useEffect(() => {
    document.title = 'Waiting Board';
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Board />
    </div>
  );
});

export default Layout;
