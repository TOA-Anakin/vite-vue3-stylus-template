import path from 'path'

export function importStylus() {
    return {
        name: 'vite-stylus-import-plugin',
        async transform(code, id) {
            if (/.stylus$/g.test(id)) {
                return {
                    code: `
                        @import "${path.resolve(__dirname, 'src/assets/global_variables.styl')}"

                        ${code}
                    `,
                    map: null,
                }
            }
            return null
        }
    }
}