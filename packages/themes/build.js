import run from '@design-system/esbuild-config'
import pkg from './package.json' assert {type: 'json'}

run({
    pkg
})