# Express Error Handling

```
app.use(function(err, req, res, next) {
  // Do logging and user-friendly error message display
  console.error(err.stack);
  res.status(500).send({status:500, message: 'internal error', type:'internal'});
});
```

## ref
* https://poiemaweb.com/express-error-handling
* http://khaidoan.wikidot.com/expressjs-error-handling
