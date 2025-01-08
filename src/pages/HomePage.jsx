import styled from "styled-components";

import {
  TextField,
  Text,
} from "@shopify/polaris";
import ItemsChat from "@/components/ItemsChat";
import MainChat from "@/components/MainChat";
import SecondarySideBar from "@/components/SecondarySideBar";

export default function ContainerHP() {
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
          <ItemsChat />
        </div>
        <div className="w-[1px] h-[calc(100vh-56px)] bg-[#E1E1E1]"></div>

        <MainChat />
        
        <div className="w-[1px] h-[calc(100vh-56px)] bg-[#E1E1E1]"></div>
        <SecondarySideBar />
      </WrapperHomePage>
    </>
  );
}
const WrapperHomePage = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


