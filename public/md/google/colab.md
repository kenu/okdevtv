# Google Colab
- https://colab.research.google.com

## Install
```sh
!pip install uv
!uv pip install transformers
```

## Run
```py
from transformers import AutoModel, AutoTokenizer

model = AutoModel.from_pretrained("bert-base-uncased")
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)
print(outputs.last_hidden_state.shape)
```

## GPU models
- https://colab.research.google.com/notebooks/gpu.ipynb

## TPU models
- https://colab.research.google.com/notebooks/tpu.ipynb

## GPU와 TPU 비교표

| 특성 | GPU | TPU |
|------|-----|-----|
| 원래 용도 | 게임 그래픽 처리 | 인공지능 연산 전용 |
| 만든 회사 | NVIDIA, AMD 등 | Google |
| 특징 | 다양한 작업 가능 | AI 작업 전용 |
| 가격 | 중간~비쌈 | 비쌈 (클라우드로 대여) |
| 속도 | 빠름 | AI 작업에서 매우 빠름 |
| 전력 효율 | 보통 | 매우 좋음 |
| 사용 난이도 | 비교적 쉬움 | 약간 어려움 |
| 사용 장소 | 개인 컴퓨터, 클라우드 | 주로 Google 클라우드 |
| LLM 학습 | 가능하지만 느림 | 빠르고 효율적 |
| 사용 예시 | 게임, 영상편집, AI 학습 | 대규모 AI 모델 학습 |

### 비유로 이해하기
- **GPU**: 여러 과목을 가르칠 수 있는 다재다능한 선생님
- **TPU**: 수학만 가르치지만 최고의 수학 강사

