import React, { useState, useSyncExternalStore } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import  Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)

  const cadastrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  return (
    <View style={styles.container}>
      <Text h1>Cadastro</Text>

      <Input
      placeholder="User"
      leftIcon={{ type: 'font-awesome', name: 'user' }}
      onChangeText={value => setUser(value)}
      keyboardType="email-address"
      />
      <Input
      placeholder="Password"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />

      <Button
        icon={
          <Icon
          name=""
          size={15}
          color="white"
          />
        }
        title="Cadastrar"
        onPress={() => cadastrar()}
      />
    </View>
  );
}


