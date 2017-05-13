# Free Code Camp Short URL Microservice Project

#### User Stories

1) I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2) If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3) When I visit that shortened URL, it will redirect me to my original link.

#### Example Usage

````
http://fcc-short-link.herokuapp.com/new/http://google.com
````

#### Example Output

````json
{
  "original": "http://google.com",
  "short": "456xyx",
  "shortLink": "http://fcc-short-link.herokuapp.com/new/456xyx"
}
````
