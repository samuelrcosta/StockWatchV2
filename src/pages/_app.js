import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';

import 'react-toastify/dist/ReactToastify.min.css';

import defaultTheme from '../styles/themes/default';
import GlobalStyle from '../styles/global';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Stock Watch</title>
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,500,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider theme={defaultTheme}>
          <Header />
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </>
    );
  }
}
