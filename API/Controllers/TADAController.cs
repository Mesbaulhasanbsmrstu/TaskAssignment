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
using System;
using API.Entities;

namespace API.Controllers
{
    public class TADAController: BaseApiController
    {
        private readonly DataContext context;
        private readonly DataContext context1;
      
        public TADAController(DataContext context)
        {
            this.context = context;
            this.context1=context;

        }
         [HttpGet]
     [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<TADAHistory>>> GetHistory()
        {
           List<TADAHistory> history=await  context.history.ToListAsync();
           int length=history.Count;
           // return await  context.history.ToListAsync();
            for(int i=0;i<length;i++)
            {
                for(int j=i+1;j<length;j++)
                {
                    TADAHistory temp;
                    if( DateTime.Parse(history[j].date)>DateTime.Parse(history[i].date))
                    {
                            temp=history[i];
                            history[i]=history[j];
                            history[j]=temp;

                    }else if( DateTime.Parse(history[j].date)==DateTime.Parse(history[i].date))
                    {
                        if(history[i].paid==1&&history[j].paid==0)
                        {
                            temp=history[i];
                            history[i]=history[j];
                            history[j]=temp; 
                        }
                    }
                }

            }
            return history;
        }

         [HttpPost("add")]
        public async Task<ActionResult<TadaAddResponseDto>> Add(TADADto tadaDto)


        {
            
           
            try{
                 var history = new TADAHistory()
            {
                date=tadaDto.date,
                Name=tadaDto.name,
                travelCost=tadaDto.travelCost,
                lunchCost=tadaDto.lunchCost,
                instrumentsCost=tadaDto.instrumentsCost,
                totalCost=(Convert.ToDouble(tadaDto.travelCost)+Convert.ToDouble(tadaDto.lunchCost)+Convert.ToDouble(tadaDto.instrumentsCost)).ToString(),
                paid=tadaDto.paid
               
            };
                context.history.Add(history);
            await context.SaveChangesAsync();
            return new TadaAddResponseDto()
            {
                message="success"
                
            };
            }catch(Exception e)
            {
             return new TadaAddResponseDto()
            {
                message="fail"
                
            };
            }
        }

        [HttpPut("{id}")]  
       
        public async Task<ActionResult<TadaAddResponseDto>> Pay(int id)  
        {  
            //return objemployee.UpdateEmployee(employee);
            TADAHistory history= await context.history.FindAsync(id);
          
                var tadaHistory = new TADAHistory()
            {   id=history.id,
                date=history.date,
                Name=history.Name,
                travelCost=history.travelCost,
                lunchCost=history.lunchCost,
                instrumentsCost=history.instrumentsCost,
                totalCost=history.totalCost,
                paid=1
               
            };
            
      
              

        }

    }
}