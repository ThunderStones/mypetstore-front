
# mypetstore

> v1.0.0

# Catalog

## GET Get Items By Product Id

GET /catalog/products/{id}/items

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|[object]|true|none|none|
|»» itemId|string|true|none|none|
|»» productId|string|true|none|none|
|»» listPrice|number|true|none|none|
|»» unitCost|integer|true|none|none|
|»» supplierId|integer|true|none|none|
|»» status|string|true|none|none|
|»» attribute1|string|true|none|none|
|»» attribute2|null|true|none|none|
|»» attribute3|null|true|none|none|
|»» attribute4|null|true|none|none|
|»» attribute5|null|true|none|none|
|»» product|object|true|none|none|
|»»» productId|string|true|none|none|
|»»» categoryId|string|true|none|none|
|»»» name|string|true|none|none|
|»»» description|string|true|none|none|
|»» quantity|integer|true|none|none|

## GET Get Item By Id

GET /catalog/items/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|object|true|none|none|
|»» itemId|string|true|none|none|
|»» productId|string|true|none|none|
|»» listPrice|number|true|none|none|
|»» unitCost|integer|true|none|none|
|»» supplierId|integer|true|none|none|
|»» status|string|true|none|none|
|»» attribute1|string|true|none|none|
|»» attribute2|string¦null|true|none|none|
|»» attribute3|string¦null|true|none|none|
|»» attribute4|string¦null|true|none|none|
|»» attribute5|string¦null|true|none|none|
|»» product|object|true|none|none|
|»»» productId|string|true|none|none|
|»»» categoryId|string|true|none|none|
|»»» name|string|true|none|none|
|»»» description|string|true|none|none|
|»» quantity|integer|true|none|none|

## GET Get All Categories

GET /catalog/categories

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|[object]|true|none|none|
|»» categoryId|string|true|none|none|
|»» name|string|true|none|none|
|»» description|string|true|none|none|

## GET Get Product List By Category Id

GET /catalog/categories/{id}/products

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|[object]|true|none|none|
|»» productId|string|true|none|none|
|»» categoryId|string|true|none|none|
|»» name|string|true|none|none|
|»» description|string|true|none|none|

## GET Get Product By Id

GET /catalog/products/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|object|true|none|none|
|»» productId|string|true|none|none|
|»» categoryId|string|true|none|none|
|»» name|string|true|none|none|
|»» description|string|true|none|none|

## GET Get Category By Id

GET /catalog/categories/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|object|true|none|none|
|»» categoryId|string|true|none|none|
|»» name|string|true|none|none|
|»» description|string|true|none|none|

## GET Search By Keywords

GET /catalog/search/{keywords}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|keywords|path|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|[object]|true|none|none|
|»» productId|string|true|none|none|
|»» categoryId|string|true|none|none|
|»» name|string|true|none|none|
|»» description|string|true|none|none|

# Account

## PUT Update Password

PUT /account/user/password

> Body 请求参数

