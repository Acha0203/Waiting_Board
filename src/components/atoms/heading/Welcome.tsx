import React, { FC, memo } from 'react';
import styled from 'styled-components';

const SWelcome = styled.h1`
  font-family: 'New Tegomin', serif;
  text-shadow: 0 0 10px #fff;
  padding-top: 20px;
  color: #008080;
`;

const Welcome: FC = memo(() => <SWelcome>いらっしゃいませ</SWelcome>);

export default Welcome;
