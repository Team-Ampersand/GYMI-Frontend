import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const CommonTemplate = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: { color?: string }) =>
    props.color ? props.color : Palette.BACKGROUND_BG};
`;
