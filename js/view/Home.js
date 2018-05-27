import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import {View, H1, StyleProvider, Button, Text, Container, Header, Content, Left, Body, Right, Icon, Title, Card, CardItem, Spinner, Form, Input, Item, Fab} from 'native-base';
import { createStackNavigator } from 'react-navigation';


const {width, height} = Dimensions.get('window');

const NavHeader = ({}) => (
  <Header>
    <Left style={{flex: 1}}>
      <Button
        transparent
        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body style={{flex: 1}}>
      <Title>HomeScreen</Title>
    </Body>
    <Right style={{flex: 1}} />
  </Header>
);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loading: false,
      selectedTicker: 'none', // NONE, or given ticker
      graphType: 'Day', // DAY, WEEK, MONTH, YEAR
      fabActive: false,
      inputText: '',
    }
  }


  render() {
    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    return (
      <Container style={{backgroundColor: '#FFFDF9'}} >
        <NavHeader />
        {/*END HEADER BEGIN CONTENT*/}
        <Content scrollEnabled={false}>
          {/*CARD CONTENT BEGIN*/}
          <H1>Some title???</H1>
          {/*BEGIN GRAPH DISPLAY CARD*/}
          {!this.state.loaded && 
          <Card>
            <CardItem header>
              <Icon name="stats" />
              <Text>Prediction on {this.state.selectedTicker} for {this.state.graphType}</Text>
              
            </CardItem>
            <CardItem>
              <Body>
                <ScrollView 
                  pagingEnabled={true}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={{width: width}}>
                  </View>
                  <View style={{width: width}}>
                    <Text>WEEK</Text>
                  </View>
                  <View style={{width: width}}>
                    <Text>MONTH</Text>
                  </View>
                  <View style={{width: width}}>
                    <Text>YEAR</Text>
                  </View>
                </ScrollView>
              </Body>
            </CardItem>
          </Card>}
          {/*ACTIVITY INDICATOR*/}
          {this.state.loading && this.state.selectedTicker != 'none' &&
            <Spinner />
          }
          {/*Search Form*/}
          <Card>
            <CardItem header>
              <Text>Input a stock ticker</Text>
            </CardItem>
            <CardItem style={{width: '100%'}}>
              <Form style={{width: '100%'}}>
                <Item rounded>
                  <Input 
                  placeholder={'Search Tickers'}
                  onChangeText={(text) => {this.setState({inputText: text})}}
                  
                  > 
                  </Input>
                </Item>
              </Form>n
            </CardItem>
            <CardItem>
              <Button block disabled={this.state.inputText == '' || this.state.inputText == null} 
                style={{width: '100%'}}
                onPress={() => {
                  this.setState({
                    selectedTicker: this.state.inputText,
                    loading: true,});
                }}>
                <Text>
                  Search
                </Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

