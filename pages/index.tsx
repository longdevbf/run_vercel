import { useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import styles from '../styles/Home.module.css';
import { useWallet, CardanoWallet } from "@meshsdk/react";
import dynamic from 'next/dynamic';
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);
export const useWalletContext = () => {
    const { wallet, connected } = useWallet();
    return { wallet, connected };
  };
const Home: NextPage = () => {
  const [assets, setAssets] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [effectInitialized, setEffectInitialized] = useState<boolean>(false);
  const {wallet, connected} = useWalletContext();
  useEffect(() => {
    const isLoaded = sessionStorage.getItem('hasLoadedOnce');
    if (!isLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
        setFadeIn(true);
        sessionStorage.setItem('hasLoadedOnce', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
      setFadeIn(true);
    }
  }, []);
  useEffect(() => {
    if (connected) {
      getAssets();
    }
  }, [connected]);

  const getAssets = async () => {
    if (wallet) {
      setLoading(true);
      const _assets = await wallet.getAssets();
      setAssets(_assets);
      setLoading(false);
    }
  };

  const Header = () => {
    useEffect(() => {
      const strings = [
        'Welcome to HeritageChain The Future of Technology Is Here',
        'Preserving Personal Legacies Through Blockchain Technology',
        'A Secure and Transparent Legacy Management Platform',
        'Connecting Legacies to a Sustainable Future and Beyond',
      ];
      let counter = 0;
      const options = {
        offset: 0,
        timeout: 15,
        iterations: 5,
        characters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        resolveString: strings[counter],
        element: document.querySelector('.header__textAndImage-text--one')
      };

      const randomCharacter = (chars: string[]) => chars[Math.floor(Math.random() * chars.length)];
      const doRandomiserEffect = (opt: any, cb: Function) => {
        const { characters, timeout, element, partialString } = opt;
        let { iterations } = opt;
        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = { ...opt, iterations: iterations - 1 };
            element.innerHTML = iterations === 0 ? partialString : partialString + randomCharacter(characters);
            doRandomiserEffect(nextOptions, cb);
          } else cb();
        }, timeout);
      };

      const doResolverEffect = (opt: any, cb: Function) => {
        const { resolveString, offset } = opt;
        const partialString = resolveString.substring(0, offset);
        doRandomiserEffect({ ...opt, partialString }, () => {
          const nextOptions = { ...opt, offset: offset + 1 };
          if (offset <= resolveString.length) doResolverEffect(nextOptions, cb);
          else cb();
        });
      };

      const effectCallback = () => {
        setTimeout(() => {
          counter = (counter + 1) % strings.length;
          doResolverEffect({ ...options, resolveString: strings[counter] }, effectCallback);
        }, 1000);
      };

      if (typeof window !== 'undefined') {
        options.element = document.querySelector('.header__textAndImage-text--one');
        doResolverEffect(options, effectCallback);
      }

      setEffectInitialized(true);
    }, []);

    return (
      <header className="header">
        <div className="header__textAndImage">
          <div className="header__textAndImage-text">
            <h1 className="header__textAndImage-text--one">
              Welcome to Web 3.0 The Future of Technology Is Here
            </h1>
            <p className="header__textAndImage-text-two">
              Welcome to Web3, where cutting-edge technology meets innovative creativity. Here, we believe in the power of blockchain and decentralized solutions to create a more transparent, secure, and sustainable digital world. Join us to explore the best that modern technology has to offer!
            </p>
          </div>
          <div className={`header__textAndImage-image ${fadeIn ? "fade-in" : ""}`}>
            <Player
              src="https://lottie.host/18525483-031f-4f2e-9e35-7fd813350b23/OLuEyQDrGd.json"
              speed={1}
              style={{ width: '500px', height: '500px', marginTop: '-50px' }}
              loop
              autoplay
            />
          </div>
        </div>
      </header>
    );
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <p className="loader__title">HC</p>
        </div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className={styles.fullOfHome}>
      <Header />
      <div className="between">
        <div className="transaction-container">
          <div className="transaction-item transaction-item--left">
            <span className="transaction-item__label">Request</span>
            <span className="transaction-item__size">1000</span>
          </div>
          <div className="transaction-item transaction-item--center">
            <span className="transaction-item__label">Transaction</span>
            <span className="transaction-item__size">322</span>
            <span className="transaction-item__check"></span>
          </div>
          <div className="transaction-item transaction-item--right">
            <span className="transaction-item__label">User</span>
            <span className="transaction-item__size transaction--online">1000</span>
          </div>
        </div>

        <div className="logo-animation-container">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src="https://utcert.vercel.app/_next/static/media/Cardano-RGB_Logo-Full-White.97c5cb3f.png"
              alt={`Logo ${i + 1}`}
              className={`logo logo${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
