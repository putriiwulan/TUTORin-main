import React, { useState,useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import ikon
import { auth } from './config/firebaseconfig'; // Import Firebase Auth
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = ({}) => {
  const [isOnRegisterScreen, setIsOnRegisterScreen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [username, setUsername] = useState(''); // Define username state

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    school: '',
    address: '',
  });
  

  useEffect(() => {
    // Memantau status autentikasi pengguna
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.email); // Atau gunakan user.displayName jika Anda menyimpannya
      } else {
        setUsername('');
      }
    });

    return () => unsubscribe(); // Bersihkan listener saat komponen di-unmount
  }, []);

  const handleRegister = async () => {
    const { email, password, firstName, lastName, school, address } = userDetails;

    if (!email || !password || !firstName || !lastName || !school || !address) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      navigation.navigate('gender', {username});
      Alert.alert('Success', 'Account created successfully! Please log in.');

      setUserDetails({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        school: '',
        address: '',
      });

      setIsOnRegisterScreen(false); // Switch to login screen
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      setUsername(userCredential.user.displayName || userCredential.user.email); // Set username to user's email
      navigation.navigate('home', {username});
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'Invalid credentials. Please check your email and password.');
    }
  };
  
  

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User  signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };


  return (
    <View style={styles.container}>
      {isOnRegisterScreen ? (
        <>
          <Text style={styles.title}>Register</Text>

          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#999"
            value={userDetails.firstName}
            onChangeText={(text) => setUserDetails({ ...userDetails, firstName: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#999"
            value={userDetails.lastName}
            onChangeText={(text) => setUserDetails({ ...userDetails, lastName: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="School"
            placeholderTextColor="#999"
            value={userDetails.school}
            onChangeText={(text) => setUserDetails({ ...userDetails, school: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor="#999"
            value={userDetails.address}
            onChangeText={(text) => setUserDetails({ ...userDetails, address: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={userDetails.email}
            onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={userDetails.password}
              onChangeText={(text) => setUserDetails({ ...userDetails, password: text })}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#999" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => setIsOnRegisterScreen(false)}
          >
            <Text style={styles.switchButtonText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
              <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#999" />
            </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => setIsOnRegisterScreen(true)}
          >
            <Text style={styles.switchButtonText}>Don't have an account? Register</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6EFBD',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: '#234873',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#234873',
    padding: 15,
    width: '90%',
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F6EFBD',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  switchButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#234873',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '90%',
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  iconContainer: {
    paddingVertical: 40, // Memberikan padding di sekitar ikon
    marginLeft: 250,
    marginTop: -90,
  },
});

export default Login;