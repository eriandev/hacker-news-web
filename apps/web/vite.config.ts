import url from 'node:url'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(url.fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      __mocks__: path.resolve(dirname, './__mocks__')
    }
  },
  test: {
    environment: 'happy-dom'
  }
})
