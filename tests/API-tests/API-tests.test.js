const axios = require("axios");

class BlogPost {
  constructor(userId, title, body) {
    this.userId = userId;
    this.title = title;
    this.body = body;
  }

  // Method for deserialization
  static fromApiResponse(apiResponse) {
    return new BlogPost(
      apiResponse.userId,
      apiResponse.title,
      apiResponse.body
    );
  }
}

describe("JSONPlaceholder API Tests", () => {
  // GET
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

  // GET + parameterizing
  test.each([
    [1, "Leanne Graham", "harness real-time e-markets"],
    [2, "Ervin Howell", "synergize scalable supply-chains"],
    [3, "Clementine Bauch", "e-enable strategic applications"],
  ])(
    "GET /users/%i returns correct data",
    async (userId, expectedName, expectedBS) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toBe(
        "application/json; charset=utf-8"
      );
      expect(response.data.name).toBe(expectedName);
      expect(response.data.company.bs).toBe(expectedBS);
    }
  );

  // POST
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

  // POST + serializing
  test("POST Submit a new blog post(serialized and deserialized)", async () => {
    const newPost = new BlogPost(
      1,
      "My blog post title",
      "This is the text of my latest blog post."
    );

    const headers = {
      "Content-type": "application/json",
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost,
      { headers }
    );
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
    expect(typeof response.data.id).toBe("number");

    // Deserializing
    const deserializedPost = BlogPost.fromApiResponse(response.data);

    expect(deserializedPost.userId).toBe(newPost.userId);
    expect(deserializedPost.title).toBe(newPost.title);
    expect(deserializedPost.body).toBe(newPost.body);
  });
});
