import { useAdminGlobalStore } from '@/stores/admin';
import { ActionList, TopBar } from '@shopify/polaris';

function TopBarComponent({ showNavigationToggle, onNavigationToggle }) {
  const [adminGlobalStore] = useAdminGlobalStore();
  const localSearchStore = '';

  const userMenuActions = [
    {
      items: [{ content: 'Community forums' }],
    },
  ];

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: 'Shopify help center' },
        { content: 'Community forums' },
      ]}
    />
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name={adminGlobalStore.user.name}
      detail={adminGlobalStore.user.detail}
      initials={Array.from(adminGlobalStore.user.name)[0]}
      open={adminGlobalStore.isShowMenuMobile}
      onToggle={() => (adminGlobalStore.isShowMenuMobile = !adminGlobalStore.isShowMenuMobile)}
    />
  );

  return (
    <TopBar
      showNavigationToggle={showNavigationToggle}
      userMenu={userMenuMarkup}
      searchResultsVisible={localSearchStore.search.length > 0}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={() => (localSearchStore.search = '')}
      onNavigationToggle={onNavigationToggle}
    />
  );
}

export default TopBarComponent;