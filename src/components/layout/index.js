import Sidebar from '../sidebar'
import styles from './index.module.scss'

const Layout = (props) => {
  return (
    <div className={`${styles["App"]}`}>
      <Sidebar />
      
      <div className={`${styles["page"]}`}>
        <span className={`${styles["top-tags"]}`}></span>
        {props.child}
        <span className={`${styles["tags"]}`}>
          <br />
          <span className={`${styles["bottom-tag-html"]}`}></span>
        </span>
      </div>
    </div>
  )
}

export default Layout
