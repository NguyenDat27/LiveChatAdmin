import { Navigation } from "@shopify/polaris";
import { ChatIcon, HomeIcon, SettingsIcon } from "@shopify/polaris-icons";
import { useState } from "react";
import styled from "styled-components";

function Navigator() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <Navigation location="/">
      <Navigation.Section
        separator
        items={[
          {
            label: "Thống kê",
            icon: HomeIcon,
            onClick: () => {
              console.log('Thống kê');
            }
          },
          {
            label: "Chat",
            badge: '15',
            icon: ChatIcon,
            url: '/',
            onClick: handleChatClick,
            subNavigationItems: isChatOpen
              ? [
                  {
                    url: '#',
                    onClick: () => {console.log('Hộp thư đến')},
                    disabled: false,
                    label: 'Hộp thư đến',
                  },
                  {
                    url: '#',
                    onClick: () => {console.log('Khách hàng cũ')},
                    disabled: false,
                    label: 'Khách hàng cũ',
                  },
                  {
                    url: '#',
                    onClick: () => {console.log('Khách hàng mới')},
                    disabled: false,
                    label: 'Khách hàng mới',
                  },
                ]
              : [],
          },
        ]}
      />
      <StickyMenuBar>
        <Navigation.Item label="Cài đặt" icon={SettingsIcon} />
      </StickyMenuBar>
    </Navigation>
  );
}

const StickyMenuBar = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 10px;
  padding-top: var(--p-space-200);
  transition: box-shadow var(--p-motion-duration-350) var(--p-motion-ease), border-top var(--p-motion-duration-350) var(--p-motion-ease);
  background: var(--p-color-bg-surface-secondary-active);
`;

export default Navigator;