import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { BLACK_COLOR } from "../colors";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Nav = createNativeStackNavigator();

// 로그인 이후 홈 화면
const InNav = () => (
  <Nav.Navigator
    screenOptions={{
      presentation: "modal",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: BLACK_COLOR,
      },
    }}
  >
    <Nav.Screen name="Coins" component={Home} />
    <Nav.Screen name="Detail" component={Detail} />
  </Nav.Navigator>
);

export default InNav;
