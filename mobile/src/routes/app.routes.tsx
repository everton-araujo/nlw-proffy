import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='Landing' component={Landing} />
    </AuthStack.Navigator>
);

export default AuthRoutes;
