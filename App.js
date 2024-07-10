import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Home() {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.homeText}>Sales Off 🛒💰</Text>
      <Image
        source={require('./assets/home.jpg')}
        style={styles.homeImage}
      />
    </View>
  );
}

function Scan() {
  return (
    <View style={styles.centeredView}>
      <Image
        style={styles.image}
        source={require('./assets/image.png')}
      />
      <Text style={styles.scanText}>Scan and Pay</Text>
      <Text style={styles.scanDescription}>Please scan products you want to buy and pay & enjoy Shopping ;)</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.sectionTitle}>Notifications</Text>
      <Text style={styles.notificationText}>You have no new notifications.</Text>
    </View>
  );
}

function History() {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.sectionTitle}>History</Text>
      <Text style={styles.historyText}>No purchase history available.</Text>
    </View>
  );
}

function Cart() {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.sectionTitle}>Cart</Text>
      <Text style={styles.cartText}>Your cart is empty.</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="orange"
      inactiveColor="gray"
      labeled={false}
      barStyle={styles.tabBar}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="line-scan" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  homeText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
  homeImage: {
    width: 400,
    height: 450,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  scanText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scanDescription: {
    fontSize: 18,
    textAlign: 'center',
    color: 'orange',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  historyText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  cartText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  tabBar: {
    backgroundColor: '#f8f9fa', 
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
