using Microsoft.AspNetCore.Mvc;
using API.Data;
using System.Collections.Generic;
using API.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
   
    public class UserController : BaseApiController
    {
        private readonly DataContext context;
        public UserController(DataContext context)
        {
            this.context = context;

        }
     [HttpGet]
     [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await  context.Users.ToListAsync();
       
        }

       
    //mesba
     [Authorize]
     [HttpGet("{id}")]
        public async Task< ActionResult<AppUser>> GetUsers(int id)
        {
           return await context.Users.FindAsync(id);
          
        }

       
    }
}
