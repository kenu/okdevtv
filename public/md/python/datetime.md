# Python datetime
```py
from datetime import datetime, timedelta
date = datetime.today()
yesterday = datetime.today() - timedelta(days=1)
d2 = datetime.today() - timedelta(seconds=60)
print(date, d2)
```

- timestamp
```py
date.strftime("%s")
```
