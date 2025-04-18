import { useAuth0 } from '@auth0/auth0-react'

export const ProfilePicture = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <span>AA</span>
  }

  return (
    isAuthenticated &&
    user && (
      <img
        src={user.picture}
        alt={user.name}
        style={{ maxHeight: '100%', maxWidth: '100%', display: 'block' }}
      />
    )
  )
}
