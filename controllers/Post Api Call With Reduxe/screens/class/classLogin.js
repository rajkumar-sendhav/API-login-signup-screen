import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { customerlogin } from '../../Post Api Call With Reduxe/reduxthunk/Action'

class CustomerLogin extends Component {
    Register = () => { this.props.navigation.navigate('CustomerRegister') }

    constructor(props) {
        super(props)

        this.state = {
            phone: "",
            password: ""
        }
    }

    componentDidMount() {
        console.log(this.props.loading)
        // this.props.getCustomerDetails("jeetu@gmail.com", "nik")
    }
    render() {
        return (
            <View>
                <Text> Customer Login </Text>
                <TextInput
                    placeholder='Enter a Employee Phone'
                    style={styles.textInputStyle}
                    onChangeText={(e) =>
                        this.setState({
                            phone: e
                        })
                    }
                ></TextInput>
                <TextInput
                    placeholder='Enter a Employee Password'
                    style={styles.textInputStyle}
                    onChangeText={(e) =>
                        this.setState({
                            password: e
                        })
                    }
                ></TextInput>
                <Button title='Login' onPress={() => this.props.getCustomerDetails(this.state.phone, this.state.password)}></Button>

                <View style={styles.signupContainer}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity  onPress={this.Register}>
                        <Text style={{ color: '#6BB0F5' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInputStyle: {
        fontSize: 26,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'white',
        margin: 10,
        textAlign: 'center',

    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
})
const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        details: state.login.details,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomerDetails: (phone, password) =>
            dispatch(customerlogin(phone, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerLogin)

