import Tag from './tag/index'
import Input from './input/index'

const components = [
    Tag,
    Input
]

const install = function(Vue, opts = {}) {
    if (install.installed) return 
    install.installed = true
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ...components
}