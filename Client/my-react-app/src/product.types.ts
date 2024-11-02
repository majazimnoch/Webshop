/* {
    "id": 6648,
    "name": "Nougatägg Stanniol",
    "price": 7,
    "on_sale": false,
    "images": {
      "thumbnail": "/storage/products/thumbnails/2446142-300x300.png",
      "large": "/storage/products/2446142.png"
    },
    "stock_status": "instock",
    "stock_quantity": 11,
    "tags": [
      {
        "id": 113,
        "name": "Gelatinfri",
        "slug": "gelatinfri"
      }
    ]
  }, */

  interface Product {
    id: number,
    name: string,
    price: number,
    on_sale: boolean,
    images: Image,
    stock_status: StockStatus,
    tags: Tag[] /* double check if its correct */
  }

  type StockStatus = "instock" | "outofstock"

  interface Image {
    thumbnail: string,
    large: string
  }

  interface Tag {
    id: number,
    name: string,
    slug: string

  }