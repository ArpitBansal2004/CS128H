import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SudokuSolver = () => {
  const [sudokuBoard, setSudokuBoard] = useState([
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ]);

  const handleInput = (text, row, col) => {
    const updatedBoard = [...sudokuBoard];
    updatedBoard[row][col] = text;
    setSudokuBoard(updatedBoard);
  };

  const handleSubmit = () => {
    // handle the submit action here
    console.log(sudokuBoard);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sudoku Solver</Text>
      <View style={styles.sudokuBoard}>
        {sudokuBoard.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((col, colIndex) => (
              <TextInput
                style={styles.box}
                key={colIndex}
                maxLength={1}
                keyboardType="numeric"
                value={col}
                onChangeText={(text) => handleInput(text, rowIndex, colIndex)}
                onSubmitEditing={() => Keyboard.dismiss()}
                returnKeyType="done"
              />
            ))}
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  sudokuBoard: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SudokuSolver;