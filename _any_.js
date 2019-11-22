var fn =  (params,ctx)=>{
	var msg = {
		method : ctx.method,
		ip: ctx.ip,
		originUrl: ctx.originUrl,
		params: ctx.params,
		headers: ctx.headers
	}
	return msg
}

module.exports={

	"@get" : fn,
	"@post":fn,
	"@put":fn,
	"@d" : fn
}
