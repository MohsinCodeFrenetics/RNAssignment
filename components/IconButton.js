import { TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'

const IconButton = ({
    containerStyle,
    onPress,
    icon,
    iconContainerStyle
}) => {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                style={{
                    width: 18,
                    height: 18,
                    ...iconContainerStyle
                }}
                source={icon}
            />
        </TouchableOpacity>
    )
}

export default memo(IconButton)