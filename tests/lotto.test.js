// Mock the services/okdevtv-list module first before requiring routes/index to avoid ESM import issues with google-spreadsheet
jest.mock('../services/okdevtv-list', () => ({
  getItems: jest.fn().mockResolvedValue([])
}))

const request = require('supertest')
const express = require('express')
const router = require('../routes/index')
const axios = require('axios')

jest.mock('axios')

const app = express()
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use('/', router)

describe('GET /645', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the lotto page with fetched latest winning numbers', async () => {
    const mockLottoData = {
      data: {
        list: [{
          ltEpsd: 1230,
          ltRflYmd: '20260627',
          tm1WnNo: 3,
          tm2WnNo: 8,
          tm3WnNo: 9,
          tm4WnNo: 22,
          tm5WnNo: 28,
          tm6WnNo: 42,
          bnsWnNo: 45
        }]
      }
    }
    axios.get.mockResolvedValue({ data: mockLottoData })

    const response = await request(app)
      .get('/645')
      .expect(200)

    expect(response.text).toContain('동행복권 최근 당첨 번호')
    expect(response.text).toContain('1230회')
    expect(response.text).toContain('2026-06-27')
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  it('should render the lotto page even if latest winning numbers fetch fails', async () => {
    axios.get.mockRejectedValue(new Error('Network error'))

    const response = await request(app)
      .get('/645')
      .expect(200)

    expect(response.text).toContain('로또 번호 번개 추출기')
    expect(response.text).not.toContain('동행복권 최근 당첨 번호')
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
