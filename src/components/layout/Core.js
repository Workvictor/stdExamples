import styled, { css } from 'styled-components';

export const itemHoverCSS = css`
  background-color: transparent;
  cursor: pointer;
  &:hover{
    background-color: ${p => p.theme.COLOR.itemHover};
  }
`;
export const Text = styled.div`
  font-size: ${props => props.size || 'inherit'};
  color: ${props => props.color || (props.themeColor && props.theme.color[props.themeColor]) || 'inherit'};
  text-align: ${props => props.align || 'left'};
  padding: ${props => props.padding || undefined};
`;

export const NoWrap = styled(Text)`
  white-space: nowrap;
`;

export const TrimContent = styled(NoWrap)`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`;

export const alignItems = align => css`
  align-items: ${align};
`;

export const Flex = styled.div`
  display: flex;
`;

export const FlexCenter = styled(Flex)`
  align-items: center
`;

export const Example = styled.div`
  padding: 8px;
  margin: 12px 0;
  color: ${props => props.theme.color.blend};
  border: 1px solid ${props => props.theme.color.check}
`;
