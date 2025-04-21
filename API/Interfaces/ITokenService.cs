using System;
using API.Entities;

namespace API;

public interface ITokenService
{
    string CreateToken(AppUser user);
}
