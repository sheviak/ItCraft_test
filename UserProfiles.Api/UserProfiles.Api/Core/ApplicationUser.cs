using Microsoft.AspNetCore.Identity;

namespace UserProfiles.Api.Core
{
    public class ApplicationUser : IdentityUser
    {
        public string Fio { get; set; }
    }
}