import { Text } from "@shopify/polaris";
import styled from "styled-components";

export default function ItemsChat() {
  return (
    <ItemsChatStyle>
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
    </ItemsChatStyle>
  );
}

const ItemsChatStyle = styled.section`
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
