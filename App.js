import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Splash from './Screens/onboarding/splash';
import LocationPage from './Screens/onboarding/location';
import Login from './Screens/Auth/login';
import SignUp from './Screens/Auth/signUp';
import Terms from './Screens/Auth/terms';
import ResetPassword from './Screens/Auth/resetPassword';
import SelectService from './Screens/onboarding/selectService';
import EnableNotification from './Screens/onboarding/enableNotification';
import Intro1 from './Screens/onboarding/intro1';
import Intro2 from './Screens/onboarding/intro2';
import Intro3 from './Screens/onboarding/intro3';
import Page from './component/Page';
import AboutBookings from './Screens/Home/aboutBooking';
import {DrawerMenu} from './helper/menus';
import Profile from './Screens/Home/profile';
import Privacy from './Screens/Home/privacy';
import Settings from './Screens/Home/settings';
import AddPayment from './Screens/Home/addPayment';
import Notification from './Screens/Home/notification';
import Review from './Screens/Home/review';
import AboutStore from './Screens/Home/aboutStore';
import Success from './Screens/Home/success';
import MakeReview from './Screens/Home/makeReview';
import Payment from './Screens/Home/payment';
import Booked from './Screens/Home/booked';
import DropdownScreen from './Screens/Home/dropDown';
import ServiceSearch from './Screens/Home/serviceSearch';
import PickLocation from './Screens/Home/pickLocation';
import YourLocationMap from './Screens/Home/yourLocationMap';
import SelectLocation from './Screens/Home/selectLocation';
import ChooseLoginMethod from './Screens/Auth/chooseLoginMethod';
import Verify from './Screens/Auth/verify';
import ChangePassword from './Screens/Auth/changePassword';

import {RouteContext} from './helper/route_context';

const App = () => {
  const Stack = createStackNavigator();

  const AuthStack = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="Intro1" component={Intro1} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="LocationPage" component={LocationPage} />
      <Stack.Screen name="SelectService" component={SelectService} />
      <Stack.Screen name="EnableNotification" component={EnableNotification} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Intro2" component={Intro2} />
      <Stack.Screen name="Intro3" component={Intro3} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
      <Stack.Screen name="DrawerTabScreen" component={DrawerTabScreen} />
    </Stack.Navigator>
  );

  const LoginStack = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="ChooseLoginMethod" component={ChooseLoginMethod} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      {/* 
      <Stack.Screen name="DrawerTabScreen" component={DrawerTabScreen} /> */}
    </Stack.Navigator>
  );

  const HomeStack = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="DrawerTabScreen" component={DrawerTabScreen} />
      <Stack.Screen name="AboutBookings" component={AboutBookings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AddPayment" component={AddPayment} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="AboutStore" component={AboutStore} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="MakeReview" component={MakeReview} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Verify" component={Verify} />

      <Stack.Screen name="PickLocation" component={PickLocation} />

      <Stack.Screen name="Booked" component={Booked} />
      <Stack.Screen name="ServiceSearch" component={ServiceSearch} />

      <Stack.Screen name="DropdownScreen" component={DropdownScreen} />
      <Stack.Screen name="YourLocationMap" component={YourLocationMap} />
    </Stack.Navigator>
  );
  const DrawerTab = createDrawerNavigator();
  const DrawerTabScreen = () => (
    <DrawerTab.Navigator drawerContent={props => <DrawerMenu {...props} />}>
      <Stack.Screen name="Page" component={Page} />
    </DrawerTab.Navigator>
  );
  const [currentState, setCurrentState] = React.useState(
    React.useContext(RouteContext).initState,
  );

  return (
    <RouteContext.Provider value={{currentState, setCurrentState}}>
      <NavigationContainer>
        {currentState === 'splash' ? (
          <Splash />
        ) : currentState === 'onboarding' ? (
          <AuthStack />
        ) : currentState === 'login' ? (
          <LoginStack />
        ) : (
          <HomeStack />
        )}
      </NavigationContainer>
    </RouteContext.Provider>
  );
};
export default App;
