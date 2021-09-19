using Microsoft.AspNetCore.Mvc;
using API.Data;
using System.Collections.Generic;
using API.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System;
namespace API.Controllers
{
    public class BuggyController:BaseApiController
    {
     
        private readonly DataContext context;
       
      public BuggyController(DataContext context)
      {
            this.context = context;
            
    } 
    [Authorize]
    [HttpGet("auth")]
    public ActionResult<string> GetSecret()
    {
        return "Secrete text";
    } 


    [HttpGet("not-found")]
    public ActionResult<Employees> GetNotFound()
    {
        var things=this.context.userEmployee.Find(-1);
        if(things==null)return NotFound();
        return Ok(things);
    }

 
    [HttpGet("server-error")]
    public ActionResult<string> GetServerError()
    {
        var things=this.context.userEmployee.Find(-1);
         if(things==null) return  StatusCode(500,"no");
       return Convert.ToString(things); 
          
          
       

    } 

    
    [HttpGet("bad-request")]
    public ActionResult<string> GetBadRequest()
    {
        return BadRequest("This is not a good request");
    } 

    
    }
}