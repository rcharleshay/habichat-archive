import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import { subAccount, unsubAccount, setDarkMode, setScreenSize } from 'src/services/redux'
import UniversalRouter from './UniversalRouter.component'

export const state = (state) => {
  const authenticated = pathOr('pending', ['account', 'authenticated'])(state)
  return {
    authenticated
  }
}

export const dispatch = {
  subAccount,
  unsubAccount,
  setDarkMode,
  setScreenSize
}

export default connect(
  state,
  dispatch
)(UniversalRouter)
