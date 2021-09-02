using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Hosting;
using System.Net;
using API.Errors;
using System.Text.Json;
namespace API.MiddleWare
{
    public class ExceptionMiddleware
    {
        private readonly IHostEnvironment env;
        private readonly RequestDelegate next;
        private readonly ILogger<ExceptionMiddleware> logger;
        public ExceptionMiddleware(RequestDelegate next,ILogger<ExceptionMiddleware> logger,IHostEnvironment env)
        {
            this.logger = logger;
            this.next = next;
            this.env = env;

        }

        public async Task InvokeAsync(HttpContext context)
        {
            try{
                await next(context);
            }catch(Exception ex)
            {
                logger.LogError(ex,ex.Message);
                context.Response.ContentType="application/json";
                context.Response.StatusCode=(int) HttpStatusCode.InternalServerError;
                var response=env.IsDevelopment()?new ApiException(context.Response.StatusCode,ex.Message,ex.StackTrace?.ToString()):
                new ApiException(context.Response.StatusCode,"Internal Server Error");
                var options=new JsonSerializerOptions{PropertyNamingPolicy=JsonNamingPolicy.CamelCase};
                var json=JsonSerializer.Serialize(response,options);
                await context.Response.WriteAsync(json);
            }

        }
    }
}