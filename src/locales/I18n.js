import I18n from 'react-native-i18n'
import moment from 'moment'
import de from './locales/de'
import en from './locales/en'

// Import moment locales
require('moment/locale/de.js')
require('moment/locale/en-gb.js')

I18n.fallbacks = true
I18n.defaultLocale = 'de'
I18n.locale = 'de'

moment.locale(I18n.locale)

I18n.translations = {
  de,
  en,
}

export default I18n
