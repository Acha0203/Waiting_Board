import React, { FC, memo } from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;

const BoardBody: FC = memo(() => (
  <SWrapper>
    <button type="button">temp</button>
  </SWrapper>
));

export default BoardBody;
