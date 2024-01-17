# Newman Example Script for Postman Collection Execution

This Node.js script utilizes Newman to run a Postman collection, capturing and storing response data, while handling CSV data and optionally using SSL certificates.

## **Prerequisites**

- Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- Postman collection file (**`sample-collection.json`**) in the project directory.
- SSL certificates (**`test.crt`**, **`test.key`**, **`test.pem`**) for secure requests (optional).
- Iteration data in CSV format (**`TEST_DATA.csv`**).

## **Installation**

1. Clone the repository:
    
    ```bash
    git clone https://github.com/yourusername/your-repository.git
    ```
    
2. Install dependencies:
    
    ```bash
    npm install
    ```
    

## **Usage**

1. Configure the script by setting the appropriate values in the **`newmanOptions`** object in **`script.js`**:
    - **`collection`**: Path or URL to the Postman collection JSON file.
    - **`sslClientCert`**, **`sslClientKey`**, **`sslClientPem`**: Paths to SSL certificate files (optional).
    - **`sslClientPassphrase`**: Passphrase for the SSL certificate (optional).
    - **`iterationData`**: Path to the CSV file containing iteration data.
2. Run the script:
    
    ```bash
    node .\save-response.js
    ```
    

## **Newman Run with CSV File and SSL Certificates**

The Newman run is configured to:

- Use iteration data from a CSV file (**`TEST_DATA.csv`**) to provide dynamic inputs.
- Optionally perform requests with SSL certificates for secure communication.

### **Example CSV Data**

Assuming the CSV file (**`TEST_DATA.csv`**) has the following structure:

```
Copy code
post_id
1
2
3
4
5

```

### **Sample Collection**

The provided sample collection (**`sample-collection.json`**) contains a request named "SEND_SMS_SAMPLE" that uses the Postman variable **`{{post_id}}`** to dynamically replace the post ID in the request URL.

```json
{
	"item": [
		{
			"name": "SEND_SMS_SAMPLE",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://jsonplaceholder.typicode.com/posts/{{post_id}}",
					"protocol": "https",
					"host": ["jsonplaceholder", "typicode", "com"],
					"path": ["posts", "{{post_id}}"]
				}
			},
			"response": []
		}
	]
}

```

### **Output**

- The script generates a CSV file (**`response.csv`**) with the response data for each request.
- The raw response data for the last request is stored in **`response.txt`**.

### **Notes**

- If SSL certificates are not needed, you can remove the SSL-related configuration options (**`sslClientCert`**, **`sslClientKey`**, **`sslClientPem`**, **`sslClientPassphrase`**) from the **`newmanOptions`** object in **`script.js`**.
- Ensure that the Postman collection is correctly configured.
- Replace placeholder values in the **`newmanOptions`** object with your actual values.