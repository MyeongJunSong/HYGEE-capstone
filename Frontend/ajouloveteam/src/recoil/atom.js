import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const useridState = atom({
  key: "userId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const userNickNameState = atom({
  key: "userNickName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
