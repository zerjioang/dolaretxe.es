import { loadLanguageAsync } from '@/i18n'
/*
async load of i18n translations
*/
function asyncI18n(router) {
    if (router) {
        router.beforeEach((to, from, next) => {
            const lang = to.params.lang
            loadLanguageAsync(lang).then(() => next())
        })
    }
}

export {
    asyncI18n,
}