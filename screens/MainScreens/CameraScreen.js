import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Camera, CameraType } from "expo-camera";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";

const CameraScreen = () => {
  let camera = null;
  const photos = [];
  const __takePicture = async () => {
    const photo = await camera.takePictureAsync({ base64: true });
    // each base64 string
    photos.push("data:image/jpg;base64," + photo.base64);
  };
  const submit = () => {
    // code for submitting array to api
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
        <TouchableOpacity onPress={submit}>
          <View style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Done</Text>
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
  submitButton: {
    width: WP(22),
    height: HP(5),
    backgroundColor: "#E35F21",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    left: WP(70),
    top: HP(53),
  },
  submitButtonText: {
    fontFamily: "Poppins",
    color: "#fff",
  },
});
