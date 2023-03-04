import react from '@vitejs/plugin-react'
import fs from 'fs/promises'
import { defineConfig, loadEnv } from 'vite'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

    return defineConfig({
        esbuild: {
            loader: 'jsx',
            include: /src\/.*\.jsx?$/,
            // loader: "tsx",
            // include: /src\/.*\.[tj]sx?$/,
            exclude: [],
        },
        optimizeDeps: {
            esbuildOptions: {
                plugins: [
                    {
                        name: 'load-js-files-as-jsx',
                        setup(build) {
                            build.onLoad(
                                { filter: /src\/.*\.js$/ },
                                async (args) => ({
                                    loader: 'jsx',
                                    contents: await fs.readFile(
                                        args.path,
                                        'utf8'
                                    ),
                                })
                            )
                        },
                    },
                ],
            },
        },
        plugins: [react()],
        base: './',
        define: {
            'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version),
        },
    })
}
