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
        title="INVOICE HISTORY"
        color="#c60c0c"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="RENTAL REQUEST"
        color="#c60c0c"
        style={styles.Button_5}
        onPress={() => this.props.navigation.navigate("BlankScreen6178092")}
      />
      <Button
        title="PARTS REQUEST"
        color="#c60c0c"
        style={styles.Button_7}
        onPress={() => this.props.navigation.navigate("BlankScreen3178089")}
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
      <Button
        title="INVENTORY"
        color="#c60c0c"
        style={styles.Button_12}
        onPress={() => this.props.navigation.navigate("BlankScreen4178090")}
      />
      <Button
        title="INVOICE HISTORY"
        color="#c60c0c"
        style={styles.Button_13}
        onPress={() => alert("Pressed!")}
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
  },

  View_1: {},
  Button_3: { width: "85%", alignSelf: "flex-end" },
  Button_5: { width: "85%", alignSelf: "flex-end" },
  Button_7: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },

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
  },

  View_1: {},
  Button_3: { width: "85%", alignSelf: "flex-end" },
  Button_5: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    borderRadius: 8
  },

  Button_7: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },

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
  },

  View_1: {},
  Button_3: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },

  Button_5: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontWeight: "bold",
    borderRadius: 8
  },

  Button_7: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },

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
  },

  View_1: {},
  Button_3: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },

  Button_5: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontWeight: "bold",
    borderRadius: 8
  },

  Button_7: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },

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
  },

  Button_12: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },
  View_1: {},
  Button_3: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },
  Button_5: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontWeight: "bold",
    borderRadius: 8
  },
  Button_7: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },
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
  },
  Button_12: {
    width: "85%",
    alignSelf: "flex-end",
    color: "#ffffff",
    fontFamily: "Roboto-Bold",
    borderRadius: 8
  },
  Button_13: {
    width: "85%",
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
