using OrchardCore.DisplayManagement.Manifest;

[assembly: Theme(
    Name = "Admin Theme",
    Author = "EtchUK Ltd.",
    Website = "https://etchuk.com/",
    Version = "$(VersionNumber)",
    Description = "Extension of TheAdmin theme.",
    Tags = new[] { "admin" },
    BaseTheme = "TheAdmin"
)]