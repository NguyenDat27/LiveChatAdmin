import React from "react";
import { useState, useCallback } from "react";

import styled from "styled-components";

import {
  TextField,
  Text,
  Icon,
  Divider,
  Tag,
  InlineStack,
  Tooltip,
  Popover,
  ActionList,
  Button,
} from "@shopify/polaris";
import {
  DeleteIcon,
  InfoIcon,
  PinIcon,
  PinFilledIcon,
  MenuVerticalIcon,
  ReplayIcon,
  XIcon,
  SmileyHappyIcon,
  AttachmentIcon,
  SendIcon,
} from "@shopify/polaris-icons";

export default function ContainerHP() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );
  const activator = (
    <div onClick={togglePopoverActive}>
      <Tooltip content="Xem thêm">
        <Icon source={MenuVerticalIcon} tone="base" />
      </Tooltip>
    </div>
  );
  return (
    <>
      <WrapperHomePage>
        <div className="flex flex-col w-[25%] px-3">
          <div className="flex items-center gap-2">
            <Text variant="headingXl" as="h4">
              Messages
            </Text>
            <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full flex-shrink-0 bg-[#D76E00] text-white text-xs">
              1
            </div>
          </div>
          <div className="mt-2 mb-3">
            <TextField placeholder="Tìm kiếm" label="" type="text" />
          </div>
          <ItemsChat>
            <div className="avatar_chat">
              <img
                src="https://plus.unsplash.com/premium_photo-1664457233849-b79bf17537f5?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="chat_activity chat_activity_active"></div>
            </div>
            <div className="flex flex-col gap-1">
              <Text variant="headingXs" as="h4">
                Pickleball
              </Text>
              <Text variant="bodySm" as="p">
                Pickleball is a racket or paddle sport in which two players
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-end justify-between">
              <Text variant="bodySm" as="span">
                08:16
              </Text>
              <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full flex-shrink-0 bg-[#D76E00] text-white text-xs">
                2
              </div>
            </div>
          </ItemsChat>
        </div>
        <div className="w-[1px] h-[calc(100vh-56px)] bg-[#E1E1E1]"></div>
        <div className="flex flex-col w-full flex-1 relative">
          <div className="px-4 py-3 flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664457233849-b79bf17537f5?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-ful h-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Text variant="headingXs" as="h6">
                  Pickleball
                </Text>
                <div className="flex items-center gap-[2px]">
                  <div className="w-2 h-2 rounded-full bg-[#23A330]"></div>
                  <Text variant="bodyXs" tone="success" as="span">
                    Online
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Icon source={PinIcon} tone="base" />
            </div>
          </div>
          <Divider borderColor="border" />
          <div className="p-3 flex flex-col gap-3">
            <div className="flex items-center justify-center w-full">
              <div className="bg-[#E1E1E1] px-1 rounded">
                <Text variant="headingXs" as="h6">
                  Today
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src="https://plus.unsplash.com/premium_photo-1664457233849-b79bf17537f5?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-end justify-between gap-1 px-3 py-2 max-w-[40%] border border-[#F1F1F2] rounded-lg bg-[#DDE3F0]">
                <Text variant="bodyXs" as="p">
                  Hello, wish you a good day with lots of joy and health.
                  Pickleball is a racket or paddle sport in which two players
                </Text>
                <Text variant="bodyXs" as="span">
                  16:30
                </Text>
              </div>
              <div className="cursor-pointer ml-[-4px]">
                <div variant="tertiary">
                  <Tooltip persistOnClick content="Trả lời">
                    <Icon source={ReplayIcon} tone="base" />
                  </Tooltip>
                </div>
              </div>
              <div className="cursor-pointer ml-[-4px]">
                <Popover
                  active={popoverActive}
                  activator={activator}
                  onClose={togglePopoverActive}
                >
                  <ActionList
                    actionRole="menuitem"
                    items={[{ content: "Sửa" }, { content: "Thu hồi" }]}
                  />
                </Popover>
              </div>
            </div>
            <div className="flex justify-end items-center w-full">
              <div className=" flex flex-col items-end justify-between gap-1 border border-[#F1F1F2] rounded-lg  px-3 py-2 max-w-[40%] bg-[#ECD9B8]">
                <Text variant="bodyXs" as="p">
                  Hello, wish you a good day with lots of joy and health.
                </Text>
                <Text variant="bodyXs" as="span">
                  16:30
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col p-3 absolute bottom-0 left-0 w-full">
            <div className="flex items-center justify-between w-full px-3 py-2 rounded-tr-xl rounded-tl-xl border border-[#E1E1E1]">
              <div className="flex items-center gap-2">
                <Icon source={ReplayIcon} />
                <div className="flex flex-col">
                  <Text as="h3" variant="headingSm">
                    Reply
                  </Text>
                  <Text as="h5" variant="bodyXs">
                    This is the message to reply
                  </Text>
                </div>
              </div>
              <div className="cursor-pointer">
                <Icon source={XIcon} tone="base" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 px-3 gap-2 rounded-bl-md rounded-br-md bg-[#DBEBF4] w-full">
              <Button icon={SmileyHappyIcon} />
              <InputChat
                className="input"
                placeholder="Enter message"
                type="text"
              />
              <Button icon={AttachmentIcon} variant="tertiary" />
              <Button icon={SendIcon}>Send</Button>
            </div>
          </div>
        </div>
        <div className="w-[1px] h-[calc(100vh-56px)] bg-[#E1E1E1]"></div>
        <ProfileItem>
          <div className="ProfileItem_head">
            <div className="ProfileItem_avatar">
              <img
                src="https://plus.unsplash.com/premium_photo-1664457233849-b79bf17537f5?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <Text variant="heading2xl" as="h3">
              Pickleball
            </Text>
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                <Icon source={DeleteIcon} tone="base" />
                <Text variant="bodyXs" as="span">
                  Delete
                </Text>
              </div>
              <div className="flex flex-col gap-1">
                <Icon source={InfoIcon} tone="base" />
                <Text variant="bodyXs" as="span">
                  Complain
                </Text>
              </div>
            </div>
          </div>
          <Divider borderColor="border" />
          <div className="flex flex-col gap-5 px-3 py-2">
            <Text variant="headingMd" as="h5">
              Skills
            </Text>
            <InlineStack gap="400" wrap={true}>
              <Tag>ab testing</Tag>
              <Tag>animation</Tag>
              <Tag>UI</Tag>
              <Tag>UX</Tag>
              <Tag>Web design</Tag>
              <Tag>analytics</Tag>
              <Tag>Illustration</Tag>
            </InlineStack>
          </div>
        </ProfileItem>
      </WrapperHomePage>
    </>
  );
}
const WrapperHomePage = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const ItemsChat = styled.section`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 10px;
  margin: 10px 0;
  position: relative;
  transition: all 150ms ease;
  background: rgba(224, 224, 224, 0.5);
  cursor: pointer;
  &:hover {
    border-color: #f0e2cb;
    background: #f8f2ec;
  }
  &:last-child {
    &::before {
      background: transparent;
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background: #cfcfcf;
    display: block;
  }
  .avatar_chat {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    position: relative;
    border: 1px solid transparent;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .chat_activity {
      position: absolute;
      top: 0px;
      right: 1px;
      border: 1px solid rgba(224, 224, 224, 1);
      background: #b4b3b3;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .chat_activity_active {
      background: #8ee648;
    }
  }
`;
const ProfileItem = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  .ProfileItem_head {
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  .ProfileItem_avatar {
    width: 72px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid gray;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const InputChat = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  flex: 1 0 0;
`;
