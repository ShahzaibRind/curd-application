import { extendTheme } from '@chakra-ui/react'
const theme = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
  styles: {
    global: {
        body: {
            margin: 0,
            "font-family":
            `'Open Sans', sans-serif`
            `'Raleway', sans-serif`,
        }
    }
  }
}
export default extendTheme(theme)