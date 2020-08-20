import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Authentication from '../pages/Authentication';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='Authentication' component={Authentication} />
    </AuthStack.Navigator>
);

export default AuthRoutes;
