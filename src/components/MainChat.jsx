import React, { useState, useEffect, useRef } from 'react';
import { Divider, Icon, Text } from '@shopify/polaris'
import Message from '@/components/display/Message';
import HeaderMainChat from '@/components/display/HeaderMainChat';
import InputMainChat from '@/components/display/InputMainChat';
import EditMainChat from '@/components/display/EditMainChat';
import styled from 'styled-components';
import { ArrowLeftIcon } from '@shopify/polaris-icons';

export default function ChatMain({ onMainChatClick, onMainChatClickBack }) {

  const [replyMessage, setReplyMessage] = useState("");
  const [replyFlag, setReplyFlag] = useState(null);

  const [editMessage, setEditMessage] = useState("");
  const [editFlag, setEditFlag] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const chatDialog = useRef(null);

  const handleReply = (message, flag) => {
    setReplyMessage(message);
    setReplyFlag(flag);
  }

  const handleEdit = (message, flag) => {
    setEditMessage(message);
    setEditFlag(flag);
    setIsEditing(true);
  }

  const handleCancelEdit = () => {
    setIsEditing(false);
  }

  const scrollToBottom = () => {
    if (chatDialog.current) {
      chatDialog.current.scrollTop = chatDialog.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <MainChatContainer className="main-chat flex flex-col w-full flex-1 relative max-h-screen">
      <div className="flex flex-row items-center w-full">
        <div className="back-icon-mainchat" onClick={onMainChatClickBack} >
          <Icon source={ArrowLeftIcon}/>
        </div>
        <div className="px-4 py-3 flex items-center justify-between w-full" onClick={onMainChatClick}>
          <HeaderMainChat />
        </div>
      </div>
      <Divider borderColor="border" />
      <div ref={chatDialog} className="p-3 flex flex-col gap-3 overflow-y-auto absolute top-20 bottom-20 w-full">
        <div className="flex items-center justify-center w-full">
          <div className="bg-[#E1E1E1] px-1 rounded">
            <Text variant="headingXs" as="h6">
              Today
            </Text>
          </div>
        </div>
          <Message onReply={handleReply} onEdit={handleEdit}/>
      </div>
        <div className="flex items-center flex-col p-3 absolute bottom-0 left-0 w-full">
          {isEditing ? (
            <EditMainChat message={editMessage} flag={editFlag} onCancelEdit={handleCancelEdit}/>
          ) : (
            <InputMainChat message={replyMessage} flag={replyFlag} onSubmit={scrollToBottom}/>
          )}
        </div>
    </MainChatContainer>
  )
}

const MainChatContainer = styled.div`
  // flex-direction: column;
  // width: 100%;
  // height: 100%;
  // position: relative;
  // max-height: 100vh;
  .back-icon-mainchat {
    display: none;
    cursor: pointer;
    margin-left: 10px;
  }
  @media (max-width: 1000px) {
    .back-icon-mainchat {
      display: block;
    }
  }
`;
