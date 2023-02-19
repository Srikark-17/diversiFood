import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Camera, CameraType } from "expo-camera";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";

const CameraScreen = () => {
  let camera = null;
  const __takePicture = async () => {
    const photo = await camera.takePictureAsync({ base64: true });
    // each base64 string
    // prepend photo.base64 with this 'data:image/jpg;base64,' to see actual image
    console.log(photo.base64);
  };

  return (
    <View>
      <Camera
        ref={(r) => {
          camera = r;
        }}
        style={styles.camera}
      >
        <TouchableOpacity onPress={__takePicture}>
          <View style={styles.button}>
            <Text> </Text>
          </View>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  camera: {
    width: WP(100),
    height: HP(80),
  },
  button: {
    width: WP(22),
    height: HP(10),
    backgroundColor: "#E35F21",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    left: WP(40),
    top: HP(60),
  },
});
