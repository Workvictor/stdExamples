import React from 'react';
import { Flex } from '../layout/Flex';
import { StyledFlex } from '../layout/StyledFlex';
import { Example } from '../layout/Core';

export const ExampleWithProps = () => {
  return (
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
  );
}
