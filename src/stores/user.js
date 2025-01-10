import createStore from 'teaful';

export const { useStore: useUser } = createStore({
  userSelected: []
});