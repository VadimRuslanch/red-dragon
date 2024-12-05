import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Checker from 'vite-plugin-checker'
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        Checker({typescript: true, vueTsc: true})
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
