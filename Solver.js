import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native';

const SudokuBoard = () => {
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

  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default SudokuBoard;
