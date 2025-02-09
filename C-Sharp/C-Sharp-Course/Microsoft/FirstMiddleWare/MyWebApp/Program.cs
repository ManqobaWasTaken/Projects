using Microsoft.AspNetCore.Rewrite;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.Use(async (context, next) =>
{  
    await next(); 
    Console.WriteLine($"{context.Request.Method} {context.Request.Path} {context.Response.StatusCode}");
});
app.UseRewriter(new RewriteOptions().AddRedirect("history","about"));

app.MapGet("/", () => "Hello to Contoso!");
//Adds a Url Rewriter middleware that redirects requests from /history to /about
//AddRediect() takes in two parameters regex epression path to match the request path and the replacement path to redirect to

app.MapGet("/about",()=>"Contoso was founded in 2000!");
//This is a middleware for logging requestsht

app.Run();
