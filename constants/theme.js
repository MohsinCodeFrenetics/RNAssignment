import { Dimensions } from "react-native"

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const primary = 'rgba(9,14,33,255)'
const primary2='rgba(17,19,40,255)'
const secondary = 'rgba(29,30,51,255)'
const secondary2 = 'rgba(235,21,85,255)'
const green = 'rgba(54,178,126,255)'
const white = 'white'
const silver = 'rgba(92,93,111,255)'


const COLORS = { primary, secondary, secondary2, green, white, silver ,primary2}
const Size = { width, height }
export {
    COLORS,
    Size
}
