import createStore from 'teaful';

export const { useStore: useAdminGlobalStore } = createStore({
  user: {
    name: 'koh',
    email: 'koh@example.com',
    detail: 'koh description',
  },
  isEdit: false,
  isLoading: false,
  isShowMenuMobile: false,
  toast: {
    isShow: false,
    content: 'Hello',
  },
  route: 'dashboard',
});