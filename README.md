# Admin Theme

Custom admin theme for [Orchard Core](https://github.com/orchardcms/OrchardCore) that uses [TheAdmin](https://github.com/OrchardCMS/OrchardCore/tree/dev/src/OrchardCore.Themes/TheAdmin) as a base theme. Primary purpose is to apply customisations and bug fixes for the admin area between major updates of Orchard Core.

## Build Status

[![Build Status](https://secure.travis-ci.org/etchuk/Etch.OrchardCore.AdminTheme.png?branch=master)](http://travis-ci.org/etchuk/Etch.OrchardCore.AdminTheme) [![NuGet](https://img.shields.io/nuget/v/Etch.OrchardCore.AdminTheme.svg)](https://www.nuget.org/packages/Etch.OrchardCore.AdminTheme)

## Orchard Core Reference

This module is referencing the RC1 build of Orchard Core ([`1.0.0-rc1-10004`](https://www.nuget.org/packages/OrchardCore.Theme.Targets/1.0.0-rc1-10004)).

## Installing

This module is available on [NuGet](https://www.nuget.org/packages/Etch.OrchardCore.AdminTheme). Add a reference to your Orchard Core web project via the NuGet package manager. Search for "Etch.OrchardCore.AdminTheme", ensuring include prereleases is checked.

Alternatively you can [download the source](https://github.com/etchuk/Etch.OrchardCore.AdminTheme/archive/master.zip) or clone the repository to your local machine. Add the project to your solution that contains an Orchard Core project and add a reference to Etch.OrchardCore.AdminTheme.

## Fixes

Below is a list of fixes that have been applied. These should be checked each time there is a new version of Orchard Core as they will likely be resolved and can be reverted.

- Fix flow editor not collapsing/expanding when editing `BagPart` (https://github.com/OrchardCMS/OrchardCore/pull/4389)

## Development

### Prerequisities

#### [.NET Core](https://docs.microsoft.com/en-us/dotnet/core/)

Orchard Core runs on the .NET Core. Download the latest version from [https://www.microsoft.com/net/download/core](https://www.microsoft.com/net/download/core).

#### Packaging

When the theme is compiled (using `dotnet build`) it's configured to generate a `.nupkg` file (this can be found in `\bin\Debug\` or `\bin\Release`).