import react, { FC } from 'react';
import { useTheme } from '@react-navigation/native';

import homeStyles from './style'
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLOURS } from '../../common/theme';

interface IControl {
  label: string,
  onClick: () => void
};

interface INumber {
  label: number,
  onClick: () => void
};

interface IZero {
  label: number | string,
  onClick: () => void
};

interface IOperator {
  label: string,
  onClick: () => void
};

const Home: FC = () => {
  const theme = useTheme();

  const CONTROL: IControl[] = [
    {
      label: 'C',
      onClick: () => {
        console.log('C')
      }
    },
    {
      label: '+/-',
      onClick: () => {
        console.log('+/-')
      }
    },
    {
      label: '%',
      onClick: () => {
        console.log('%')
      }
    }
  ];
  const NUMBERS1: INumber[] = [
    {
      label: 1,
      onClick: () => {
        console.log('1')
      }
    },
    {
      label: 2,
      onClick: () => {
        console.log('2')
      }
    },
    {
      label: 3,
      onClick: () => {
        console.log('3')
      }
    }
  ];
  const NUMBERS2: INumber[] = [
    {
      label: 4,
      onClick: () => {
        console.log('4')
      }
    },
    {
      label: 5,
      onClick: () => {
        console.log('5')
      }
    },
    {
      label: 6,
      onClick: () => {
        console.log('6')
      }
    }
  ];
  const NUMBERS3: INumber[] = [
    {
      label: 7,
      onClick: () => {
        console.log('7')
      }
    },
    {
      label: 8,
      onClick: () => {
        console.log('8')
      }
    },
    {
      label: 9,
      onClick: () => {
        console.log('9')
      }
    }
  ];
  const OPERATOR: IOperator[] = [
    {
      label: '\u00F7',
      onClick: () => {
        console.log('\u00F7')
      }
    },
    {
      label: 'x',
      onClick: () => {
        console.log('x')
      }
    },
    {
      label: '-',
      onClick: () => {
        console.log('-')
      }
    },
    {
      label: '+',
      onClick: () => {
        console.log('+')
      }
    }
  ];
  const DOTZERO: IZero[] = [
    {
      label: 0,
      onClick: () => {
        console.log('0')
      }
    },
    {
      label: '.',
      onClick: () => {
        console.log('.')
      }
    },
    {
      label: '=',
      onClick: () => {
        console.log('=')
      }
    }
  ]
  return (
    <View style={[homeStyles.container, { backgroundColor: theme.colors.background }]}>
      <View style={homeStyles.outputSection}>
      </View>
      <View style={homeStyles.buttonsSection}>
        <View style={homeStyles.leftSection}>
          <View style={homeStyles.numberControl}>

            <View style={homeStyles.control}>
              {
                CONTROL.map((controlItem, index) => (

                  <TouchableOpacity
                    onPress={controlItem.onClick}
                    key={index}
                    style={homeStyles.controlButtons}
                  >
                    <LinearGradient
                      colors={[COLOURS.CONTROL_BACKGROUND_DARK, COLOURS.CONTROL_BACKGROUND_LIGHT]}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 1 }}
                      style={homeStyles.controlGradient}

                    >
                      <Text style={[homeStyles.butttonText, { color: '#fff' }]}>{controlItem.label}</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                ))
              }
            </View>
            <View style={homeStyles.numbers}>
              <View style={homeStyles.numberRow}>
                {
                  NUMBERS1.map((numberItem, index) => (
                    <TouchableOpacity
                      onPress={numberItem.onClick}
                      key={index}
                      style={homeStyles.controlButtons}
                    >
                      <LinearGradient
                        colors={[theme.colors.primary, theme.colors.card]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 1 }}
                        style={homeStyles.controlGradient}

                      >
                        <Text style={[homeStyles.butttonText, { color: '#fff' }]}>{numberItem.label}</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))
                }
              </View>
              <View style={homeStyles.numberRow}>
                {
                  NUMBERS2.map((numberItem, index) => (
                    <TouchableOpacity
                      onPress={numberItem.onClick}
                      key={index}
                      style={homeStyles.controlButtons}
                    >
                      <LinearGradient
                        colors={[theme.colors.primary, theme.colors.card]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 1 }}
                        style={homeStyles.controlGradient}

                      >
                        <Text style={[homeStyles.butttonText, { color: '#fff' }]}>{numberItem.label}</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))
                }
              </View>
              <View style={homeStyles.numberRow}>
                {
                  NUMBERS3.map((numberItem, index) => (
                    <TouchableOpacity
                      onPress={numberItem.onClick}
                      key={index}
                      style={homeStyles.controlButtons}
                    >
                      <LinearGradient
                        colors={[theme.colors.primary, theme.colors.card]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 1 }}
                        style={homeStyles.controlGradient}

                      >
                        <Text style={[homeStyles.butttonText, { color: '#fff' }]}>{numberItem.label}</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))
                }
              </View>
            </View>

          </View>

        </View>
        <View style={homeStyles.rightSection}>
          {
            OPERATOR.map((operatorItem, index) => (
              <TouchableOpacity
                onPress={operatorItem.onClick}
                key={index}
                style={homeStyles.controlButtons}
              >
                <LinearGradient
                  colors={[COLOURS.DARK_THEME, COLOURS.THEME]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 1 }}
                  style={homeStyles.controlGradient}

                >
                  <Text style={[homeStyles.butttonText, { color: '#fff' }]}>{operatorItem.label}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))
          }
        </View>

      </View>
      <View style={homeStyles.zeroDot}>
        {
          DOTZERO.map((zeroItem, index) => (
            <TouchableOpacity
              onPress={zeroItem.onClick}
              key={index}
              style={[homeStyles.controlButtons, zeroItem.label === '=' ? { flex: 0.6 } : {flex:0.275}]}
            >
              <LinearGradient
                colors={zeroItem.label === '=' ? [COLOURS.DARK_THEME, COLOURS.THEME] : [theme.colors.primary, theme.colors.card]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
                style={homeStyles.controlGradient}

              >
                <Text style={[homeStyles.butttonText, { color: '#fff' }]}>{zeroItem.label}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}
export default Home;