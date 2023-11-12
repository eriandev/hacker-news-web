import AtomicTailwindConfig from 'atomic/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/atomic/**/*.{ts,tsx}'
  ],
  theme: AtomicTailwindConfig.theme,
  plugins: []
}

export default config
