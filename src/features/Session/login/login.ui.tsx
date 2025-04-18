import { useAuth0 } from '@auth0/auth0-react'
import { useLinkProps } from '@tanstack/react-router'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  const { href } = useLinkProps({ to: '/dashboard' })
  const redirectUrl = new URL(href ?? '', window.location.origin).toString()

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          authorizationParams: { redirect_uri: redirectUrl },
        })
      }
    >
      Log In
    </button>
  )
}

export default LoginButton
