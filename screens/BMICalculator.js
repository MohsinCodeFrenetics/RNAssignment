import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, images, Size } from '../constants'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { IconButton, TextButton } from '../components';

const BMICalculator = ({ navigation }) => {

    // states

    const [height, setHeigth] = useState(1)
    const [weight, setWeight] = useState(10)
    const [age, setAge] = useState(7)
    const [gender, setGender] = useState('male')


    // handlers

    const calculateBMI = (weight, height) => {
        let result = (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height))
        result = result.toFixed(2)

        if (result < 18.5) {
            return {
                result,
                msg: 'Underweight'
            }
        }
        else if (result >= 18.5 && result < 25) {
            return {
                result,
                msg: 'Normal weight'
            }
        }
        else if (result >= 25 && result < 30) {
            return {
                result,
                msg: 'Overweight'
            }
        }
        else if (result >= 30) {
            return {
                result,
                msg: 'Obese'
            }
        }
        else {
            alert('Incorrect Input!')
            return 0
        }
    }


    // UI/UX

    const renderGenderSelection = () => {
        return (
            <View style={styles.boxContainer}>

                {/* male */}

                <TouchableOpacity style={{
                    ...styles.box,
                    backgroundColor: gender === "male" ? COLORS.secondary : COLORS.primary2
                }}
                    onPress={() => setGender('male')}
                >
                    <Image
                        source={images.male}
                        style={styles.imageStyle}
                        resizeMode='contain'
                    />
                    <Text style={styles.subText}>Male</Text>
                </TouchableOpacity>

                {/* female */}

                <TouchableOpacity
                    style={{
                        ...styles.box,
                        backgroundColor: gender === "female" ? COLORS.secondary : COLORS.primary2
                    }}
                    onPress={() => setGender('female')}
                >
                    <Image
                        source={images.female}
                        style={styles.imageStyle}
                        resizeMode='contain'
                    />
                    <Text style={styles.subText}>Female</Text>
                </TouchableOpacity>
            </View>

        )
    }

    const renderHeightSection = () => {

        return (
            <View style={styles.heightSection}>

                {/* title */}
                <Text style={styles.heigthTitle}>Height</Text>

                {/* height cm */}

                <Text style={styles.heightCM}>{height} {''}
                    <Text style={styles.subText}>cm</Text>
                </Text>

                <MultiSlider
                    min={1}
                    max={300}
                    markerStyle={styles.markerStyle}
                    selectedStyle={{ backgroundColor: COLORS.secondary2 }}
                    onValuesChange={(val) => {
                        setHeigth(val[0])
                    }}
                />

            </View>
        )
    }

    const renderWeightAndAge = () => {
        return (
            <View style={styles.boxContainer}>

                {/* weight box */}

                <View style={styles.box}>

                    <Text style={styles.textStyle}>Weight</Text>
                    <Text style={styles.numText}>{weight}</Text>

                    <View style={styles.row}>

                        {/* Add btn */}

                        <IconButton
                            icon={images.plus}
                            containerStyle={styles.btnBg}
                            iconContainerStyle={{
                                tintColor: COLORS.white
                            }}
                            onPress={() => {
                                setWeight(weight + 1)
                            }}
                        />

                        {/* Minus btn */}

                        <IconButton
                            icon={images.minus}
                            containerStyle={styles.btnBg}
                            iconContainerStyle={{
                                tintColor: COLORS.white
                            }}
                            onPress={() => {
                                if (weight !== 1)
                                    setWeight(weight - 1)
                            }}
                        />
                    </View>


                </View>

                {/* age  */}
                <View style={styles.box}>
                    <Text style={styles.textStyle}>Age</Text>
                    <Text style={styles.title}>{age}</Text>

                    <View style={styles.row}>

                        {/* Add btn */}

                        <IconButton
                            icon={images.plus}
                            containerStyle={styles.btnBg}
                            iconContainerStyle={{
                                tintColor: COLORS.white
                            }}
                            onPress={() => {
                                setAge(age + 1)
                            }}
                        />

                        {/* Minus btn */}

                        <IconButton
                            icon={images.minus}
                            containerStyle={styles.btnBg}
                            iconContainerStyle={{
                                tintColor: COLORS.white
                            }}
                            onPress={() => {
                                if (age !== 1)
                                    setAge(age - 1)
                            }}
                        />
                    </View>
                </View>

            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View style={styles.footer}>

                <TextButton
                    label={"Calculate"}
                    buttonContainerStyle={styles.buttonContainerStyle}
                    labelStyle={{ ...styles.title, marginTop: 0 }}
                    onPress={() => {
                        const resp = calculateBMI(weight, height)
                        if (resp !== 0) {
                            console.log(resp)
                            navigation.navigate('bmiResult', { bmiResponse: resp })
                        }
                    }}
                />

            </View>
        )
    }

    // main return
    return (
        <View style={styles.container}>

            {/* Title */}
            <Text style={styles.title}>BMI Calculator</Text>

            {renderGenderSelection()}

            {renderHeightSection()}

            {renderWeightAndAge()}

            {renderFooter()}
        </View>

    )
}

export default BMICalculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Size.width * 0.03
    },
    title: {
        marginTop: 10,
        fontSize: 24,
        color: COLORS.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Size.height * 0.05,
    },
    box: {
        width: Size.width * 0.42,
        height: Size.height * 0.20,
        borderRadius: 10,
        backgroundColor: COLORS.secondary,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Size.height * 0.02
    },
    imageStyle: {
        width: Size.width * 0.2,
        height: Size.height * 0.1,
        tintColor: COLORS.white,
        flex: 1
    },
    subText: {
        color: COLORS.silver,
        fontSize: 12,
        marginTop: 5
    },
    textStyle: {
        color: COLORS.silver,
        fontSize: 18,
        marginTop: 5
    },
    heightSection: {
        marginTop: Size.height * 0.03,
        backgroundColor: COLORS.secondary,
        width: '100%',
        height: Size.height * 0.20,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: Size.height * 0.02
    },
    heigthTitle: {
        color: COLORS.silver
    },
    heightCM: {
        marginTop: 5,
        fontSize: 40,
        color: COLORS.white,
        fontWeight: 'bold'
    },
    markerStyle: {
        backgroundColor: COLORS.secondary2,
        width: Size.width * 0.06,
        height: Size.height * 0.03
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    numText: {
        fontSize: 26,
        color: COLORS.white,
        fontWeight: 'bold',
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
    },
    btnBg: {
        height: Size.height * 0.05,
        width: Size.width * 0.10,
        justifyContent: 'center',
        borderRadius: Size.width * 0.05,
        alignItems: 'center',
        backgroundColor: COLORS.silver,
    }
})
