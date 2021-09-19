using API.Data;
using API.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Security.Cryptography;
using API.Dto;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Linq;
namespace API.Controllers
{
    public class TADAController: BaseApiController
    {
        private readonly DataContext context;
        public TADAController(DataContext context)
        {
            this.context = context;

        }
         [HttpGet]
     [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<TADAHistory>>> GetHistory()
        {
            return await  context.history.ToListAsync();
       
        }

         [HttpPost("add")]
        public async Task<ActionResult<TadaAddResponseDto>> Add(TADADto tadaDto)


        {
            
            var history = new TADAHistory()
            {
                date=tadaDto.date,
                Name=tadaDto.Name,
                travelCost=tadaDto.travelCost,
                lunchCost=tadaDto.lunchCost,
                instrumentsCost=tadaDto.instrumentsCost,
                paid=tadaDto.paid
               
            };
            context.history.Add(history);
            await context.SaveChangesAsync();
            return new TadaAddResponseDto()
            {
                message="Sucsess"
                
            };
        }
    }
}