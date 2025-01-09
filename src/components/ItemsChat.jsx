import { Text } from "@shopify/polaris";
import styled from "styled-components";
import profiles from "@/data/profile";
import { truncated } from "@/utils/text";
export default function ItemsChat({ onChatItemClick }) {

  return (
    <div className="flex flex-col item-chat">
    {Object.entries(profiles).map(([key, profile]) => (
    <div key={key} className="profile-item" onClick={onChatItemClick}>
      <ItemsChatStyle>
        <div className="flex flex-grow gap-2">
          <div className="avatar_chat">
            <img
              src={profile.srcImage}
              alt=""
            />
            <div className="chat_activity chat_activity_active"></div>
          </div>
          <div className="flex flex-col gap-1">
            <Text variant="headingXs" as="h4">
              {profile.name}
            </Text>
            <Text variant="bodySm" as="p">
              {truncated(profile.response, 40)}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end justify-between">
          <Text variant="bodySm" as="span">
            {profile.time}
          </Text>
          <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full flex-shrink-0 bg-[#D76E00] text-white text-xs">
            {profile.number}
          </div>
        </div>
      </ItemsChatStyle>
      </div>
    ))}  
    </div>
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
  margin: 5px 0;
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
