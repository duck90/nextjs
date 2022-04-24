import { atom } from 'recoil';

interface userStoreTypes {
  id: number;
  userId: string | null;
  nickname: string | null;
  avator: string| null;
}

const userStore = atom<userStoreTypes>({
  key: 'userInfo',
  default: {
    id: -1,
    userId: null,
    nickname: null,
    avator: null,
  },
});

export { userStore };