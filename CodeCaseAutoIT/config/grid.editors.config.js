[
    {
        "name": "Rich text editor",
        "alias": "rte",
        "view": "rte",
        "icon": "icon-article"
    },
    {
        "name": "Image",
        "alias": "media",
        "view": "media",
        "icon": "icon-picture"
    },
    {
        "name": "Macro",
        "alias": "macro",
        "view": "macro",
        "icon": "icon-settings-alt"
    },
    {
        "name": "Embed",
        "alias": "embed",
        "view": "embed",
        "icon": "icon-movie-alt"
    },
    {
        "name": "Headline",
        "alias": "headline",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 36px; line-height: 45px; font-weight: bold",
            "markup": "<h1>#value#</h1>"
        }
    },
    {
        "name": "Quote",
        "alias": "quote",
        "view": "textstring",
        "icon": "icon-quote",
        "config": {
            "style": "border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-style: italic; font-size: 18px",
            "markup": "<blockquote>#value#</blockquote>"
        }
    },
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
]