import Head from 'next/head';
import { Component } from 'react';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: Component;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;