import { ArrowCircleRight } from 'iconsax-react-nativejs';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../../theme/colors';

const MenuItem: React.FC<{ item: any; onPress: () => void }> = ({
  item,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>
        <View style={styles.iconrow}>
          <Text style={styles.icon}>{item.icon}</Text>
        </View>
      </View>
      <View style={styles.titlerow}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View>
        <ArrowCircleRight size="28" variant="Broken" color={Colors.THIRT} />
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 8,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 1,
  },
  iconrow: {
    backgroundColor: Colors.WHITE,
    padding: 5,
    borderRadius: 10,
  },
  icon: {
    padding: 5,
  },
  titlerow: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default MenuItem;
