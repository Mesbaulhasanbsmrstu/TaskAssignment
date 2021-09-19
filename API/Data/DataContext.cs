using Microsoft.EntityFrameworkCore;
using API.Entities;
namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
   
     public DbSet<Employees> userEmployee{get;set;}
     public DbSet<TADAHistory> history{get;set;}
    }
}