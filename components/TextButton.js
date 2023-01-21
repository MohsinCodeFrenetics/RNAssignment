import React, { memo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { COLORS } from '../constants'


const TextButton = ({
    label,
    labelStyle,
    buttonContainerStyle,
    onPress,
    disabled = false,
    PrependComponent
}) => {
    return (
        <TouchableOpacity
            style={buttonContainerStyle}
            onPress={onPress}
            disabled={disabled}
        >
            {PrependComponent}

            <Text
                style={{
                    color: COLORS.white,
                    ...labelStyle
                }}
            >
                {label}
            </Text>

        </TouchableOpacity>
    )
}

export default memo(TextButton)