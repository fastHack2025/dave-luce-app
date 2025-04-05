import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/api/chat', '/contact'],
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
