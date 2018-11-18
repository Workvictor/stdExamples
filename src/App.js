import React from 'react';
import styled from 'styled-components';
import { Flex } from './components/layout/Flex';
import { StyledFlex } from './components/layout/StyledFlex';
import { FlexCenter, Text, Example } from './components/layout/Core';
import { ChatsLayout, SideBar, Body } from './components/chats/ChatsLayout';

const Wrapper = styled.div`
  background: ${props => props.theme.color.main};
  padding: 16px;
`;

export class App extends React.Component {
  render() {
    return (
      <Wrapper>

        <Flex>
          this is common Flex components
        </Flex>

        <Example>
          --- ExampleWithProps ---
          <StyledFlex
            alignItems={StyledFlex.types.alignItems.center}
          >
            <Flex alignItems={Flex.types.alignItems.center}>[Flex 1]</Flex>
            --|--
            <Flex alignItems={'center'}>[Flex 2]</Flex>
          </StyledFlex>
        </Example>        

        <Example>
          --- ExampleTextProps ---
          <Text color={'#ffa'}>
            Проблема такого подхода - props показываются прямо в DOM дереве. Иногда они не валидные.
          </Text>
          <Text as="i" themeColor={'accent'}>
            Лучше, но долго писать props.
            <p>Можно создать отдельный компонент TextAccent для вывода такого текста.</p>
          </Text>
        </Example>               

        <Example>
          --- ExamplePreProps ---
          <FlexCenter>
            <div>
              [view component col 1]
              <div>
                [center view component row 2]
              </div>
            </div>
            --|--
            <div>[view component col 2]</div>
          </FlexCenter>
        </Example>

        <Example>
          --- ChatPage Пример для выноса в отдельный элемент ---
          <ChatsLayout>
            <SideBar>
              Sidebar
            </SideBar>
            <Body>
              Body
              <div>windowHeight is: <b>{window.innerHeight}px</b></div>
            </Body>
          </ChatsLayout>
        </Example>

      </Wrapper>      
    );
  }
}
