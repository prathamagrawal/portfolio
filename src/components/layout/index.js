import Sidebar from '../sidebar'

const Layout = (props) => {
  return (
    <div className="App">
      <Sidebar />
      
      <div className="page">
        <span className="tags top-tags"></span>
        {props.child}
        <span className="tags bottom-tags">
          <br />
          <span className="bottom-tag-html"></span>
        </span>
      </div>
    </div>
  )
}

export default Layout
