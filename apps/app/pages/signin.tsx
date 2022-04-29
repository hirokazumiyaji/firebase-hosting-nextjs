import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useAuth } from "../hooks/auth"

const SignIn = () => {
  const router = useRouter()
  const { signIn } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onClick = async () => {
    try {
      await signIn(email, password)
      await router.push("/mypage")
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <form>
        <input type="email" value={email} onInput={(e) => setEmail((e.target as HTMLInputElement).value) } />
        <input type="password" value={password} onInput={(e) => setPassword((e.target as HTMLInputElement).value)} />
        <button type="button" onClick={onClick}>sign in</button>
      </form>
      <div>
        <Link href="/signup">
          <a>sign in</a>
        </Link>
      </div>
    </div>
  )
}

export default SignIn;
