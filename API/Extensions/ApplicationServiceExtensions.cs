using API.Data;
using API.Interfaces;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static void AddApplicationService(this IServiceCollection services,IConfiguration config)
        {
          

            services.AddDbContext<DataContext>(options =>
                {
                    //options.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
options.UseSqlite(config.GetConnectionString("DefaultConnection"));

                }
            );
        }
    }
}