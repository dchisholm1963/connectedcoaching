import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <Nav />
      <main className="cc-page">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
