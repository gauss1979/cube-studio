import { TThemeType } from "./theme"

const appLogo = require('./images/lingxipt.svg')
const loadingLogo = require('./images/lingxipt.svg')

interface IGlobalConfig {
    appLogo: any,
    loadingLogo: any,
    theme: TThemeType,
}

const globalConfig: IGlobalConfig = {
    appLogo,
    loadingLogo,
    theme: 'star',
}

export default globalConfig