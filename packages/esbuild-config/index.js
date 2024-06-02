const {build} = require('esbuild')

const run = ({
    entryPoints = ['src/index.ts'],
    pkg,
    config = {}
}) => {
    const dev = process.argv.includes("--dev");
    const minify = !dev;

    const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
    });

    const baseConfig = {
        entryPoints,
        bundle: true,
        minify, // dev 환경일 때는 minify 실행하지 않도록 함
        sourcemap: true,
        outdir: "dist",
        target: "es2019",
        external,
        ...config
    };

    // 병렬적으로 실행시키기 위해 Promise.all 사용
    // commonjs es module 두가지 모두 제공
    Promise.all([
        build({
            ...baseConfig,
            format: "esm",
        }),
        build({
            ...baseConfig,
            format: "cjs",
            outExtension: { ".js": ".cjs" },
        }),
        ]).catch((data) => {
        console.error(data, "Build failed");
        process.exit(1);
    });
}

module.exports = run