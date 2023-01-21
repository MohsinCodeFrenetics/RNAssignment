import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, images, Size } from '../constants'
import { IconButton, TextButton } from '../components'

const BMIResult = ({ navigation, route }) => {

    const bmiResp = route.params?.bmiResponse
    
    // UI/UX
    const renderHeader = () => {
        return (
            <View style={styles.row}>

                <IconButton
                    icon={images.back}
                    containerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    iconContainerStyle={{

                        tintColor: COLORS.white
                    }}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>BMI Calculator</Text>
                <View />
            </View>
        )
    }

    const renderBody = () => {

        return (
            <View style={styles.body} >
                <Text style={styles.resultText}>{bmiResp?.msg}</Text>
                <Text style={styles.measureNum}>{bmiResp?.result}</Text>
                <Text style={styles.title}>
                    {`you have ${bmiResp?.msg} body weight.`}
                </Text>
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View style={styles.footer}>

                <TextButton
                    label={"Re-Calculate"}
                    buttonContainerStyle={styles.buttonContainerStyle}
                    labelStyle={{ ...styles.title, marginTop: 0 }}
                    onPress={() => navigation.goBack()}
                />

            </View>
        )
    }

    // main return
    return (
        <View style={styles.container}>

            {renderHeader()}

            {/* Title */}

            <Text style={styles.mainHeading}>Your Result</Text>

            {renderBody()}

            {renderFooter()}
        </View>
    )
}

export default BMIResult

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: Size.width * 0.03
    },
    title: {
        fontSize: 24,
        color: COLORS.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainHeading: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: Size.height * 0.04,
        color: COLORS.white
    },
    body: {
        marginTop: Size.height * 0.05,
        borderRadius: 7,
        backgroundColor: COLORS.secondary,
        height: Size.height * 0.5,
        borderWidth: 1,
        paddingVertical: Size.height * 0.05,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    resultText: {
        color: COLORS.green,
        fontSize: 28,
        fontWeight: 'bold'
    },
    measureNum: {
        fontWeight: 'bold',
        fontSize: 38,
        color: COLORS.white
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonContainerStyle: {
        backgroundColor: COLORS.secondary2,
        height: Size.height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }

})