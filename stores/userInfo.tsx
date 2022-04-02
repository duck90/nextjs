import { atom } from 'recoil';

interface UserTypes {
  id: number;
  userId: string | null;
  nickname: string | null;
}

const userInfo = atom<UserTypes>({
  key: 'userInfo',
  default: {
    id: -1,
    userId: null,
    nickname: null,
  },
});

export { userInfo };