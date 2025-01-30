import type { Blueprint } from 'vuetify'

export const nuxtUi: Blueprint = {
    defaults: {
        global: {},
        VBtn: {
            rounded: 'pill'
        }
    },
    aliases: {

    },
    components: {
        
    },
    date: {
        // adapter
        // formats
        // locale
    },
    directives: {},
    display: {},
    goTo: {},
    theme: {
        themes: {
            light: {
                colors: {
                    'primary': '#0EA5E9',
                },
                variables: {
                    'rounded-pill': '9999px',
                    'body-font-family': 'DM Sans',
                    'heading-font-family': 'DM Sans',
                    'background-radial-gradient': 'radial-gradient(50% 50% at 50% 50%, #0ea5e940 0, #fff);',
                    'background-image': 'linear-gradient(to right, #e5e7eb .5px, transparent .5px), linear-gradient(to bottom, #e5e7eb .5px, transparent .5px);',
                    'background-size': '100px 100px',
                    /* 
                            background-image: linear-gradient(to right, #e5e7eb .5px, transparent .5px), linear-gradient(to bottom, #e5e7eb .5px, transparent .5px);
                            background-size: 100px 100px;
                    */
                   /* 
                    background: 
                     */
                }
            },
            dark: {
                dark: true,
                colors: {
                    'primary': '#0EA5E9',
                    background: 'rgba(0, 0, 0, 0.05)'
                }
            }, 
        }
    },
    icons: {},
    locale: {},
}