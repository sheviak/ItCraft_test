using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using UserProfiles.Dal.Core;

namespace UserProfiles.Dal.Context
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ApplicationUser>()
                .Property(x => x.Fio)
                .HasMaxLength(255)
                .IsRequired();

            builder.Entity<ApplicationUser>()
                .Property(x => x.PasswordHash)
                .HasMaxLength(255);

            builder.Entity<ApplicationUser>()
                .Property(x => x.Email)
                .HasMaxLength(255);

            builder.Entity<ApplicationUser>()
                .Property(x => x.NormalizedEmail)
                .HasMaxLength(255);

            base.OnModelCreating(builder);
        }
    }
}