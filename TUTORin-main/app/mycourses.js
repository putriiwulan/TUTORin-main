// import React from 'react';
// import {View,Text,StyleSheet,Image,FlatList,TouchableOpacity,Alert} from 'react-native';

// const courses = [
//   {
//     id: '1',
//     title: 'Biology',
//     lessons: '6/10 lessons',
//     progress: '40%',
//     image: require('../assets/biology.png'),
//   },
//   {
//     id: '2',
//     title: 'Mathematics',
//     lessons: '5/10 lessons',
//     progress: '90%',
//     image: require('../assets/mathematics.png'),
//   },
//   {
//     id: '3',
//     title: 'English',
//     lessons: '6/10 lessons',
//     progress: '80%',
//     image: require('../assets/english.png'),
//   },
// ];

// const MyCourses = () => {
//   const handlePress = (courseTitle) => {
//     Alert.alert('Course Selected', `You selected ${courseTitle}`);
//   };

//   const renderCourse = ({ item }) => (
//     <TouchableOpacity
//       style={styles.courseContainer}
//       onPress={() => handlePress(item.title)}
//     >
//       <Image source={item.image} style={styles.courseImage} />
//       <View style={styles.courseContent}>
//         <Text style={styles.courseTitle}>{item.title}</Text>
//         <Text style={styles.courseLessons}>{item.lessons}</Text>
//         <View style={styles.progressBarContainer}>
//           <View
//             style={[
//               styles.progressBar,
//               {
//                 // Parsing progress menjadi angka dan menggunakannya untuk menentukan lebar
//                 width: parseInt(item.progress) + '%', 
//               },
//             ]}
//           />
//         </View>
//       </View>
//     </TouchableOpacity>
//   );  

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.backButton}>{'<'}</Text>
//         <Text style={styles.headerTitle}>My Courses</Text>
//       </View>
//       <FlatList
//         data={courses}
//         renderItem={renderCourse}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.listContent}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#282A64', 
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#282A64',
//   },
//   backButton: {
//     color: '#fff',
//     fontSize: 18,
//     marginRight: 8,
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   listContent: {
//     padding: 16,
//     backgroundColor: '#FAEEC6',
//   },
//   courseContainer: {
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     marginBottom: 16,
//     overflow: 'hidden',
//     elevation: 3,
//   },
//   courseImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'cover',
//   },
//   courseContent: {
//     padding: 16,
//   },
//   courseTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 8,
//   },
//   courseLessons: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 8,
//   },
//   progressBarContainer: {
//     height: 10,
//     backgroundColor: '#E0E0E0',
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   progressBar: {
//     height: '100%',
//     backgroundColor: '#4CAF50', 
//   },
// });

// export default MyCourses;
