import React from 'react'
import CommonProps from '../../types/CommonProps';
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

import styles from './index.less'

interface Props extends CommonProps {
  className?: string
}

const Layout = ({ children, className }: Props) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      {children}
    </div>
  )
}

Layout.Content = Content;
Layout.Footer = Footer;
Layout.Header = Header;
export default Layout;