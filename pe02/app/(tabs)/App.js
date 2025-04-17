import React from 'react';
import {View, Text, ScrollView, Image, TextInput, StyleSheet} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/images/icon.png')} style={styles.image} />
      
      <Text style={styles.prompt}>Which course did you like?</Text>
      <TextInput
        placeholder="ex. CS624"
        style={styles.input}
      />

      <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
      <Text style={styles.course}>CS 504 Software Engineering</Text>
      <Text style={styles.course}>CS 506 Programming for Computing</Text>
      <Text style={styles.course}>CS 519 Cloud Computing Overview</Text>
      <Text style={styles.course}>CS 533 Computer Architecture</Text>
      <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
      <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing</Text>
      <Text style={styles.course}>DS 510 Artificial Intelligence for Data Science</Text>
      <Text style={styles.course}>DS 620 Machine Learning & Deep Learning</Text>

      <Text style={styles.sectionHeader}>Depth of Study (6 Credits)</Text>
      <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
      <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>

      <Text style={styles.capstoneHeader}>Capstone (3 credits)</Text>
      <Text style={styles.capstoneCourse}>CS 687 Computer Science Capstone</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  prompt: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    backgroundColor: 'yellow',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    padding: 10,
  },
  course: {
    fontSize: 16,
    marginVertical: 4,
  },
  capstoneHeader: {
    backgroundColor: 'yellow',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 10,
  },
  capstoneCourse: {
    fontSize: 16,
    color: 'black',
    marginVertical: 4,
  },
});

export default App;