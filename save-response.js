const fs = require("fs");
const newman = require("newman");

// Set your postman collection.
const collection = require("./sample-collection.json");

const newmanOptions = {
  collection,
  reporters: "cli",
  iterationData: "./TEST_DATA.csv", // Set the iteration data in the collection
};

newman.run(newmanOptions).on("request", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    if (data.response.stream) {
      const responseData = data.response.stream.toString();

      // Append data to the CSV file for each request
      fs.appendFileSync("response.csv", `${responseData}\n`, function (error) {
        if (error) {
          console.log(error);
        }
      });

      fs.writeFileSync(
        "response.txt",
        data.response.stream.toString(),
        function (error) {
          if (error) {
            console.log(error);
          }
        }
      );
    }
  }
});
