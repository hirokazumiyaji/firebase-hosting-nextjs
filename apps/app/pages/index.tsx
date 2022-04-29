import styles from './index.module.scss';
import { useAuth } from "../hooks/auth"
import Link from "next/link"

export function Index() {
  const { loading, user } = useAuth()

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome app 👋 {loading}
            </h1>
          </div>
          {user && (
            <div>
              <Link href="/mypage">
                <a>my page</a>
              </Link>
            </div>
          )}
          {!user && (
            <div>
              <Link href="/signup">
                <a>sign in</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