```json
{
  "username": "j2ee",
  "password": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» password|body|string| 是 |none|
|» oldPassword|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST Register

POST /account/user

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|username|query|string| 是 |none|
|password|query|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Check Exist

GET /account/user

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|username|query|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT Modify User Info

PUT /account/user

> Body 请求参数

```json
{
  "username": "j2ee",
  "email": "yourname@yourdomain.com",
  "firstName": "ABC",
  "lastName": "XY1",
  "status": "CA",
  "address1": "901 San Antonio Road",
  "address2": "901 San Antonio Road",
  "city": "Palo Alto",
  "state": "CA",
  "zip": "94303",
  "country": "USA",
  "phone": "555-555-5555",
  "favouriteCategoryId": "DOGS",
  "languagePreference": "Japanese",
  "listOption": true,
  "bannerOption": true,
  "bannerName": "<image src=\"/images/banner_dogs.gif\">"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» email|body|string| 是 |none|
|» firstName|body|string| 是 |none|
|» lastName|body|string| 是 |none|
|» country|body|string| 是 |none|
|» phone|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Get Login Account Info

GET /account/info

> Body 请求参数

```yaml
{}

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|object|true|none|none|
|»» username|string|true|none|none|
|»» email|string|true|none|none|
|»» firstName|string|true|none|none|
|»» lastName|string|true|none|none|
|»» status|string|true|none|none|
|»» country|string|true|none|none|
|»» phone|string|true|none|none|
|»» favouriteCategoryId|string|true|none|none|
|»» languagePreference|string|true|none|none|
|»» listOption|boolean|true|none|none|
|»» bannerOption|boolean|true|none|none|
|»» bannerName|string|true|none|none|

## POST get token

POST /account/token

> Body 请求参数

```yaml
username: j2ee
password: "123456"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» token|string|true|none|none|

# Cart

## PUT add or update items

PUT /cart/items

> Body 请求参数

```json
[
  {
    "itemId": "EST-1",
    "quantity": 19
  }
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[object]| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Get Cart

GET /cart/items

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE delete items

DELETE /cart/items

> Body 请求参数

```json
[
  {
    "itemId": "EST-1"
  },
  {
    "itemId": "14"
  }
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[object]| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# Address

## GET Get Full Name By ID

GET /address/fullName/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Get Cities By Province Id

GET /address/province/{id}/cities

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» addressId|string|true|none|none|
|» name|string|true|none|none|

## GET Get Districts

GET /address/province/{provinceId}/city/{cityId}/districts

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|provinceId|path|string| 是 |none|
|cityId|path|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» addressId|string|true|none|none|
|» name|string|true|none|none|

## PUT Modify Address

PUT /address

> Body 请求参数

```json
{
  "id": 1,
  "userId": "j2ee",
  "name": "众越压市采市",
  "addressId": "331081",
  "addressName": "浙江省台州市温岭市",
  "addressDetail": "enim consequat nostrud sunt",
  "phone": "19868658986",
  "isDefault": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» id|body|integer| 是 |none|
|» userId|body|string| 是 |none|
|» name|body|string| 是 |none|
|» addressId|body|string| 是 |none|
|» addressDetail|body|string| 是 |none|
|» phone|body|string| 是 |none|
|» isDefault|body|integer| 是 |none|

#### 枚举值

|属性|值|
|---|---|
|» isDefault|1|
|» isDefault|0|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Get Address

GET /address

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|[object]|true|none|none|
|»» id|integer|true|none|none|
|»» userId|string|true|none|none|
|»» name|string|true|none|none|
|»» addressId|string|true|none|none|
|»» addressName|string|true|none|none|
|»» addressDetail|string|true|none|none|
|»» phone|string|true|none|none|
|»» isDefault|integer|true|none|none|

## POST Add Address

POST /address

> Body 请求参数

```json
{
  "name": "也按去记极",
  "addressId": "430103",
  "addressDetail": "consectetur pariatur adipisicing non",
  "phone": "18681462158",
  "isDefault": 1
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» name|body|string| 是 |none|
|» addressId|body|string| 是 |none|
|» addressDetail|body|string| 是 |none|
|» phone|body|string| 是 |none|
|» isDefault|body|integer| 是 |none|

#### 枚举值

|属性|值|
|---|---|
|» isDefault|0|
|» isDefault|1|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Get All Provinces

GET /address/provinces

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» addressId|string|true|none|none|
|» name|string|true|none|none|

# Order

## GET Get All Order

GET /order/list

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|[object]|true|none|none|
|»» orderId|integer|true|none|none|
|»» userId|string|true|none|none|
|»» orderDate|string|true|none|none|
|»» courier|string|true|none|none|
|»» totalPrice|number|true|none|none|
|»» name|string|true|none|none|
|»» addressDetail|string|true|none|none|
|»» phone|string|true|none|none|
|»» addressDataId|string|true|none|none|
|»» addressId|integer|true|none|none|

## POST Place Order

POST /order

> Body 请求参数

```json
[
  0
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|addressId|query|string| 是 |none|
|body|body|array[integer]| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Get Order Detail By Order Id

GET /order/detail

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|orderId|query|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» status|integer|true|none|none|
|» data|object|true|none|none|
|»» orderId|integer|true|none|none|
|»» userId|string|true|none|none|
|»» orderDate|string|true|none|none|
|»» totalPrice|number|true|none|none|
|»» name|string|true|none|none|
|»» addressDetail|string|true|none|none|
|»» phone|string|true|none|none|
|»» addressDataId|string|true|none|none|
|»» addressId|integer|true|none|none|
|»» lineItems|[object]|true|none|none|
|»»» orderId|integer|true|none|none|
|»»» lineNumber|integer|true|none|none|
|»»» quantity|integer|true|none|none|
|»»» itemId|string|true|none|none|
|»»» unitPrice|number|true|none|none|
|»»» item|object|true|none|none|
|»»»» itemId|string|true|none|none|
|»»»» productId|string|true|none|none|
|»»»» listPrice|number|true|none|none|
|»»»» unitCost|integer|true|none|none|
|»»»» supplierId|integer|true|none|none|
|»»»» status|string|true|none|none|
|»»»» attribute1|string|true|none|none|
|»»»» attribute2|null|true|none|none|
|»»»» attribute3|null|true|none|none|
|»»»» attribute4|null|true|none|none|
|»»»» attribute5|null|true|none|none|
|»»» total|integer|true|none|none|

