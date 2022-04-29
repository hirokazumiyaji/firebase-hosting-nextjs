import { useAuth } from "../hooks/auth"
import { useEffect } from "react"
import { useRouter } from "next/router"

const MyPage = () => {
  const router = useRouter()
  const { loading, user } = useAuth()

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) {
      return
    }
    router.push("/signin")
  }, [loading])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>label</td>
            <td>value</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>{user?.uid}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{user?.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MyPage;
