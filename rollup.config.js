import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default({
    input: "public/js/main.js",
    output: {
        file: "public/builds/bundle.js",
        format: "umd"
    },
    plugins: [
        terser(),
        babel({
            exclude: "node_modules/**"
        })
    ]
});
