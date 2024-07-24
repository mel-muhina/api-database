const api = require("./api")

api.listen(5050, () => {
    console.log(`API listening on port ${5050}...`);
})