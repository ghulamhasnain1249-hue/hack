import { useState } from 'react'
import './App.css'

function App() {
  const [isHacked, setIsHacked] = useState(false)
  const [accessLevel, setAccessLevel] = useState(0)

  const handleHack = () => {
    if (isHacked) {
      setIsHacked(false)
      setAccessLevel(0)
      return
    }
    if (accessLevel < 100) {
      setAccessLevel(prev => Math.min(prev + 25, 100))
    } else {
      setIsHacked(true)
    }
  }


  return (
    <div className="app-container">
      <h1 className="title">Hack Me</h1>
      <p className="subtitle">System Vulnerability Detected</p>

      <div className="terminal-card">
        <div className="terminal-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>

        <div className="terminal-content">
          <p><span className="prompt">root@cyber:~$</span> whoami</p>
          <p>guest_user</p>
          <br />
          <p><span className="prompt">root@cyber:~$</span> ./init_breach.sh</p>

          {accessLevel > 0 && (
            <p><span className="prompt">root@cyber:~$</span> Bypassing firewall... [{accessLevel}%]</p>
          )}

          {isHacked ? (
            <p className="status-text type-warning">
              ACCESS GRANTED. SYSTEM COMPROMISED.
            </p>
          ) : (
            <div style={{ marginTop: '1rem' }}>
              <span className="prompt">root@cyber:~$</span>
              <span className="typewriter">Awaiting command injection...</span>
            </div>
          )}
        </div>
      </div>

      <button className="hack-button" onClick={handleHack}>
        {isHacked ? 'Reboot System' : (accessLevel === 100 ? 'Execute Payload' : 'Initiate Breach')}
      </button>
    </div>
  )
}

export default App
