/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import Welcome from '../atoms/heading/Welcome';
import decoration from '../../assets/images/background-723052.jpg';

const SDecoration = styled.div`
  width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: linear-gradient(to bottom, #fff0 0%, #fff8 15%, #ffff 30%), url(${decoration});

  ${({ theme }) => theme.media.base`
    font-size: ${theme.font.size.xl3};
  `};
  ${({ theme }) => theme.media.sm`
    background-size: ${theme.background.size.sm};
    font-size: ${theme.font.size.xl5};
  `};
  ${({ theme }) => theme.media.md`
    background-size: ${theme.background.size.md};
    font-size: ${theme.font.size.xl6};
  `};
  ${({ theme }) => theme.media.lg`
    background-size: ${theme.background.size.lg};
    font-size: ${theme.font.size.xl6};
  `};
  ${({ theme }) => theme.media.xl`
    background-size: ${theme.background.size.xl};
    font-size: ${theme.font.size.xl7};
  `};
  ${({ theme }) => theme.media.xl2`
    background-size: ${theme.background.size.xl2};
    font-size: ${theme.font.size.xl7};
  `};
  ${({ theme }) => theme.media.xl3`
    background-size: ${theme.background.size.xl3};
    font-size: ${theme.font.size.xl8};
  `};
  ${({ theme }) => theme.media.xl4`
    background-size: ${theme.background.size.xl4};
    font-size: ${theme.font.size.xl8};
  `};
`;

const BoardHeader: FC = memo(() => (
  <SDecoration>
    <Welcome />
  </SDecoration>
));

export default BoardHeader;
