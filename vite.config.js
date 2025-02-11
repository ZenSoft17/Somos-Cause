import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import MillionLint from '@million/lint'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), MillionLint.vite()],
	server: {
		port: 3460,
	},
	base: '/Somos-Cause/',
})
