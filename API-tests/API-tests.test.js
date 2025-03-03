const axios = require("axios");

describe("JSONPlaceholder API Tests", () => {
  test("GET /users/1 returns correct data", async () => {
    // Make the HTTP GET request
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    // Check that the response status code is equal to HTTP 200
    expect(response.status).toBe(200);

    // Check that the response Content-Type header has the correct value
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8"
    );

    // Check that the response body element 'name' has the correct value
    expect(response.data.name).toBe("Leanne Graham");

    // Check that the response body element 'bs' has the correct value
    // Note: 'bs' is nested inside the 'company' object
    expect(response.data.company.bs).toBe("harness real-time e-markets");
  });

  test("POST Submit a new blog post", async () => {
    const requestBody = {
      userId: 1,
      title: "My blog post title",
      body: "This is the text of my latest blog post.",
    };

    const headers = {
      "Content-type": "application/json",
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      requestBody,
      { headers }
    );
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
    expect(typeof response.data.id).toBe("number");
  });
});
