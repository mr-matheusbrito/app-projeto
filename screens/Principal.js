import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
      Carro - Descrição
      </Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bicicleta - Descrição</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Moto Descrição</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Carro"
        component={Feed}
        options={{
          tabBarLabel: 'Carro',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car-hatchback" color={color} size={size} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Moto"
        component={Notifications}
        options={{
          tabBarLabel: 'Moto',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="motorbike" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bicicleta"
        component={Profile}
        options={{
          tabBarLabel: 'Bicicleta',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bicycle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
