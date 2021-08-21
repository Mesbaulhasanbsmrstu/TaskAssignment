using Microsoft.AspNetCore.Mvc;
using API.Data;
using System.Collections.Generic;
using API.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DataContext context;
        public UserController(DataContext context)
        {
            this.context = context;

        }
     [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await  context.Users.ToListAsync();
       
        }

       
    

     [HttpGet("{id}")]
        public async Task< ActionResult<AppUser>> GetUsers(int id)
        {
           return await context.Users.FindAsync(id);
          
        }

       
    }
}
