# 대규모 언어 모델 (Large Language Model)

## LLM 실습을 위한 기본 정보

- LLM의 기본 개념, 아키텍처, 실습 환경, 필수 도구, 실습 예제, 그리고 실제 활용 사례에 대한 이해가 필요

## LLM의 개념과 구조

- LLM은 대규모 데이터셋으로 학습된 자연어 처리(NLP) AI 모델로, 텍스트 생성, 요약, 번역, 질의응답 등 다양한 작업을 수행 가능
- 대표적인 아키텍처는 트랜스포머(Transformer)이며, BERT, GPT, T5 등이 널리 사용
- LLM은 입력(프롬프트)에 따라 적합한 출력을 생성하며, 프롬프트 엔지니어링이 모델 활용의 핵심

## 실습을 위한 선수 지식

- 기본적인 파이썬 프로그래밍 능력
- numpy, pandas 등 데이터 처리 라이브러리 활용 경험
- 기초 수학(선형대수, 통계, 미적분)과 머신러닝/딥러닝 기본 개념이 있으면 실습이 더 수월

## 실습 환경 및 도구

- **코딩 환경**: 구글 코랩(Google Colab), Jupyter Notebook, 로컬 환경(Anaconda 등)
- **프레임워크**: 파이토치(PyTorch), 텐서플로(TensorFlow)
- **오픈소스 라이브러리**: Hugging Face Transformers, LangChain, llamaIndex 등
- **API 활용**: OpenAI, Hugging Face 등에서 제공하는 LLM API
- **데이터 및 토큰**: 실습을 위해 Hugging Face, OpenAI API 토큰이 필요할 수 있음

## CPU/GPU 샘플 코드

### 1. CPU 버전 (기본)

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# 모델과 토크나이저 로드 (CPU)
model_name = "gpt2"  # 경량 모델 사용
model = AutoModelForCausalLM.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# 입력 텍스트
input_text = "인공지능이 세상을 바꾸는 방식은"

# 토큰화 및 모델 입력
inputs = tokenizer(input_text, return_tensors="pt")

# 텍스트 생성 (CPU에서 실행)
with torch.no_grad():
    outputs = model.generate(
        **inputs,
        max_length=100,
        num_return_sequences=1,
        no_repeat_ngram_size=2,
        temperature=0.7
    )

# 결과 디코딩
generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(generated_text)
```

### 2. GPU 버전 (가속화)

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# GPU 사용 가능 여부 확인
device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Using device: {device}")

# 모델과 토크나이저 로드 (GPU 사용)
model_name = "gpt2"  # 경량 모델 사용
model = AutoModelForCausalLM.from_pretrained(model_name).to(device)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# 입력 텍스트
input_text = "인공지능이 세상을 바꾸는 방식은"

# 토큰화 및 모델 입력 (GPU로 이동)
inputs = tokenizer(input_text, return_tensors="pt").to(device)

# 텍스트 생성 (GPU에서 실행)
with torch.no_grad():
    outputs = model.generate(
        **inputs,
        max_length=100,
        num_return_sequences=1,
        no_repeat_ngram_size=2,
        temperature=0.7,
        pad_token_id=tokenizer.eos_token_id
    )

# 결과 디코딩 (다시 CPU로 이동)
generated_text = tokenizer.decode(outputs[0].cpu(), skip_special_tokens=True)
print(generated_text)
```

### 3. 메모리 효율적인 GPU 사용 (큰 모델용)

```python
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig
import torch

# 4비트 양자화 설정 (메모리 절약)
quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=True,
)

# 모델 로드 (4비트 양자화 적용)
model_name = "EleutherAI/polyglot-ko-1.3b"  # 한국어 모델
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    quantization_config=quantization_config,
    device_map="auto"  # 자동으로 GPU/CPU 할당
)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# 생성 파이프라인 사용
from transformers import pipeline

pipe = pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
    device=0 if torch.cuda.is_available() else -1
)

# 텍스트 생성
result = pipe(
    "오늘 날씨가 좋아서",
    max_length=100,
    do_sample=True,
    temperature=0.7,
    top_p=0.9
)

print(result[0]['generated_text'])
```

## 실습의 주요 단계

1. **프롬프트 엔지니어링**
   - LLM에 명확한 지시를 내리는 프롬프트 작성법 연습
   - 다양한 프롬프트 유형, 구성 요소, 매개변수 실습

2. **기본 모델 활용**
   - 사전 학습된 LLM을 불러와 텍스트 생성, 요약, 번역 등 기본 태스크 실습
   - API 또는 라이브러리로 간단한 챗봇 구축

3. **RAG(검색 증강 생성) 실습**
   - 문서 검색과 LLM을 결합해 질문에 답변하는 RAG 파이프라인 구현
   - llamaIndex, LangChain 등으로 벡터DB 구축, 인덱싱, 검색, 프롬프트 결합 실습

4. **모델 미세조정(Fine-tuning)**
   - 자신만의 데이터셋으로 LLM을 추가 학습(파인튜닝)
   - QLoRA, LoRA 등 경량화 및 효율적 미세조정 기법 활용

5. **애플리케이션 개발**
   - LLM을 활용한 챗봇, 문서 요약, 질의응답 등 실제 서비스 개발 실습

## 실습 예제 및 참고 자료

- 프롬프트 실습, 연속 대화, 출력 제어 등 기본 예제
- LangChain, llamaIndex를 활용한 RAG 구현 및 실습
- 오픈소스 LLM(예: LLaMA, GPT 계열) 활용 및 파인튜닝 실습
- 실전 애플리케이션 개발: 검색 증강, 데이터 검증, 로깅 등

## 실습 시 유의사항

- LLM 모델은 연산량이 많으므로, 로컬 환경에서는 경량화 모델 또는 클라우드/코랩 환경을 추천
- API 사용 시 토큰 비용 및 사용량에 주의.
- 데이터 보안 및 개인정보 보호 준수.

## 정리

- LLM 실습은 프롬프트 엔지니어링, 기본 모델 활용, RAG, 미세조정, 애플리케이션 개발 등 단계별로 진행
- 파이썬, 딥러닝 프레임워크, 오픈소스 라이브러리, API 활용법을 익히고, 실습 환경(코랩 등)을 준비하면 누구나 시작 가능

## ref
- [1] https://hellollama.net/llm-초급강좌-llm-의-기본-구조와-모델/
- [2] https://velog.io/@dlgkdis801/Day-01.-랭체인-기초
- [3] https://www.youtube.com/watch?v=PxoAO9IXJco
- [4] https://m.boostcourse.org/ai102/lecture/1546882
- [5] https://github.com/onlybooks/llm/blob/main/README.md
- [6] https://blog.naver.com/gilbutzigy/223633213311
- [7] https://day-to-day.tistory.com/76
- [8] https://developers.hyundaimotorgroup.com/blog/571
- [9] https://www.inflearn.com/course/llm101-나만의-대화형-채팅데모
- [10] https://marcus-story.tistory.com/32
- [11] https://blog.sionic.ai/finetuning_llama
- [12] https://www.samsungsds.com/kr/insights/how-to-run-a-local-llm.html
- [13] https://hellollama.net/llm-초급강좌-6-langchain-을-이용한-rag-실습/
- [14] https://blog.kbanknow.com/82
- [15] https://m.ypbooks.co.kr/books/202407162848637484
