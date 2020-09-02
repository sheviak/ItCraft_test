using AutoMapper;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using UserProfiles.Api.Core;
using UserProfiles.Api.ViewModels;

namespace UserProfiles.Api.Controllers
{
    [Authorize]
    [Route("api/users")]
    public class UserController : Controller
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IMapper mapper;

        public UserController(UserManager<ApplicationUser> userManager, IMapper mapper)
        {
            this.userManager = userManager;
            this.mapper = mapper;
        }

        [HttpGet("")]
        public IActionResult GetAllUsers()
        {
            var users = this.userManager.Users.ToList();
            var usersVm = this.mapper.Map<IEnumerable<UserViewModel>>(users);

            return Ok(usersVm);
        }
    }
}