import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { customerregister } from '../../Post Api Call With Reduxe/reduxthunk/Action'

class CustomerRegister extends Component {
    Login = () => {this.props.navigation.navigate('CustomerLogin')}

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            phone: "",
            email: "",
            password: "",
            address: ""
        }
    }

    componentDidMount() {
        console.log(this.props.loading)
        // this.props.getCustomerDetails("jeetu@gmail.com", "nik")
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor: 'lightgray'}}>
                <TextInput
                    placeholder='Enter a Employee Name'
                    style={styles.textInputStyle}
                    onChangeText={(e) =>
                        this.setState({
                            name: e
                        })
                    }
                ></TextInput>
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
                    placeholder='Enter a Employee Email'
                    style={styles.textInputStyle}
                    keyboardType='email-address'
                    onChangeText={(e) =>
                        this.setState({
                            email: e
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
                <TextInput
                    placeholder='Enter a Employee Address'
                    style={styles.textInputStyle}
                    onChangeText={(e) =>
                        this.setState({
                            address: e
                        })
                    }
                ></TextInput>
                <Button title='Register' onPress={() => this.props.getCustomerDetails(this.state.name, this.state.phone, this.state.email, this.state.password, this.state.address)}></Button>

                <View style={styles.signupContainer}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={this.Login}>
                        <Text style={{ color: '#6BB0F5' }}>Log In</Text>
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
        details: state.register.details,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomerDetails: (name, phone, email, password, address) =>
            dispatch(customerregister(name, phone, email, password, address))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerRegister)

