using System.ComponentModel.DataAnnotations;

namespace UserProfiles.Api.ViewModels
{
    public class RegisterViewModel : LoginViewModel
    {
        [Required]
        [MaxLength(255)]
        public string Fio { get; set; }

        [Required]
        [Compare("Password")]
        [MaxLength(255)]
        public string ConfirmPassword { get; set; }
    }
}