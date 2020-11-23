import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <View>
      <Button
        title="Press me!"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Press me!"
        style={styles.Button_5}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Press me!"
        style={styles.Button_7}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="SERVICE STATUS"
        color="#c60c0c"
        style={styles.Button_9}
        onPress={() =>
          this.props.navigation.navigate("CopyofBlankScreen0178088")
        }
      />
      <Button
        title="SERVICE REQUEST"
        color="#c60c0c"
        style={styles.Button_11}
        onPress={() => this.props.navigation.navigate("BlankScreen1178087")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: {},
  Button_3: { width: "85%", alignSelf: "flex-end" },
  Button_5: { width: "85%", alignSelf: "flex-end" },
  Button_7: { width: "85%", alignSelf: "flex-end" },
  Button_9: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontWeight: "bold",
    borderRadius: 8
  },
  Button_11: {
    width: "85%",
    paddingLeft: 0,
    paddingRight: 0,
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
