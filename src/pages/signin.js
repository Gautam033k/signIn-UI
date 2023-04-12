import React from 'react';
import Head from 'next/head';
import Layout from 'Layout/layout';
import styles from '../../src/styles/login.module.css';
import google from '../../public/assets/google.svg';
import apple from '../../public/assets/apple.svg';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  }

  return (
    <Layout>
      <Head>
        <title>Sign In</title>
      </Head>
      <section className={styles.section__header}>
        <div className={styles.signin__info}>
          <h1>Sign In</h1>
          <p>Sign in to your account</p>
        </div>

        <div className={styles.socials}>
          <button type="button" onClick={handleGoogleSignIn}>
            <Image src={google} alt="google" width="10" height="10"></Image>
            <span>Sign in with Google </span>
          </button>
          <button type="button">
            <Image src={apple} alt="google" width="10" height="10"></Image>
            <span>Sign in with Apple</span>
          </button>
        </div>

        {/* form */}
        <form action="#" className={styles.form__container}>
          <div className={styles.input__container}>
            <span>Email address</span>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div className={styles.input__container}>
            <span>Password</span>
            <input type="password" name="password" placeholder="password" />
          </div>
          {/* login button */}
          <div className={styles.f_Password}>
            <a href="#">Forgot password?</a>
          </div>
          <div className={styles.signin__button}>
            <button type="submit">Sign In</button>
          </div>
        </form>
        <div className={styles.register__route}>
          <span>
            Dont have an account ? <a href="#">Register here</a>
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default SignIn;
