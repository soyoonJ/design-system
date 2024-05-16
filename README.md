# npm init

- project name
- version 0.0.0

# .gitignore

- gitignore 자동생성
  https://www.toptal.com/developers/gitignore

# packages/themes 폴더 생성

- npm init
  - project name @프로젝트명/themes
- packages/themes/src 폴더 생성
- packages/themes/src/index.js 생성

# esbuild

- 설치
  npm install -D esbuild
- 세팅
  공식문서 : "build": "esbuild app.jsx --bundle --outfile=out.js"
  변경 : "build": "esbuild src/index.js --minify --format=cjs --bundle --outfile=dist/index.js"

--minify : minify 하기
--format=cjs : cjs로 만들기

# build.js

```javascript
import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: "dist",
  format: "esm",
});
```

package.json에 type module 추가 (es module을 사용하기 위해. 기본이 commonjs라 추가해야 함)
"type": "module",

# tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "target": "ESNext",
    "module": "ESNext",
    "lib": ["ESNext", "DOM"],
    "declaration": true,
    "strict": true,
    "moduleResolution": "node",
    "jsx": "react-jsx"
  }
}
```

# install typescript

npm install -D typescript
package.json scripts에 추가

```
"build:type": "tsc --emitDeclarationOnly"
```
