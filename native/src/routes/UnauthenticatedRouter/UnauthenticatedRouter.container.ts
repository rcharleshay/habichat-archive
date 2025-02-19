import { path } from 'ramda'
import { connect } from 'react-redux'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import EmailScreen from 'src/screens/EmailScreen'
import LandingScreen from 'src/screens/LandingScreen'
import OnboardingScreen from 'src/screens/OnboardingScreen'
import VerifyScreen from 'src/screens/VerifyScreen'
import UnauthenticatedRouter from './UnauthenticatedRouter.component'

export const Stack = createAppContainer(
  createSwitchNavigator(
    {
      EmailScreen,
      VerifyScreen,
      HomeScreen: createStackNavigator(
        { LandingScreen, OnboardingScreen },
        { initialRouteName: 'LandingScreen', defaultNavigationOptions: { header: null } }
      )
    },
    { initialRouteName: 'EmailScreen' }
  )
)

export const state = (state) => {
  return {
    Stack
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(UnauthenticatedRouter)
