import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { PlayerAddProps } from "../types/PlayerTypes";

export const PlayerAdd = ({
  player,
  onAmountChange,
  resetTrigger
}: PlayerAddProps) => {
  const [inputValue, setInputValue] = useState("0");

  useEffect(() => {
    setInputValue("");
  }, [resetTrigger]);

  const handleInputChange = (text: string) => {
    setInputValue(text);
    const amount = text || "0";
    onAmountChange(amount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{player.name}</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff'
  },
  input: {
    width: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    color: '#fff'
  },
});
