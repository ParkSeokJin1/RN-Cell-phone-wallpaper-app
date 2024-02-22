import React, {
  ActivityIndicator,
  View,
  useWindowDimensions,
} from "react-native";
import Typography from "../components/Typography";
import Header from "../components/Header/Header";
import { useCallback, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import RemoteImage from "../components/RemoteImage";
import Button from "../components/Button";
import Icon from "../components/Icons";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const ImageDetailScreen = ({ uri }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const [download, setDownload] = useState(false);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const { width } = useWindowDimensions();
  const onPressDownLoad = useCallback(async () => {
    setDownload(true);

    const downloadResumable = FileSystem.createDownloadResumable(
      route.params.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`,
    );
    try {
      const { uri } = await downloadResumable.downloadAsync();

      const permissionResult = await MediaLibrary.getPermissionsAsync(true);
      if (permissionResult.status === "undetermined") {
        await MediaLibrary.requestPermissionsAsync();
      }

      if (permissionResult.status === "denied") {
        //denied.
        setDownload(false);
        return;
      }

      const asset = await MediaLibrary.createAssetAsync(uri);

      MediaLibrary.createAlbumAsync("TestFolder", asset, false)
        .then(() => {
          console.log("File Saved Successfully");
          setDownload(false);
        })
        .catch(() => {
          console.log("Error in saving file");
          setDownload(false);
        });
    } catch (ex) {
      console.log(ex);
      setDownload(false);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName={"arrow-back"} onPress={onPressBack} />
          <Header.Title title="IMAGE DETAIL" />
        </Header.Group>
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <RemoteImage
          url={route.params.url}
          width={width}
          height={width * 1.5}
        />
      </View>

      <Button onPress={onPressDownLoad}>
        <View style={{ paddingBottom: 24, backgroundColor: "black" }}>
          {download ? (
            <View
              style={{
                height: 52,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator />
            </View>
          ) : (
            <View
              style={{
                height: 52,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color={"white"}>DOWNLOAD</Typography>
              <Icon name="download" size={24} color="white" />
            </View>
          )}
        </View>
      </Button>
    </View>
  );
};
export default ImageDetailScreen;
