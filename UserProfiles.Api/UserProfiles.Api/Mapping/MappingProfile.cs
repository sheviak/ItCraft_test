using AutoMapper;
using UserProfiles.Api.ViewModels;
using UserProfiles.Api.Core;

namespace UserProfiles.Api.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<RegisterViewModel, ApplicationUser>()
                .ForMember(x => x.UserName, x => x.MapFrom(x => x.Email));

            CreateMap<ApplicationUser, UserViewModel>();
        }
    }
}