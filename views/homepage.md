## Routes

### `POST /otp/code`
- params: 
  - email (*string*) **required**
- response:
  - code (*string*)

### `POST /otp/verify`
- params: 
  - email (*string*) **required**
  - code (*string, length=6*) **required**
- response:
  - status (*string*)