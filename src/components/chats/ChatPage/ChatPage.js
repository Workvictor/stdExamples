import React from 'react';
import { ChatsLayout, Body, SideBar } from '../ChatsLayout';

export const ChatPage = () => {
  return (
    <ChatsLayout>
      <SideBar>
        Sidebar
      </SideBar>
      <Body>
        Body
        <div>windowHeight is: <b>{window.innerHeight}px</b></div>
      </Body>
    </ChatsLayout>
  )
}