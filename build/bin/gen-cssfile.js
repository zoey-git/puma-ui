const fs = require('fs')
const path = require('path')
const Components = Object.keys(require('../../components.json'))
const themes = [
    'theme-chalk'
]

const base_path = path.resolve(__dirname, '../../packages/')

function fileExists(filePath) {
    try {
        return fs.statSync(filePath).isFile()
    } catch (error) {
        return false
    }
}

themes.forEach(theme => {
    const isScss = theme !== 'theme-default'
    let indexContent = isScss ? '@import "./base.scss";\n' : '@import "./base.css";\n'
    Components.forEach(key => {
        if (['icon', 'option', 'option-group'].indexOf(key) > -1) return
        // tag.scss
        const fileName = key + (isScss ? '.scss' : '.css')
        indexContent += `@import "./${fileName}";\n`
        const filePath = path.resolve(base_path, theme, 'src', fileName)
        if (!fileExists(filePath)) {
            fs.writeFileSync(filePath, '', 'utf8')
            console.log(theme, '创建遗漏的', fileName, '文件');
        }
    })
    fs.writeFileSync(path.resolve(base_path, theme, 'src', isScss ? 'index.scss' : 'index.css'), indexContent)
})