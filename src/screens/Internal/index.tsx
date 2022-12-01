import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

// import { Container } from './styles';

const Internal: React.FC = () => {

  const route = useRoute();
  const item: any = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: item?.item?.html_url,
        }}
      />
    </View>
  );
}

export default Internal;