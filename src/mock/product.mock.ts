export const products = [
    {
      "productid": "eb381d02-60db-4218-9e7f-197a82127323",
      "actualprice": "170",
      "availableQuantity": 0,
      "averageReview": "0",
      "category": "test-category",
      "isBestSeller": false,
      "isNew": true,
      "isTrending": true,
      "offerprice": "120",
      "productDetails": {
        "blouse_desc": "Blouse Description",
        "blouse_piece": true,
        "fabricDescription": "test",
        "fabricname": "test",
        "length": "9",
        "width": "2.5",
        "washcare": "test",
        "sareeImages": [
          {
            "id": "b4d9ff01-cebe-4756-8eed-c59730201588",
            "description": "image 1",
            "imageSource": "https://s3.ap-south-1.amazonaws.com/dev.ardhanginidesigns.com/product-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg",
            "imageKey": "product-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg",
            "thumbnailSource": "https://s3.ap-south-1.amazonaws.com/dev.ardhanginidesigns.com/product-thumbnail-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg",
            "thumbnailKey": "product-thumbnail-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg"
          }
        ]
      },
      "productdescription": "test",
      "productname": "test",
      "producttype": "saree",
      "return_exchange_policy": "return exchange policy",
      "skuid": "skuid",
      "subcategory": "test-sub-category"
    }
  ];

  export const wishListMock = [{
      'productId': 'test',
      'productTYpeId': 'test',
      'productName': 'test',
      'productThumbnail': "https://s3.ap-south-1.amazonaws.com/dev.ardhanginidesigns.com/product-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg",
      'availableQuantity': 4,
      'finalPricePerItem': '100'
    }];
  
    export const cartMock = {'cartLineItems' : [{
      'productId': 'test1',
      'productTYpeId': 'test',
      'productName': 'test',
      'productThumbnail': "https://s3.ap-south-1.amazonaws.com/dev.ardhanginidesigns.com/product-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg",
      'quantity': 4,
      'finalPricePerItem': 100,
      'finalTotalPrice': 400,
    },
    {
      'productId': 'test2',
      'productTYpeId': 'test',
      'productName': 'test',
      'productThumbnail': "https://s3.ap-south-1.amazonaws.com/dev.ardhanginidesigns.com/product-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg",
      'quantity': 2,
      'finalPricePerItem': 150,
      'finalTotalPrice': 300,
    },
    {
      'productId': 'test3',
      'productTYpeId': 'test',
      'productName': 'test',
      'productThumbnail': "https://s3.ap-south-1.amazonaws.com/dev.ardhanginidesigns.com/product-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg",
      'quantity': 5,
      'finalPricePerItem': 70,
      'finalTotalPrice': 350,
    },
    {
      'productId': 'test4',
      'productTYpeId': 'test',
      'productName': 'test',
      'productThumbnail': "https://s3.ap-south-1.amazonaws.com/dev.ardhanginidesigns.com/product-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg",
      'quantity': 6,
      'finalPricePerItem': 200,
      'finalTotalPrice': 1200,
    },
    {
      'productId': 'test5',
      'productTYpeId': 'test',
      'productName': 'test',
      'productThumbnail': "https://s3.ap-south-1.amazonaws.com/dev.ardhanginidesigns.com/product-933bca55-b518-4c98-87bf-c36d100bbe58.jpeg",
      'quantity': 7,
      'finalPricePerItem': 300,
      'finalTotalPrice': 2100,
    }],
    'actualPrice': 5000,
    'finaltotalPrice': 4350,
    'totalCgst': 500,
    'totalSgst': 500,
    'shipping': 0,
  };

  export const deliveryMock = [
    {
      'id': 'test1',
      'addressLine1': 'test1',
      'addressLine2': 'test1',
      'pin': '721424',
      'state': 'WB',
      'nickname': 'home',
    },
    {
      'id': 'test2',
      'addressLine1': 'test2',
      'addressLine2': 'test2',
      'pin': '721424',
      'state': 'WB',
      'nickname': 'office',
    }
  ]