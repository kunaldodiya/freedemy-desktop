const axios = require("axios");

export default class Udemy {
  url = "https://www.udemy.com/api-2.0/courses/";
  auth =
    "MTFoNnNTWDl3a0xyRDN2cW1NcWtpSE1WOWVDS21LM3RBakx4Z09aejpJMnp6V2huYVpUVU9ldHFBT0NKWjdMdFpzM3FmTDhjb09EbXlBYlp1QjhialVGYzhtRjNOTnRYQndvZEhDQWNZOFFyd1ZvU1ZKbUk0TklSMVI1d0FJZTZMZHVxWGVKbno0cXBvU1VKckdXT2NlZXJvSnpZTjNQZHVSczhKY0k5dQ==";

  getCourseList(keywords) {
    const api_url = keywords
      ? `${this.url}?page_size=100&search=${keywords}`
      : `${this.url}?page_size=100`;

    return axios.get(api_url, {
      headers: {
        Authorization: `Basic ${this.auth}`
      }
    });
  }
}
