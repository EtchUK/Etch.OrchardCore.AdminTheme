# PlayCMS Admin Theme

Custom admin theme for [Orchard Core](https://github.com/orchardcms/OrchardCore) that uses [TheAdmin](https://github.com/OrchardCMS/OrchardCore/tree/dev/src/OrchardCore.Themes/TheAdmin) as a base theme and applies PlayCMS customisations, plus some bug fixes between major updates of Orchard Core.

## Build Status

[![Build Status](https://secure.travis-ci.org/etchuk/Etch.OrchardCore.AdminTheme.png?branch=master)](http://travis-ci.org/etchuk/Etch.OrchardCore.AdminTheme) [![NuGet](https://img.shields.io/nuget/v/Etch.OrchardCore.AdminTheme.svg)](https://www.nuget.org/packages/Etch.OrchardCore.AdminTheme)

## Orchard Core Reference

This module is referencing a stable build of Orchard Core ([`1.3.0`](https://www.nuget.org/packages/OrchardCore.Theme.Targets/1.3.0)).

## Installing

This module is available on [NuGet](https://www.nuget.org/packages/Etch.OrchardCore.AdminTheme). Add a reference to your Orchard Core web project via the NuGet package manager. Search for "Etch.OrchardCore.AdminTheme", ensuring include prereleases is checked.

Alternatively you can [download the source](https://github.com/etchuk/Etch.OrchardCore.AdminTheme/archive/master.zip) or clone the repository to your local machine. Add the project to your solution that contains an Orchard Core project and add a reference to Etch.OrchardCore.AdminTheme.

## Enhancements

### Bag/Flow Editor

Out the box the flow editor is difficult to use when there are a large number of widgets. To fix this the theme will override the `BagPart`/`FlowPart` edit template to use a modal with categories/search (replicating workflows) as pitched in an [issue created in the Orchard Core repository](https://github.com/OrchardCMS/OrchardCore/issues/3558).

To make this work effectively the content definitions for widgets on the sites must include a `Category`, `Description` & `Icon` (using icon name from [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free)). This can be done by running a recipe to update the content definitions, below is a small example to give an idea.

```
{
    "name": "Definitions",
    "displayName": "Definitions",
    "description": "",
    "version": "0.0.1",
    "issetuprecipe": false,
    "steps": [
        {
            "name": "ContentDefinition",
            "ContentTypes": [
                {
                    "Name": "Paragraph",
                    "DisplayName": "Paragraph",
                    "Settings": {
                        "ContentTypeSettings": {
                            "Stereotype": "Widget"
                        },
                        "Category": "Content",
                        "Description": "Display a paragraph of text.",
                        "Icon": "paragraph",
                    },
                    "ContentTypePartDefinitionRecords": [
                        {
                            "PartName": "ParagraphPart",
                            "Name": "ParagraphPart",
                            "Settings": {}
                        }
                    ]
                }
            ]
        }
    ]
}
```

One side affect of this change is that the insert widget feature to be able to add a new widget between existing widgets has been disabled.

### Improve Flow/Bag Edit Performance

https://github.com/OrchardCMS/OrchardCore/pull/10587

### Unsaved Changes Prompt

Users will be prompted when leaving a page that has unsaved changes unless the form is being submitted.

### Theme card thumbnail alignment

Minor tweak to align thumbnails on theme cards when selecting a theme - particularly noticeable on larger screens.

### Placement of named parts

Named parts can be positioned on a different tab, however `ContentPart_Edit` can't therefore the name & description stays on the content tab. To get around this, the `ContentPart_Edit` has been overridden to not displayed the name/description, which is now handled within the specific named part. This has been applied to `BagPart` and `FlowPart` as these are common named parts.

https://github.com/OrchardCMS/OrchardCore/pull/11098

## Development

### Prerequisities

#### [.NET Core](https://docs.microsoft.com/en-us/dotnet/core/)

Orchard Core runs on the .NET Core. Download the latest version from [https://www.microsoft.com/net/download/core](https://www.microsoft.com/net/download/core).

#### Packaging

When the theme is compiled (using `dotnet build`) it's configured to generate a `.nupkg` file (this can be found in `\bin\Debug\` or `\bin\Release`).
