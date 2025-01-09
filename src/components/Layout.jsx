import {
  ContextualSaveBar,
  Frame,
  Loading,
  Toast,
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { logo } from './Logo.jsx';
import Navigator from './Navigator.jsx';
import TopBarComponent from './Search.jsx';
import { useAdminGlobalStore } from '@/stores/admin.js';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [adminGlobalStore] = useAdminGlobalStore();
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const handleDiscard = useCallback(() => {
    adminGlobalStore.isEdit = false;
  }, [adminGlobalStore]);

  const handleSave = useCallback(() => {
    adminGlobalStore.isEdit = false;
  }, [adminGlobalStore]);

  const toggleToastActive = useCallback(() => {
    adminGlobalStore.toast.isShow = false;
    adminGlobalStore.toast.content = '';
  }, [adminGlobalStore]);

  const toggleMobileNavigationActive = useCallback(() => {
    setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive);
  }, []);

  return (
    <Frame
      logo={logo}
      topBar={
        <TopBarComponent
          showNavigationToggle
          onNavigationToggle={toggleMobileNavigationActive}
        />
      }
      navigation={<Navigator />}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      {adminGlobalStore.isEdit ? (
        <ContextualSaveBar
          message="Unsaved changes"
          saveAction={{
            onAction: handleSave,
          }}
          discardAction={{
            onAction: handleDiscard,
          }}
        />
      ) : null}
      {adminGlobalStore.isLoading ? <Loading /> : null}
      {adminGlobalStore.toast.isShow ? (
        <Toast onDismiss={toggleToastActive} content={adminGlobalStore.toast.content} />
      ) : null}
      <Outlet />
    </Frame>
  );
}