import {Dimensions} from 'react-native';

const DIMENTION = {
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width,
  FONT_SCALE: Dimensions.get('window').fontScale,
  SCALE: Dimensions.get('window').scale,
};

export {DIMENTION};
