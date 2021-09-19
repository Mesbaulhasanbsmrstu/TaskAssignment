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
    public class EmployeesController:BaseApiController
    {
        private readonly DataContext context;
        public EmployeesController(DataContext context)
        {
            this.context = context;

        }
         [HttpGet]
     [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Employees>>> GetUsers()
        {
            return await  context.userEmployee.ToListAsync();
       
        }
    }
}