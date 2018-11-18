import styled from 'styled-components';
import React from 'react';
import { Flex } from '../layout/Core';

const chatsOffsetTop = 46;

const Wrapper = styled(Flex).attrs({
  style: props => ({
    height: `${props.innerHeight - props.theme.headerOffset}px`,
  }),
})`
  overflow: hidden;
  position: relative;
`;

const InnerWrapper = styled(Flex)`
  margin: 0 auto;
  width: ${props => props.theme.width.main}px;
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 8px;
  margin-top: ${chatsOffsetTop}px;
`;

export const SideBar = styled(ContentWrapper)`
  width: 390px;
  &:after{
    content: '';
    display: block;
    position: absolute;
    right: -1px;
    width: 1px;
    background-color: ${props => props.theme.color.placeholder};
    height: calc(100% + ${chatsOffsetTop}px);
    top: -${chatsOffsetTop}px;
  }
`;

export const Body = styled(ContentWrapper)`
  flex-grow: 1;
  overflow: hidden;
`;

export const ChatsLayout = (props) => {
  const { children } = props;
  return (
    <Wrapper
      className={`animated fadeIn`}
      innerHeight={window.innerHeight}
    >
      <InnerWrapper>
        {children}
      </InnerWrapper>
    </Wrapper>
  );
};

ChatsLayout.SideBar = SideBar;

ChatsLayout.Body = Body;
