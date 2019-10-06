## [POST] /user
#### Payload 
```javascript
{
  "email": {
    "format": "email",
    "type": "string",
    "minLength": 1
  },
  "password": {
    "minLength": 1,
    "type": "string"
  },
  "name": {
    "type": "string"
  }
}

Required: ["email","password"]
```
#### Response 
```javascript
{
  "resource": {
    "id": {
      "type": "string"
    },
    "email": {
      "format": "email",
      "type": "string"
    },
    "password": {
      "minLength": 6,
      "type": "string"
    }
  }
} 
```
