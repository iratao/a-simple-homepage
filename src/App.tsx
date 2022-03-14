import React from 'react'
import Layout from './components/Layout'
import Header from './biz-components/Header'
import Content from './biz-components/Content'
import Footer from './biz-components/Footer'
import ErrorBoundary from './biz-components/ErrorBoundary';

import styles from './App.less'

function App() {
  return (
    <ErrorBoundary>
      <Layout className={styles.root}>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Content />
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
