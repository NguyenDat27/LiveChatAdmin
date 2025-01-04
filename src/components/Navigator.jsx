import { useAdminGlobalStore } from "@/stores/admin";
import {Navigation} from "@shopify/polaris";
import {
  ChatIcon,
  HomeIcon,
  SettingsIcon,
} from "@shopify/polaris-icons";
import styled from "styled-components";

function Navigator() {
  const [adminGlobalStore] = useAdminGlobalStore();
  return (
    <Navigation location="/">
      <Navigation.Section
        separator
        items={[
          {
            label: "Thống kê",
            icon: HomeIcon,
            onClick: () => {
              adminGlobalStore.route.value = 'dashboard';
            }
          },
          {
            label: "Chat",
            badge: '15',
            icon: ChatIcon,
            onClick: () => {
              adminGlobalStore.route.value = 'order';
            },
            url: "#",
            subNavigationItems: [
              {
                url: '#',
                disabled: false,
                label: 'Hộp thư đến',
              },
              {
                url: '#',
                disabled: false,
                label: 'Khách hàng cũ',
              },
              {
                url: '#',
                disabled: false,
                label: 'Khách hàng mới',
              },
            ],
          },
        ]}
      />

      <StickyMenuBar>
        <Navigation.Item label="Cài đặt" icon={SettingsIcon} />
      </StickyMenuBar>
    </Navigation>
  )
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