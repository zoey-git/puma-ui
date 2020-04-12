import PmTag from './src/tag'

PmTag.install = function(Vue) {
    Vue.component(PmTag.name, PmTag)
}

export default PmTag