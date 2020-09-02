using System.ComponentModel.DataAnnotations;

namespace UserProfiles.Api.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        [MaxLength(255)]
        public string Email { get; set; }

        [Required]
        [MaxLength(255)]
        public string Password { get; set; }
    }
}