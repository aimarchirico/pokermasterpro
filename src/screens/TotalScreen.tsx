import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import PlayerTotal from "../components/PlayerTotal";
import { usePlayers } from "../contexts/PlayersContext";
import { useStyles } from "../styles/StylesContext";
import { useAuth } from "../contexts/AuthContext";

const TotalScreen = () => {
  const { players } = usePlayers();
  const { globalStyles } = useStyles();
  const { auth } = useAuth();

  const handleOpen = async () => {
    const url = auth?.spreadsheetId
      ? `https://docs.google.com/spreadsheets/d/${auth.spreadsheetId}`
      : null;
    if (url) {
      await Linking.openURL(url);
    }
  };

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        globalStyles.flexContainer
      )}
    >
      <View
        style={StyleSheet.compose(
          globalStyles.card,
          globalStyles.subheaderCard
        )}
      >
        <Text
          style={StyleSheet.compose(globalStyles.text, globalStyles.subheader)}
        >
          Name
        </Text>
        <Text
          style={[
            globalStyles.text,
            globalStyles.subheader,
            globalStyles.rightSubheader,
          ]}
        >
          Total
        </Text>
      </View>
      <ScrollView contentContainerStyle={globalStyles.container}>
        {players.map((player) => (
          <PlayerTotal key={player.name} player={player} />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={[globalStyles.card, globalStyles.button]}
        onPress={handleOpen}
      >
        <Text
          style={StyleSheet.compose(globalStyles.text, globalStyles.buttonText)}
        >
          Open spreadsheet
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalScreen;
