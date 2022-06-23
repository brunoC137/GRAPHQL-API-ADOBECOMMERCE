const GenerateSchema = require('json-to-schema');
const fs = require('fs');
fs.writeFileSync('schema.json', JSON.stringify(GenerateSchema(
    {
        "data": {
            "customer": {
                "created_at": "2021-11-10 12:06:47",
                "firstname": "firstnamesample",
                "lastname": "lastnamesample",
                "email": "roni_cost@example.com",
                "default_billing": null,
                "default_shipping": null,
                "taxvat": "55819933001",
                "date_of_birth": "1996-10-31",
                "gender": 1,
                "addresses": []
            }
        }
    }
), null, 4));