exports["@get"] = exports["@post"] = exports["@put"] = exports["@d"] = (params,ctx)=>{ return {method : ctx.method,ip: ctx.ip,originUrl: ctx.originUrl,params: ctx.params,headers: ctx.headers}}