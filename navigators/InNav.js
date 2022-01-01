import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";

const Nav = createNativeStackNavigator();

// 로그인 이후 홈 화면
const InNav = () => (
  <Nav.Navigator>
    <Nav.Screen name="Home" component={Home} />
  </Nav.Navigator>
);

export default InNav;
