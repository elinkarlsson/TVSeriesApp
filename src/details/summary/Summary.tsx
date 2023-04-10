import React from 'react';
import {View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

const Summary = ({text}: Props) => {
  const {width} = useWindowDimensions();

  return (
    <View>
      {text && <RenderHtml contentWidth={width} source={{html: text}} />}
    </View>
  );
};

interface Props {
  text: string;
}

export default Summary;
