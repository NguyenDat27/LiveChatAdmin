import { ActionList, Button, Divider, Icon, Popover, Text, Tooltip } from '@shopify/polaris'
import {
    PinIcon,
    MenuVerticalIcon,
    ReplayIcon,
    XIcon,
    SmileyHappyIcon,
    AttachmentIcon,
    SendIcon,
  } from "@shopify/polaris-icons";
import { useCallback, useState } from 'react';
import styled from 'styled-components';

export default function ChatMain() {
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
                <div>
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
  )
}


const InputChat = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  flex: 1 0 0;
`;
