import { useAuth0 } from '@auth0/auth0-react'
import { useLinkProps } from '@tanstack/react-router'

const LogoutButton = () => {
  const { logout } = useAuth0()
  const { href } = useLinkProps({ to: '/guest' })
  const returnUrl = new URL(href ?? '', window.location.origin).toString()

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: returnUrl } })}>
      Log Out
    </button>
  )
}

export default LogoutButton
