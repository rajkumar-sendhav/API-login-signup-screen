import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { customerregister } from '../../../reduxthunk/Action'

const CustomerRegister = ({ getCustomerDetails, navigation }) => {
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [address, setAddress] = React.useState('');

    const handleAddDetail = () => {
        if (!name.trim() || !phone.trim() || !email.trim() || !password.trim() || !address.trim()) {
            alert("Please enter valid Details");
            return;
        }
        else {
        getCustomerDetails(name, phone, email, password, address);
        setName('')
        setPhone('')
        setEmail('')
        setPassword('')
        setAddress('')
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Full Name'
                    value={name}
                    onChangeText={(name) => setName(name)}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Phone number'
                    autoCapitalize='none'
                    keyboardType="numeric"
                    value={phone}
                    onChangeText={(phone) => setPhone(phone)}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Email'
                    autoCapitalize='none'
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    textContentType='password'
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Address'
                    value={address}
                    onChangeText={(address) => setAddress(address)}
                />

                <TouchableOpacity style={styles.loginButton} onPress={handleAddDetail}>
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.registerText}>
                    Already have an account?

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#5352ed', fontFamily: 'SourceSansProBold' }}>
                            {' LogIn'}
                        </Text>
                    </TouchableOpacity>
                </Text>

            </View>
        </TouchableWithoutFeedback>
    )
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
    loginButton: {
        backgroundColor: '#5352ed',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontFamily: 'SourceSansProBold',
        alignSelf: 'center',
        fontSize: 18,
    },
    registerText: {
        alignSelf: 'center',
        marginTop: 12,
        fontFamily: 'SourceSansProRegular',
        fontSize: 16,
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

