using API.Data;
using API.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Security.Cryptography;
using API.DTOs;
using API.Interfaces;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext context;
        public readonly ITokenService tokenService;
        public AccountController(DataContext context, ITokenService tokenService)
        {
            this.tokenService = tokenService;
            this.context = context;

        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)


        {
            if (await UserExists(registerDto.Username))
                return BadRequest("UserName has taken");
            using var hmac = new HMACSHA512();
            var user = new AppUser()
            {
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };
            context.Users.Add(user);
            await context.SaveChangesAsync();
            return new UserDto()
            {
                Username=user.UserName,
                Token=tokenService.CreateToken(user)
            };
        }


        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);
            if (user == null)
            {
                return Unauthorized("InValid UserName");
            }
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            for (int i = 0; i < computeHash.Length; i++)
            {
                if (computeHash[i] != user.PasswordHash[i])
                    return Unauthorized("InValid Password");

            }
            var token=tokenService.CreateToken(user);
             return new UserDto()
            {
                Username=user.UserName,
                Token=tokenService.CreateToken(user)
            };

        }
        private async Task<bool> UserExists(string username)
        {
            return await context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }


    }
}