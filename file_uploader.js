react-native-document-picker

<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

import DocumentPicker, {pick, types} from 'react-native-document-picker';

<Button onPress={addNew}>Choose and upload file</Button>

const addNew = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        // copyTo: 'cachesDirectory',
        type: [types.pdf, types.images],
      });
      uploadFile(pickerResult);
    } catch (e) {
      console.log(e);
    }
  };

  const uploadFile = async function (data) {
    // setLoading(true);
    const resp = await fileUploader(data, token);
    if (resp.ok) {
      console.log( resp);
    } else {
      Alert.alert(t('common.error'), t('common.failed-to-upload-file'));
    //   setLoading(false);
    }
  };



const fileUploader = async (file, token) => {
    var data = new FormData();
  
    try {
      data.append('files', {
        uri:
          Platform.OS === 'ios'
            ? file.uri.replace('file://', '')
            : file.uri,
        name: file.fileName || file.name,
        type: file.type,
      });
  
      const response = await axios.post(basePath+'/api/upload', data, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response?.data  ) {
        return {ok: true, id: response.id, url: response.url};
      } else {
        return {ok: false};
      }
    } catch (err) {
      console.log(err);
      return {ok: false};
    }
  };
  
