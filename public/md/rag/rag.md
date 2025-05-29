# RAG (검색 증강 생성)

- RAG: Retrieval-Augmented Generation
- LLM: Language Model

## RAG란?
RAG(Retrieval-Augmented Generation)는 정보 검색(Retrieval)과 텍스트 생성(Generation)을 결합한 AI 모델 아키텍처입니다. 외부 지식 소스에서 정보를 검색한 후, 이 정보를 바탕으로 답변을 생성하는 방식으로 작동합니다.

## RAG의 주요 구성 요소
1. **Retriever**: 사용자 쿼리와 관련된 문서나 정보를 외부 소스에서 검색
2. **Generator**: 검색된 정보를 바탕으로 자연스러운 응답 생성
3. **Vector Database**: 문서를 벡터 형태로 저장하고 유사도 기반 검색을 지원

## RAG의 장점
- 최신 정보 반영이 용이
- 모델이 학습하지 못한 도메인에서도 효과적
- 생성된 답변의 출처 추적 가능
- Hallucination(환각) 현상 감소

## 간단한 RAG 구현 예제 (Python)

```python
from transformers import RagTokenizer, RagRetriever, RagSequenceForGeneration
import torch

# 모델과 토크나이저 로드
tokenizer = RagTokenizer.from_pretrained("facebook/rag-sequence-nq")  
retriever = RagRetriever.from_pretrained("facebook/rag-sequence-nq", index_name="exact")
model = RagSequenceForGeneration.from_pretrained("facebook/rag-sequence-nq", retriever=retriever)

# 질문 설정
input_text = "RAG가 무엇인가요?"

# 모델에 입력 전처리
inputs = tokenizer(input_text, return_tensors="pt")

# 답변 생성
outputs = model.generate(inputs["input_ids"])
# 생성된 답변 디코딩
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
```

## RAG 활용 사례
1. 질의응답 시스템
2. 고객 서비스 챗봇
3. 기술 문서 검색 및 요약
4. 지식 기반 대화 시스템

## RAG의 한계
- 검색된 문서의 품질에 의존적
- 대규모 벡터 데이터베이스 유지 필요
- 실시간 검색으로 인한 지연 시간 발생 가능

## 참고 자료
- [Hugging Face RAG 문서](https://huggingface.co/transformers/model_doc/rag.html)
- [Facebook Research RAG](https://ai.facebook.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/)

