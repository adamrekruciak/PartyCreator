﻿namespace PartyCreatorWebApi.Dtos
{
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Birthday { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }
}
