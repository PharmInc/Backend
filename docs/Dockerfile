# Use the official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the HTML file to the container
COPY docs.html .

# Create a simple Node.js server to serve the HTML file
RUN echo 'const http = require("http");\n\
const fs = require("fs");\n\
const path = require("path");\n\
\n\
const server = http.createServer((req, res) => {\n\
  // Handle CORS\n\
  res.setHeader("Access-Control-Allow-Origin", "*");\n\
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");\n\
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");\n\
  \n\
  if (req.method === "OPTIONS") {\n\
    res.writeHead(200);\n\
    res.end();\n\
    return;\n\
  }\n\
  \n\
  const filePath = path.join(__dirname, "docs.html");\n\
  \n\
  fs.readFile(filePath, (err, data) => {\n\
    if (err) {\n\
      res.writeHead(404, { "Content-Type": "text/plain" });\n\
      res.end("File not found");\n\
      return;\n\
    }\n\
    \n\
    res.writeHead(200, { "Content-Type": "text/html" });\n\
    res.end(data);\n\
  });\n\
});\n\
\n\
const port = process.env.PORT || 3000;\n\
server.listen(port, "0.0.0.0", () => {\n\
  console.log(`Documentation server running at http://0.0.0.0:${port}`);\n\
});' > server.js

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "server.js"]