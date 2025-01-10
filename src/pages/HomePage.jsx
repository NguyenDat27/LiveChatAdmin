import styled from "styled-components";
import { useState } from "react";
import {
  TextField,
  Text,
} from "@shopify/polaris";
import ItemsChat from "@/components/ItemsChat";
import MainChat from "@/components/MainChat";
import SecondarySideBar from "@/components/SecondarySideBar";
import { useUser } from "@/stores/user";

export default function ContainerHP() {

  const [isMainChatVisible, setIsMainChatVisible] = useState(false);
  const [isSidebar2Visible, setIsSidebar2Visible] = useState(false);
  const [_, setUserSelected] = useUser.userSelected();

  const handleChatItemClick = (profile) => {
    setIsMainChatVisible(true);
    setUserSelected(profile);
  };

  const handleMainChatClick = () => {
    setIsSidebar2Visible(true);
  }

  const handleSidebar2ClickBack = () => {
    setIsMainChatVisible(true);
    setIsSidebar2Visible(false);
  }

  const handleMainChatClickBack = () => {
    setIsMainChatVisible(false);
  }


  return (
    <>
      <WrapperHomePage $isVisibleMain={isMainChatVisible} $isVisibleSidebar={isSidebar2Visible}>
        <div className="sidebar1 flex flex-col w-[25%] px-3">
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
            <div className="item-chat">
              <ItemsChat onChatItemClick={handleChatItemClick}/>
            </div>
        </div>
        <div className="w-[1px] h-[calc(100vh-56px)] bg-[#E1E1E1]"></div>

        <MainChat onMainChatClick={handleMainChatClick} onMainChatClickBack={handleMainChatClickBack}/>
        
        <div className="w-[1px] h-[calc(100vh-56px)] bg-[#E1E1E1]"></div>
        <SecondarySideBar onSidebar2Click={handleSidebar2ClickBack}/>
      </WrapperHomePage>
    </>
  );
}
const WrapperHomePage = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .item-chat {
    height: calc(100vh - 150px);
    overflow-y: auto;
  }
  @media (max-width: 1000px) {
    .main-chat {
      display: ${({ $isVisibleMain, $isVisibleSidebar }) => ($isVisibleMain && !$isVisibleSidebar ? '' : 'none')};
    }
    .sidebar2 {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 10px 20px;
      display: ${({ $isVisibleSidebar }) => ($isVisibleSidebar ? '' : 'none')};
    }
    .sidebar1 {
      position: absolute;
      padding: 10px 20px;
      width: 100%;
      height: 100%;
      display: ${({ $isVisibleMain }) => ($isVisibleMain ? 'none' : '')};
      .item-chat {
        height: 100%;
      }
    }
  }
`;


