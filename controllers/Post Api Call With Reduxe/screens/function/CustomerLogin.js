import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    Keyboard,
} from 'react-native';
import { connect } from 'react-redux'
import { customerlogin } from '../../../reduxthunk/Action'

// You can use your custom background image
import BackgroundImage from '../../../assets/images.jpg';

// npm install react-native-elements
import { Icon } from 'react-native-elements';

// npm install react-native-animatable
import * as Animatable from 'react-native-animatable';

const CustomerLogin = ({ getCustomerDetails, navigation }) => {
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleAddDetail = () => {
        if (!phone.trim() || !password.trim()) {
            alert("Phone or Password is invalid");
            return;
        }
        else {
            getCustomerDetails(phone, password);
            setPhone('');
            setPassword('');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, marginTop: -500 }}
                        source={BackgroundImage}
                    />
                </View>
                <Animatable.Text
                    style={styles.titleText}
                    animation='fadeInUp'
                    delay={1200}
                >
                    WellCome
                </Animatable.Text>
                <View style={styles.bottomView}>
                    <Text style={styles.loginText}>Login</Text>
                    <View style={styles.inputView}>
                        <Icon
                            style={styles.inputIcon}
                            name='person'
                            type='ionicons'
                            color='#5352ed'
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='Phone number'
                            autoCapitalize='none'
                            keyboardType="numeric"
                            value={phone}
                            onChangeText={(phone) => setPhone(phone)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Icon
                            style={styles.inputIcon}
                            name='lock'
                            type='ionicons'
                            color='#5352ed'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            secureTextEntry={true}
                            autoCapitalize='none'
                            textContentType='password'
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.fpText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton} onPress={handleAddDetail}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.registerText}>
                        Don't have an account?

                        <TouchableOpacity onPress={() => navigation.push('CustomerRegister')}>
                            <Text style={{ color: '#5352ed', fontFamily: 'SourceSansProBold' }}>
                                {' Register'}
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.1,
        alignSelf: 'center',
        color: '#fff',
        fontFamily: 'SourceSansProBold',
        fontSize: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    bottomView: {
        backgroundColor: '#fff',
        opacity: 0.95,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    loginText: {
        fontFamily: 'SourceSansProBold',
        fontSize: 24,
        marginTop: 12,
        marginBottom: 4,
    },
    inputView: {
        height: 40,
        borderRadius: 10,
        backgroundColor: '#f1f3f6',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputIcon: {
        paddingHorizontal: 8,
    },
    input: {
        height: 40,
        flex: 1,
        fontFamily: 'SourceSansProRegular',
        fontSize: 16,
        color: '#333',
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
    fpText: {
        marginTop: 10,
        alignSelf: 'flex-end',
        fontFamily: 'SourceSansProBold',
        fontSize: 16,
        color: '#5352ed',
    },
});

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
