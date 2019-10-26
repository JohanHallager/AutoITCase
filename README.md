# AutoITCase

## Login
User: 42@johanhallager.dk
Pass: 1111111111

##  Packages
### Iconic -  [https://our.umbraco.com/.../iconic](https://our.umbraco.com/packages/backoffice-extensions/iconic/)
bruges til at hente Umbraco ikoner ind fra ~/Umbraco/assets/css/umbraco.css
### LeBlender - [https://our.umbraco.com/.../leblender](https://our.umbraco.com/packages/backoffice-extensions/leblender/)
bruges til at lave grid editor


## Areas of interest
### Iconic findes under DataType : Iconic icons
### CustomLink.cshtml - \CodeCaseAutoIT\CodeCaseAutoIT\Views\Partials\Grid\Editors\CustomLink.cshtml
```
@inherits UmbracoViewPage<Lecoati.LeBlender.Extension.Models.LeBlenderModel>
@using Newtonsoft.Json.Linq

@{ 
    var setMaxInEditor = ""; // set Max width if in backoffice
}

@if (Request.Url.ToString().Contains("/umbraco/backoffice/"))
{
    setMaxInEditor = "max-width: 84%;";
    <link rel="stylesheet" href="@Url.Content("~/css/custom-style.css")" />
}

@if (Model.Items.Any())
{
    foreach (var item in Model.Items)
    {
        var icon = !string.IsNullOrEmpty(item.GetValue("icon")) ? JObject.Parse(item.GetValue("icon"))["icon"] : "";
        var title = !string.IsNullOrEmpty(item.GetValue("title")) ? item.GetValue("title") : "";
        var url = !string.IsNullOrEmpty(item.GetValue("url")) ? item.GetValue("url") : "#";
        var color = !string.IsNullOrEmpty(item.GetValue("color")) ? "#" + item.GetValue("color") : "#ffb317";
        var bcColor = !string.IsNullOrEmpty(item.GetValue("bcColor")) ? "#" + item.GetValue("bcColor") : "#343a40";

        <a href="@url" class="ait btn btn-outline" style="@setMaxInEditor  border-color:@color; color:@color;  background-color:@bcColor;"><i class="@icon"></i> @title</a>

        if (title == "")
        {
            <p>please enter a Title</p>
        }
        if (url == "")
        {
            <p>please enter a Url</p>
        }
    }
}
else
{
    <a class="btn btn-lg btn-outline" style="@setMaxInEditor border-color:#ffb317; color:#ffb317;  background-color:#343a40;">Click here</a>
} 
```
### grid.editors.config.js - \CodeCaseAutoIT\CodeCaseAutoIT\config\grid.editors.config.js
```
{
        "name": "Custom link",
        "alias": "customLink",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-link",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Title",
                    "alias": "title",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Url",
                    "alias": "url",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Icon",
                    "alias": "icon",
                    "propretyType": {},
                    "dataType": "2deb0224-b486-4661-bfb2-a793eb9fd7a6"
                },
                {
                    "name": "Text & border color",
                    "alias": "color",
                    "propretyType": {},
                    "dataType": "0225af17-b302-49cb-9176-b9f35cab9c17"
                },
                {
                    "name": "Background color",
                    "alias": "bcColor",
                    "propretyType": {},
                    "dataType": "0225af17-b302-49cb-9176-b9f35cab9c17"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 1,
            "frontView": ""
        }
    }
```
