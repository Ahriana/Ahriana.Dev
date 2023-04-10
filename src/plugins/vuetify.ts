/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides



export default createVuetify({
  theme: {
    defaultTheme: 'ahriana',
    themes: {
      ahriana: {
        dark: true,
        colors: {
          background: '#1E1E1E',
          primary: '#9F2B68'
        }
      }
    },
  },
})
