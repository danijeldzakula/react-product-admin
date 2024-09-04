### [# Gallery](#gallery)

<a id="gallery"></a>

```JSON
[
    {
        "alt": "<string>",
        "title": "<string>",
        "file": "<file>",
        "categoryId": "<string>",
    },
]
```

### [# Category](#category)

<a id="category"></a>

```JSON
[
    {
        "name": "Laptop računari",
        "slug": "laptop-racunari",
        "photos": [
            {
                "id": "1",
                "primary": true,
                "alt": "LENOVO ThinkBook 16 G6 IRL i5/16/512 21KH008LYA",
                "title": "LENOVO ThinkBook 16 G6 IRL i5/16/512 21KH008LYA",
                "images": {
                    "avatar": "https://example.com/images/avatar/lenovo-thinkbook-16.jpg",
                    "thumbnail": "https://example.com/images/thumbnail/lenovo-thinkbook-16.jpg",
                    "desktop": "https://example.com/images/desktop/lenovo-thinkbook-16.jpg",
                    "mobile": "https://example.com/images/mobile/lenovo-thinkbook-16.jpg",
                    "tablet": "https://example.com/images/tablet/lenovo-thinkbook-16.jpg",
                },
            },
        ],
    },
]
```

### [# Attribute](#attribute)

<a id="attribute"></a>

```JSON
[
    {
        "id": "1",
        "label": "Brand",
        "value": "brand",
        "options": [
            {
                "id": "1",
                "label": "Lenovo",
                "value": "lenovo",
                "type": "select",
                "checked": true,
            },
            {
                "id": "2",
                "label": "Dell",
                "value": "dell",
                "type": "select",
                "checked": false,
            },
        ],
    },
]
```

### [# Product](#product)

<a id="product"></a>

```JSON
[
    {
        "id": "1",
        "name": "LENOVO ThinkBook 16 G6 IRL i5/16/512 21KH008LYA",
        "content": "",
        "inventory": {
            "sku": "21KH008LYA",
            "stock": {
                "options": [
                    {
                        "id": "1",
                        "label": "Manage Stock",
                        "value": "manage-stock",
                        "type": "checkbox",
                        "checked": false,
                    },
                ],
                "quantity": "",
                "backorders": "",
            }
        },
        "photos": [
            {
                "id": "1",
                "primary": true,
                "alt": "LENOVO ThinkBook 16 G6 IRL i5/16/512 21KH008LYA",
                "title": "LENOVO ThinkBook 16 G6 IRL i5/16/512 21KH008LYA",
                "images": {
                    "avatar": "https://example.com/images/avatar/lenovo-thinkbook-16.jpg",
                    "thumbnail": "https://example.com/images/thumbnail/lenovo-thinkbook-16.jpg",
                    "desktop": "https://example.com/images/desktop/lenovo-thinkbook-16.jpg",
                    "mobile": "https://example.com/images/mobile/lenovo-thinkbook-16.jpg",
                    "tablet": "https://example.com/images/tablet/lenovo-thinkbook-16.jpg"
                },
            },
        ],
        "visibilities": [
            {
                "id": "1",
                "label": "Featured product",
                "value": "featured-product",
                "type": "checkbox",
                "checked": false,
            },
            {
                "id": "2",
                "label": "Visible in the store",
                "value": "visible-in-the-store",
                "type": "checkbox",
                "checked": false,
            },
        ],
        "categories": [
            {
                "id": "1",
                "name": "Laptop računari",
                "slug": "laptop-racunari",
            },
        ],
        "shipping": {
            "weight": "gr",
            "dimensions": {
                "length": "cm",
                "width": "cm",
                "height": "cm",
            },
        },
        "attributes": [
            {

            },
        ],
        "tags": [
            {

            },
        ],
    },
]
```
