import './App.css'

const links = [
  {
    id: 1,
    title: 'เข้าสู่เว็บไซต์',
    subtitle: 'ดูข้อมูลและจัดการระบบ',
    url: 'https://smokedetectweb.vercel.app/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'ดาวน์โหลดแอปพลิเคชัน',
    subtitle: 'Android APK',
    url: 'https://smokedetectweb.vercel.app/APK/SmokeDetect.apk',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
  {
    id: 3,
    title: 'LINE แจ้งเตือน',
    subtitle: 'รับการแจ้งเตือนผ่าน LINE',
    url: 'https://line.me/R/ti/p/@444sinws',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #00c300 0%, #00e000 100%)',
  },
]

function App() {
  return (
    <div className="container">
      {/* Background Effects */}
      <div className="bg-gradient" />
      <div className="bg-blur bg-blur-1" />
      <div className="bg-blur bg-blur-2" />
      <div className="bg-blur bg-blur-3" />
      
      {/* Main Content */}
      <main className="main">
        {/* Logo/Avatar */}
        <div className="avatar-container">
          <div className="avatar">
            <img src="/logo.png" alt="SmokeDetect Logo" className="avatar-img" />
          </div>
          <div className="avatar-ring" />
        </div>

        {/* Title */}
        <h1 className="title">SmokeDetect</h1>
        <p className="subtitle">ระบบตรวจจับควันอัจฉริยะ</p>

        {/* Links */}
        <div className="links">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--gradient': link.gradient 
              } as React.CSSProperties}
            >
              <div className="link-icon" style={{ background: link.gradient }}>
                {link.icon}
              </div>
              <div className="link-content">
                <span className="link-title">{link.title}</span>
                <span className="link-subtitle">{link.subtitle}</span>
              </div>
              <div className="link-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 SmokeDetect. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
