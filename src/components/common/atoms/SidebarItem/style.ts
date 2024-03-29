import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

interface LayerType {
  checked: boolean;
  colorArea: string;
  show: boolean;
}

export const IconBox = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  top: -2px;
`;

export const NameBox = styled.div`
  font-size: 18px;
  color: ${Palette.NEUTRAL_N3};
`;

export const Layer = styled.div<LayerType>`
  width: 100%;
  height: 45px;
  display: ${(props: LayerType) => (props.show ? 'flex' : 'none')};
  gap: 30px;
  position: relative;
  cursor: pointer;

  :hover > div {
    background: #f2f2f4;
  }

  ${({ checked, colorArea }) => {
    if (checked)
      return css`
        ${NameBox} {
          color: ${Palette.PRIMARY_P2};
        }

        path {
          ${`${colorArea} : ${Palette.PRIMARY_P2}`}
        }

        ::after {
          content: '';
          width: 8px;
          height: 45px;
          background-color: ${Palette.PRIMARY_P2};
          border-radius: 8px 0 0 8px;
          position: absolute;
          right: 0;
        }
      `;
  }}
`;

export const ContentBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 10%;
  padding: 0 20px;
  border-radius: 16px;
`;
