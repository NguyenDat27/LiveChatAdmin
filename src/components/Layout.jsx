import {
  ContextualSaveBar,
  Frame,
  Loading,
  Toast,
} from "@shopify/polaris"
import { useCallback } from "react"
import {logo} from "./Logo.jsx";
import Navigator from "./Navigator.jsx";
import TopBarComponent from "./Search.jsx";
import { useAdminGlobalStore } from "@/stores/admin.js";
import { Outlet } from "react-router-dom";

export default function Layout() {

  const [adminGlobalStore] = useAdminGlobalStore();

  const handleDiscard = useCallback(() => {
    adminGlobalStore.isEdit = false;
  }, [])
  const handleSave = useCallback(() => {
    adminGlobalStore.isEdit = false;
  }, [])

  const toggleToastActive = useCallback(
    () => {
      adminGlobalStore.toast.isShow = false;
      adminGlobalStore.toast.content = "";
    },
    []
  )

  return (
    <div style={{ height: "500px" }}>
      <Frame
        logo={logo}
        topBar={<TopBarComponent />}
        navigation={<Navigator />}
        showMobileNavigation={adminGlobalStore.isShowMenuMobile}
        onNavigationDismiss={() => adminGlobalStore.isShowMenuMobile = false}
      >
        {adminGlobalStore.isEdit ? (
          <ContextualSaveBar
            message="Unsaved changes"
            saveAction={{
              onAction: handleSave
            }}
            discardAction={{
              onAction: handleDiscard
            }}
          />
        ) : null}
        {adminGlobalStore.isLoading ? <Loading /> : null}
        {adminGlobalStore.toast.isShow ? (
          <Toast onDismiss={toggleToastActive} content={adminGlobalStore.toast.content} />
        ) : null}

        {/*Component inside admin*/}
        {adminGlobalStore.route === 'dashboard' ? <Outlet /> : null}
      </Frame>
    </div>
  )
}