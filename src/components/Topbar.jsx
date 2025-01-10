import { useAdminGlobalStore } from '@/stores/admin';
import { ActionList, TopBar } from '@shopify/polaris';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopBarComponent({ onNavigationToggle }) {
  const [adminGlobalStore] = useAdminGlobalStore();
  const [activeMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: 'Shopify help center' },
        { content: 'Community forums' },
      ]}
    />
  );

  const handleLogout = () => {
    navigate('/login');
  }

  const handleActiveMenu = () => {
    setActiveMenu(prev => !prev);
  }

  const userMenuActions = [
    {
      items: [
        { content: 'Tài khoản của bạn' },
        { content: 'Đăng xuất', onAction: () => handleLogout() }
      ],
    },
  ];

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name={adminGlobalStore.user.name}
      detail={adminGlobalStore.user.detail}
      initials={Array.from(adminGlobalStore.user.name)[0]}
      open={activeMenu}
      onToggle={() => handleActiveMenu()}
    />
  );

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={onNavigationToggle}
    />
  );
}

export default TopBarComponent;