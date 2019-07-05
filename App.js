import React from "react";
import {
  View,
  Button,
  StyleSheet,
  NativeModules,
  NativeEventEmitter,
  Text
} from "react-native";

const MessageEvent = new NativeEventEmitter(NativeModules.VideoManager);

export default class App extends React.Component {
  state = {
    message: ""
  };

  componentDidMount() {
    MessageEvent.addListener("onAddHi", ({ newMessage }) =>
      this.setState(() => ({ message: newMessage }))
    );
  }

  componentWillUnmount() {
    MessageEvent.removeSubscription();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            NativeModules.VideoManager.addHi();
          }}
          title="Native"
        />
        <Text>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
