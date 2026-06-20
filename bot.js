const bedrock = require('bedrock-protocol')
function createBot() {
  const client = bedrock.createClient({
    host: 'cheatin.aternos.me', 
    port: 24117,                            
    username: 'AntiAFK_Bot',               
    offline: true                          
  })
  client.on('join', () => { console.log('机器人已成功进入服务器！') })
  client.on('close', (reason) => {
    console.log(`断开: ${reason}，5秒后重连...`)
    setTimeout(createBot, 5000)
  })
  client.on('error', (err) => { console.error('错误:', err) })
}
createBot()

