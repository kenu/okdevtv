# Multipart File Upload

## HTML
```html
<form method="POST" enctype="multipart/form-data" ...>
  <input type="file" name="file" />
```

## Controller

### Upload
```java
  @PostMapping("/")
  public String handleFileUpload(@RequestParam("file") MultipartFile file,
                   RedirectAttributes redirectAttributes) {

    storageService.store(file);
    redirectAttributes.addFlashAttribute("message",
        "You successfully uploaded " + file.getOriginalFilename() + "!");

    return "redirect:/";
  }
```

### Download
```java
  @GetMapping("/files/{filename:.+}")
  @ResponseBody
  public ResponseEntity<Resource> serveFile(@PathVariable String filename) {

    Resource file = storageService.loadAsResource(filename);
    return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
        "attachment; filename=\"" + file.getFilename() + "\"").body(file);
  }
```

## ref
- https://spring.io/guides/gs/uploading-files/
