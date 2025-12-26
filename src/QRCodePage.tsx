import { QRCodeCanvas } from 'qrcode.react'
import './QRCodePage.css'

const SITE_URL = 'https://smart-link-lilac.vercel.app/'

function QRCodePage() {
  const handleDownload = () => {
    const canvas = document.querySelector('.qr-code canvas') as HTMLCanvasElement
    if (!canvas) return

    const newCanvas = document.createElement('canvas')
    const size = 1024
    newCanvas.width = size
    newCanvas.height = size
    const ctx = newCanvas.getContext('2d')
    if (!ctx) return

    ctx.drawImage(canvas, 0, 0, size, size)

    const logo = new Image()
    logo.crossOrigin = 'anonymous'
    logo.onload = () => {
      const logoSize = 180
      const x = (size - logoSize) / 2
      const y = (size - logoSize) / 2

      ctx.beginPath()
      ctx.arc(size / 2, size / 2, logoSize / 2 + 15, 0, Math.PI * 2)
      ctx.fillStyle = 'white'
      ctx.fill()

      ctx.save()
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, logoSize / 2, 0, Math.PI * 2)
      ctx.clip()
      ctx.drawImage(logo, x, y, logoSize, logoSize)
      ctx.restore()

      const link = document.createElement('a')
      link.download = 'smokedetect-qrcode.png'
      link.href = newCanvas.toDataURL('image/png')
      link.click()
    }
    logo.src = '/logo.png'
  }

  return (
    <div className="qr-container">
      <div className="qr-card">
        <div className="qr-header">
          <img src="/logo.png" alt="SmokeDetect" className="qr-logo" />
          <h1>SmokeDetect</h1>
          <p>สแกน QR Code เพื่อเข้าสู่เว็บไซต์</p>
        </div>

        <div className="qr-code">
          <div className="qr-wrapper">
            <QRCodeCanvas
              value={SITE_URL}
              size={512}
              level="H"
              marginSize={2}
              bgColor="#ffffff"
              fgColor="#0f172a"
            />
            <div className="qr-logo-overlay">
              <img src="/logo.png" alt="Logo" />
            </div>
          </div>
        </div>

        <div className="qr-url">{SITE_URL}</div>

        <button className="download-btn" onClick={handleDownload}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          ดาวน์โหลด QR Code
        </button>

        <a href="/" className="back-link">← กลับหน้าหลัก</a>
      </div>
    </div>
  )
}

export default QRCodePage
