#!/bin/bash

# 🚀 okdevtv & odevtube 통합 - 빠른 시작 가이드

echo "================================"
echo "okdevtv & odevtube 통합 설정"
echo "================================"
echo ""

# 1. Check Node.js installation
echo "✓ Node.js 버전 확인..."
node -v
npm -v
echo ""

# 2. Install dependencies
echo "✓ 의존성 설치 중..."
npm install
echo ""

# 3. Create .env file
echo "✓ .env 파일 설정..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "  - .env 파일 생성됨"
    echo "  - 📝 .env 파일을 편집하여 필수 값을 입력하세요:"
    echo "    DB_HOST=localhost"
    echo "    DB_NAME=okdevtv_integrated"
    echo "    DB_USER=devuser"
    echo "    DB_PASS=devpass"
    echo "    GITHUB_CLIENT_ID=your_id"
    echo "    GITHUB_CLIENT_SECRET=your_secret"
else
    echo "  - .env 파일 이미 존재"
fi
echo ""

# 4. Check database
echo "✓ 데이터베이스 연결 확인..."
npm run health-check
echo ""

# 5. Run migrations
echo "✓ 데이터베이스 마이그레이션..."
npm run migrate:db
echo ""

# 6. Start application
echo "✓ 애플리케이션 시작..."
echo ""
echo "개발 모드:      npm run dev"
echo "프로덕션 모드:  npm start"
echo ""
echo "http://localhost:3000 에서 접속하세요"
echo ""
echo "================================"
echo "✅ 설정 완료!"
echo "================================"
