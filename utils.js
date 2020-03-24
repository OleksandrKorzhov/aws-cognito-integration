import {Alert} from 'react-native';

export const jsonPrint = val => console.log(JSON.stringify(val, null, 2));

export const withReports = async fn => {
  let result;

  try {
    result = await fn();

    jsonPrint(result);
  } catch (e) {
    Alert.alert(e.name, e.message);
    throw e;
  }

  return result;
};
