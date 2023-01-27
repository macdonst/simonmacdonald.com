export const Contact = {
  "id": "Contact",
  "type": "object",
  "properties": {
    "first_name": {
      "type": "string"
    },
    "last_name": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "subject": {
      "type": "string",
      "format": "text"
    },
    "message": {
      "type": "string",
      "format": "text"
    },
    "key": {
      "type": "string"
    }
  }
}