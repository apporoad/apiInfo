# apiInfo
auto return all api info  
apiInfo 帮你发现中间代理层给你施加的魔法

# plz use aok

```bash
npm i -g aok.js

aok https://github.com/apporoad/apinfo.js.git -p 10000

rm -rf .aok

# now just visit it with postman

```

or 

```bash
mkdir temp
cd temp

cat << EOF > _any_.js
exports["@get"] = exports["@post"] = exports["@put"] = exports["@d"] = (params,ctx)=>{ return {method : ctx.method,ip: ctx.ip,originUrl: ctx.originUrl,params: ctx.params,headers: ctx.headers}}
EOF

aok .
```