#!/usr/bin/env node

/**
 * Integration Health Check
 * Validates the setup before starting the application
 */

const fs = require('fs')
const path = require('path')

console.log('🔍 okdevtv & odevtube 통합 설정 검사\n')

const checks = {
  envFile: false,
  requiredEnvVars: {},
  dependencies: {},
  files: {},
}

// 1. Check .env file
console.log('1️⃣  .env 파일 검사...')
const envPath = path.join(__dirname, '..', '.env')
if (fs.existsSync(envPath)) {
  checks.envFile = true
  console.log('   ✓ .env 파일 존재')
  
  // Check required environment variables
  const env = require('dotenv').config({ path: envPath }).parsed || {}
  const requiredVars = [
    'DB_HOST',
    'DB_NAME',
    'DB_USER',
    'GITHUB_CLIENT_ID',
    'GITHUB_CLIENT_SECRET',
  ]
  
  requiredVars.forEach(varName => {
    if (env[varName]) {
      checks.requiredEnvVars[varName] = true
      console.log(`   ✓ ${varName} = ${env[varName].substring(0, 10)}...`)
    } else {
      checks.requiredEnvVars[varName] = false
      console.log(`   ✗ ${varName} 미설정 - 필수항목`)
    }
  })
} else {
  console.log('   ✗ .env 파일 없음')
  console.log('   -> cp .env.example .env')
}

// 2. Check critical files
console.log('\n2️⃣  핵심 파일 검사...')
const criticalFiles = [
  'models/index.js',
  'dao/videoDao.js',
  'dao/channelDao.js',
  'routes/video.js',
  'app.js',
]

criticalFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file)
  if (fs.existsSync(filePath)) {
    checks.files[file] = true
    console.log(`   ✓ ${file}`)
  } else {
    checks.files[file] = false
    console.log(`   ✗ ${file} 없음`)
  }
})

// 3. Check node_modules
console.log('\n3️⃣  필수 패키지 검사...')
const criticalPackages = [
  'express',
  'sequelize',
  'mariadb',
  'passport',
  'ejs',
]

const packageJsonPath = path.join(__dirname, '..', 'package.json')
let packageJson = {}
try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
  const allDeps = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  }
  
  criticalPackages.forEach(pkg => {
    if (allDeps[pkg]) {
      checks.dependencies[pkg] = true
      console.log(`   ✓ ${pkg}@${allDeps[pkg]}`)
    } else {
      checks.dependencies[pkg] = false
      console.log(`   ✗ ${pkg} 없음`)
    }
  })
} catch (e) {
  console.log('   ✗ package.json을 읽을 수 없음')
}

// Summary
console.log('\n📋 검사 요약:')
const envOk = checks.envFile && Object.values(checks.requiredEnvVars).every(v => v)
const filesOk = Object.values(checks.files).every(v => v)
const depsOk = Object.values(checks.dependencies).every(v => v)

console.log(`  환경변수: ${envOk ? '✓' : '✗'}`)
console.log(`  파일: ${filesOk ? '✓' : '✗'}`)
console.log(`  패키지: ${depsOk ? '✓' : '✗'}`)

if (envOk && filesOk && depsOk) {
  console.log('\n✅ 모든 검사 통과! 애플리케이션 시작 준비 완료')
  process.exit(0)
} else {
  console.log('\n⚠️  일부 검사 실패. 아래 항목을 확인하세요:')
  if (!envOk) {
    console.log('  1. .env 파일 확인 및 필수 환경변수 설정')
  }
  if (!filesOk) {
    console.log('  2. 필수 파일이 모두 존재하는지 확인')
  }
  if (!depsOk) {
    console.log('  3. npm install 실행')
  }
  process.exit(1)
}
