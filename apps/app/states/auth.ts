import { atom } from "recoil"
import { User } from "firebase/auth";

export const authState = atom<{ loading: boolean; user: Partial<User> }>({
  key: "auth",
  default: {
    loading: true,
    user: null
  }
})
