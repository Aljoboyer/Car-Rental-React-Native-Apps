import { typography } from '../../theme/typography'

const THIN = {
    fontFamily: typography.Light,
    fontSize: 16,
}

const BASE = {
    fontFamily: typography.Reguler,
    fontSize: 16
}

const BOLD = {
    fontFamily: typography.Bold,
    fontSize: 16
}

const TITLE = {
    fontFamily: typography.Title,
    fontSize: 16
}

export const presets = {
    default: THIN,
    title1: {
        ...TITLE,
        fontSize: 35
    },
    title2: {
        ...TITLE,
        fontSize: 27
    },
    title3: {
        ...TITLE,
        fontSize: 22
    },
    title4: {
        ...TITLE,
        fontSize: 18
    },
    h1: {
        ...BOLD,
        fontSize: 34
    },
    h2: {
        ...BOLD,
        fontSize: 27
    },
    h3: {
        ...BOLD,
        fontSize: 24
    },
    h4: {
        ...BASE,
        fontSize: 20
    },
    h5: {
        ...BASE,
        fontSize: 18
    },
    h6: {
        ...BASE,
        fontSize: 16
    },
    p: {
        ...BASE,
        fontSize: 14
    },
    small: {
        ...THIN,
        fontSize: 12
    }
}