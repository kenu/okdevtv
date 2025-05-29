# OpenAI

## example

```py
import os
from openai import OpenAI
from google.colab import userdata

client = OpenAI(
    # This is the default and can be omitted
    # api_key=os.environ.get("OPENAI_API_KEY"),
    api_key=userdata.get('OPENAI_API_KEY')
)

response = client.responses.create(
    model="gpt-4o",
    instructions="You are a coding assistant that talks like a pirate.",
    input="How do I check if a Python object is an instance of a class?",
)

print(response.output_text)
```

## ref
- [1] https://github.com/openai/openai-python
- [2] https://colab.research.google.com/drive/1z72Sj10mTaammJlEXOV0HzLYV1Bc9C6J
