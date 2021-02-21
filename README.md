# PlayCMS Admin Theme

Custom admin theme for [Orchard Core](https://github.com/orchardcms/OrchardCore) that uses [TheAdmin](https://github.com/OrchardCMS/OrchardCore/tree/dev/src/OrchardCore.Themes/TheAdmin) as a base theme and applies PlayCMS customisations, plus some bug fixes between major updates of Orchard Core.

## Build Status

[![Build Status](https://secure.travis-ci.org/etchuk/Etch.OrchardCore.AdminTheme.png?branch=master)](http://travis-ci.org/etchuk/Etch.OrchardCore.AdminTheme) [![NuGet](https://img.shields.io/nuget/v/Etch.OrchardCore.AdminTheme.svg)](https://www.nuget.org/packages/Etch.OrchardCore.AdminTheme)

## Orchard Core Reference

This module is referencing the RC1 build of Orchard Core ([`1.0.0-rc2-13450`](https://www.nuget.org/packages/OrchardCore.Theme.Targets/1.0.0-rc2-13450)).

## Installing

This module is available on [NuGet](https://www.nuget.org/packages/Etch.OrchardCore.AdminTheme). Add a reference to your Orchard Core web project via the NuGet package manager. Search for "Etch.OrchardCore.AdminTheme", ensuring include prereleases is checked.

Alternatively you can [download the source](https://github.com/etchuk/Etch.OrchardCore.AdminTheme/archive/master.zip) or clone the repository to your local machine. Add the project to your solution that contains an Orchard Core project and add a reference to Etch.OrchardCore.AdminTheme.

## Fixes

- Remove reduction of spacing on widgets within a flow

## Enhancements

### Content Editor

Minor tweak to add view option when editing a published content item.

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

### List Part Edit Option

Add edit option on admin area page displaying list of items comtained by a content item.

### Unsaved Changes Prompt

Users will be prompted when leaving a page that has unsaved changes unless the form is being submitted.

## Development

### Prerequisities

#### [.NET Core](https://docs.microsoft.com/en-us/dotnet/core/)

Orchard Core runs on the .NET Core. Download the latest version from [https://www.microsoft.com/net/download/core](https://www.microsoft.com/net/download/core).

#### Packaging

When the theme is compiled (using `dotnet build`) it's configured to generate a `.nupkg` file (this can be found in `\bin\Debug\` or `\bin\Release`).
