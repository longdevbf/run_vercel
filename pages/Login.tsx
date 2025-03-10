import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faGoogle, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';

const AuthForm: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn không cho form gửi dữ liệu mặc định

    // Kiểm tra xem các trường đã được điền chưa
    if (username && password) {
      // Nếu đã điền đầy đủ, điều hướng đến trang chủ
      router.push('/');
    } else {
      // Thông báo cho người dùng rằng cần điền đầy đủ thông tin
      alert('Vui lòng điền đầy đủ thông tin.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginPage}>
        <div className={styles.form}>
          {isRegistering ? (
            <form>
              <h2 className={styles.title}>Register</h2>
              <input type="text" placeholder="Full Name *" required />
              <input type="text" placeholder="Username *" required />
              <input type="email" placeholder="Email *" required />
              <input type="password" placeholder="Password *" required />
              <button type="submit" className={styles.btn}>Create</button>
              <p className={styles.message}>
                Already registered? <a className={styles.link} onClick={toggleForm}>Sign In</a>
              </p>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit}>
              <h2 className={styles.title}>Login</h2>
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className={styles.btn}>
                Sign in
              </button>
              <p className={styles.message}>
                Not registered? <a className={styles.link} onClick={toggleForm}>Create an account</a>
              </p>
              <p className={styles.text}>
                <span className={styles.line}></span>
                <span className={styles.orText}>Or</span>
                <span className={styles.line}></span>
              </p>
              <ul className={styles.wrapper}>
                <li className={`${styles.icon} ${styles.facebook}`}>
                  <span>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </li>
                <li className={`${styles.icon} ${styles.youtube}`}>
                  <span>
                    <FontAwesomeIcon icon={faYoutube} />
                  </span>
                </li>
                <li className={`${styles.icon} ${styles.google}`}>
                  <span>
                    <FontAwesomeIcon icon={faGoogle} />
                  </span>
                </li>
                <li className={`${styles.icon} ${styles.linkedin}`}>
                  <span>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span>
                </li>
                <li className={`${styles.icon} ${styles.telegram}`}>
                  <span>
                    <FontAwesomeIcon icon={faTelegram} />
                  </span>
                </li>
              </ul>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
