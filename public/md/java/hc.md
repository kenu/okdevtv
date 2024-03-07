# Apache HttpClient
* https://hc.apache.org

```java
  CloseableHttpClient httpclient = HttpClients.createDefault();
  HttpGet httpGet = new HttpGet("http://okdevtv.com/");
  CloseableHttpResponse response1 = httpclient.execute(httpGet);
// The underlying HTTP connection is still held by the response object
// to allow the response content to be streamed directly from the network socket.
// In order to ensure correct deallocation of system resources
// the user MUST call CloseableHttpResponse#close() from a finally clause.
// Please note that if response content is not fully consumed the underlying
// connection cannot be safely re-used and will be shut down and discarded
// by the connection manager.
  try {
    System.out.println(response1.getStatusLine());
    HttpEntity entity1 = response1.getEntity();
    InputStream content = entity1.getContent();
    StringBuilder textBuilder = new StringBuilder();
    try (Reader reader = new BufferedReader(new InputStreamReader
            (content, Charset.forName(StandardCharsets.UTF_8.name())))) {
      int c = 0;
      while ((c = reader.read()) != -1) {
        textBuilder.append((char) c);
      }
    }
    System.out.println(textBuilder);
    // do something useful with the response body
    // and ensure it is fully consumed
    EntityUtils.consume(entity1);
  } finally {
    response1.close();
  }

  HttpPost httpPost = new HttpPost("http://okdevtv.com/user/login");
  List<NameValuePair> nvps = new ArrayList<NameValuePair>();
  nvps.add(new BasicNameValuePair("username", "hbenicloud@gmail.com"));
  nvps.add(new BasicNameValuePair("password", "hbpass12"));
  httpPost.setEntity(new UrlEncodedFormEntity(nvps));
  CloseableHttpResponse response2 = httpclient.execute(httpPost);

  try {
    System.out.println(response2.getStatusLine());
    String string = response2.toString();
    System.out.println(string);
    HttpEntity entity2 = response2.getEntity();

    String text = new BufferedReader(
            new InputStreamReader(entity2.getContent(), StandardCharsets.UTF_8))
            .lines()
            .collect(Collectors.joining("\n"));
    System.out.println(text);
    // do something useful with the response body
    // and ensure it is fully consumed
    EntityUtils.consume(entity2);
  } finally {
    response2.close();
  }
```
