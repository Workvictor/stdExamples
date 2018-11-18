import React from 'react';
import { Example, Text } from '../layout/Core';

export const ExampleTextProps = () => {
  return (
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
  );
}
