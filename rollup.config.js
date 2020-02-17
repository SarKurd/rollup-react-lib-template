import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/bundle.esm.js',
            format: 'esm',
            sourcemap: true,
        },
        {
            file: 'dist/bundle.umd.js',
            format: 'umd',
            sourcemap: true,
        },
    ],
    plugins: [resolve(), commonjs(), production && terser()],
};
