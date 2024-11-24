import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ children, adminOnly = false }) => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (!user) {
    return <Navigate to='/login' />
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to='/unauthorized' />
  }

  return children
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  adminOnly: PropTypes.bool
}
