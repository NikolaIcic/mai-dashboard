import Nav from './Navigation/Navigation'

const Layout = ({ children }) => {



  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Layout