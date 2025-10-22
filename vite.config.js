import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'node:url'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

const projectRootDir = path.dirname(fileURLToPath(import.meta.url))

function copyIndexForRuRoute() {
  return {
    name: 'copy-index-for-ru-route',
    apply: 'build',
    async closeBundle() {
      const distDir = path.resolve(projectRootDir, './dist')
      const indexHtmlPath = path.join(distDir, 'index.html')
      const ruDir = path.join(distDir, 'ru')
      const ruIndexPath = path.join(ruDir, 'index.html')

      try {
        const html = await readFile(indexHtmlPath, 'utf8')
        await mkdir(ruDir, { recursive: true })
        await writeFile(ruIndexPath, html, 'utf8')
      } catch (error) {
        if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
          this.warn(
            `Skipped creating /ru fallback page because ${indexHtmlPath} was not found. Run the build before deploying.`,
          )
          return
        }

        throw error
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyIndexForRuRoute()],
  resolve: {
    alias: {
      '@': path.resolve(projectRootDir, './src')
    },
  },
})
