using Microsoft.AspNetCore.Identity;

namespace UserProfiles.Dal.Core
{
    public class ApplicationUser : IdentityUser
    {
        public string Fio { get; set; }
    }
}