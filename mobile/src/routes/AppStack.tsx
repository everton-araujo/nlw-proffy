import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import Authentication from '../pages/Authentication';
import CreateAccount from '../pages/CreateAccount';
import { AuthProvider } from '../contexts/auth';
import Routes from './';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes>
                    <Navigator screenOptions={{ headerShown: false }}>
                        <Screen name='Authentication' component={Authentication} />
                        <Screen name='CreateAccount' component={CreateAccount} />
                        <Screen name='Landing' component={Landing} />
                        <Screen name='GiveClasses' component={GiveClasses} />
                        <Screen name='Study' component={StudyTabs} />
                    </Navigator>
                </Routes>
            </AuthProvider>
        </NavigationContainer>
    );
}

export default AppStack;
