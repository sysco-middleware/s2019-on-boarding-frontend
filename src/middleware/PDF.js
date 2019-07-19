import React, { Component } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";


const styles = StyleSheet.create({
  page: { backgroundColor: "" },
  section: { color: "black", textAlign: "left", margin: 30 }
});

class PDF extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { fNameValue, lNameValue} = this.props;
    console.log('the first name value in the PDF component',{fNameValue});
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{fNameValue}</Text>
          </View>
          <View style={styles.section}>
            <Text>{lNameValue}</Text>
          </View>
        </Page>
      </Document>
    );
  }
}

export default PDF;