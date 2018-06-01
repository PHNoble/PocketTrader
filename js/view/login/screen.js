import React, {Component} from 'react';
import LoginTemplate from './template';
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { saveUserData } from '../../reducers/AuthReducer'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onLoginPress() {
        const {email, password} = this.state;
        console.log(email, ' ', password);
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
        .then((user) => {
            this.props.saveUserData(user)
        })
        .catch((error) => {
            const { code, message } = error;
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
            console.log(error.code);
            switch (error.code) {
                case 'auth/invalid-email':
                    this.setState({error: 'Invalid Email'})
                    break;
                case 'auth/wrong-password':
                    this.setState({error: 'Invalid Password'})
                    break;
                default:
                    this.setState({error: 'And unknown error occured, please try logging in again. If this persists please try again at a different time.'})
            }

            
        });
        
    }

    render() {
        return (
            <LoginTemplate 
                error={this.state.error}
                email={this.state.email}
                password={this.state.password}
                onEmailUpdate={(email) => this.setState({email})}
                onPassUpdate ={(password) => this.setState({password})}
                onLoginPress={() => this.onLoginPress()}
            />
        )
    }
}

const mapStateToProps = (state) => ({
})
  
const mapDispatchToProps = {
    saveUserData
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

