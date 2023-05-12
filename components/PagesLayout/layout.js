import Nav from './Navigation/Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main style={{ position: 'relative' }}>{children}</main>
    </>
  )
}

export default Layout