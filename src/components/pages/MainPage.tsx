import React, { FC, memo, useEffect } from 'react';
import Layout from '../templates/Layout';

const MainPage: FC = memo(() => {
  useEffect(() => {
    document.title = 'Waiting Board';
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
});

export default MainPage;
