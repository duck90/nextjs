import { atom } from 'recoil';

interface NavStoreTypes {
  isNavCollapsed: boolean;
}

const navStore = atom<NavStoreTypes>({
  key: 'navCollapsed',
  default: {
    isNavCollapsed: false,
  },
});

export { navStore };