import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';

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
            name: 'reactUi',
            file: 'dist/bundle.umd.js',
            format: 'umd',
            globals: {
                react: 'React',
            },
            sourcemap: true,
        },
    ],
    external: ['react'],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
        }),
        commonjs(),
        production && terser(),
        filesize(),
    ],
};
