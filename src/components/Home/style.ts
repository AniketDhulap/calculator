import {StyleSheet} from 'react-native';
import {DIMENTION} from '../../common/constant';
import {COLOURS} from '../../common/theme';

const homeStyles = StyleSheet.create({
  container: {
    height: DIMENTION.HEIGHT,
    width: DIMENTION.WIDTH,
    paddingBottom: DIMENTION.HEIGHT * 0.02,
  },
  outputSection: {
    height: DIMENTION.HEIGHT * 0.35,
  },
  buttonsSection: {
    height: DIMENTION.HEIGHT * 0.65,
    flex: 1,
    flexDirection: 'row',
  },
  leftSection: {
    flex: 0.75,
  },
  rightSection: {
    flex: 0.25,
    marginRight: DIMENTION.WIDTH * 0.02,
  },
  numberControl: {
    flex: 1,
  },
  control: {
    flex: 0.25,
    flexDirection: 'row',
    marginLeft: DIMENTION.WIDTH * 0.02,
  },
  numbers: {
    flex: 0.75,
    marginLeft: DIMENTION.WIDTH * 0.02,
  },
  zeroDot: {
    flex: 0.24,
    flexDirection: 'row',
    marginRight: DIMENTION.WIDTH * 0.02,
    marginLeft: DIMENTION.WIDTH * 0.02,
  },
  controlGradient: {
    flex: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

    borderStyle: 'solid',
  },
  controlButtons: {
    margin: DIMENTION.WIDTH * 0.015,
    flex: 1,
    borderRadius: 40,
    elevation: 15,
  },
  Buttons: {
    margin: DIMENTION.WIDTH * 0.02,
    flex: 1,
    borderRadius: 40,
    elevation: 15,
  },
  butttonText: {
    fontSize: DIMENTION.FONT_SCALE * 16,
  },
  numberRow: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default homeStyles;
