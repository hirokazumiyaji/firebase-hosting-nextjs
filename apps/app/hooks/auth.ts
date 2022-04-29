import { useEffect } from "react"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from "firebase/auth"
import { auth } from "@firebase-hosting-nextjs/firebase/web"
import { useRecoilState, useRecoilValue } from "recoil"
import { authState } from "../states/auth"

export const useAuthEffect = () => {
  const [state, setState] = useRecoilState(authState)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.group("onAuthStateChanged")
      console.info(user)
      console.groupEnd()
      if (!user) {
        setState({ ...state, loading: false })
        return
      }
      setState({ loading: false, user: { uid: user.uid, email: user.email } })
    })
  }, [])
}

export const useAuth = () => {
  const { loading, user } = useRecoilValue(authState)

  return {
    loading,
    user,
    signUp: (email: string, password: string): Promise<UserCredential> => {
      return createUserWithEmailAndPassword(auth, email, password)
    },
    signIn: (email: string, password: string): Promise<UserCredential> => {
      return signInWithEmailAndPassword(auth, email, password)
    },
    signOut: (): Promise<void> => {
      return signOut(auth)
    },
  }
}
