# Rive 애니메이션 설정 가이드

이 프로젝트는 팬더 마스코트를 Rive를 통해 반응형 아바타로 구현합니다.

## 필요한 작업

### 1. Rive 애니메이션 파일 생성

[Rive 에디터](https://rive.app/editor/)에서 팬더 마스코트 애니메이션을 생성하세요.

#### 필요한 State Machine 입력값:
- **isListening** (Boolean): 사용자가 마이크를 켰을 때 true
- **isSpeaking** (Boolean): AI가 응답 중일 때 true
- **mood** (Number): 0=neutral, 1=happy, 2=thinking

#### 애니메이션 상태:
- **Idle**: 기본 대기 상태 (눈 깜빡임)
- **Listening**: 마이크 켜짐 (귀를 쫑긋)
- **Speaking**: AI 응답 중 (입 움직임)
- **Happy**: Casual 모드 (밝은 표정)
- **Thinking**: Formal 모드 (진지한 표정)

### 2. 파일 배치

생성한 `.riv` 파일을 다음 경로에 저장:
\`\`\`
public/animations/panda-avatar.riv
\`\`\`

### 3. Rive 파일 구조 예시

**Artboard 이름**: `Panda`
**State Machine 이름**: `State Machine`

**Inputs**:
- `isListening`: Boolean
- `isSpeaking`: Boolean  
- `mood`: Number (0, 1, 2)

### 4. 대안 (임시)

Rive 파일이 준비될 때까지 `RivePandaAvatar` 컴포넌트는 팬더 이미지를 표시합니다.

## Gemini API 설정

### 환경 변수 추가

프로젝트에 다음 환경 변수를 추가하세요:

\`\`\`bash
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
\`\`\`

### API 키 발급

1. [Google AI Studio](https://makersuite.google.com/app/apikey) 방문
2. API 키 생성
3. Vercel 환경 변수에 추가

## 사용 방법

채팅 화면(`/chat`)에서:
- AI가 응답할 때 팬더가 말하는 애니메이션 재생
- 마이크 버튼을 누르면 듣는 애니메이션 재생
- Casual/Formal 모드에 따라 팬더 표정 변화

## 참고 자료

- [Rive React Documentation](https://rive.app/community/doc/web-js/docg08YkWPCT)
- [Vercel AI SDK with Gemini](https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai)
