import React from 'react'
import {
    View,
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text
} from 'native-base'

const LoginTemplate = ({error, email, password, onEmailUpdate, onPassUpdate, onLoginPress}) => (
    <Container style={{backgroundColor: '#FFFDF9', justifyContent: 'center'}} >
        <Form style={{margin: 10}}>
            
            <Item floatingLabel >
                <Label >Email</Label>
                <Input 
                    onChangeText={(val) => onEmailUpdate(val)}
                    value={email} 
                />
            </Item>
            <Item floatingLabel >
                <Label>Password</Label>
                <Input 
                    onChangeText={(val) => onPassUpdate(val)}
                    value={password}
                />
            </Item>
            <Button full rounded style={{marginTop: 15}}
                onPress={() => onLoginPress()}
            > 
                <Text>Login</Text>
            </Button>
            {error &&
                <Text style={{color: '#F46197', marginTop: 15}}>
                    {error}
                </Text>
            }
        </Form>
    </Container>
);

export default LoginTemplate;