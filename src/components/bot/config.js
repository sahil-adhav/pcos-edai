import { createChatBotMessage } from "react-chatbot-kit";

const botName = 'Alia'

const config = {
  initialMessages: 
  [
    createChatBotMessage(`Hi! I'm  ${botName}, your PCOS companion.`), 
    
  ]
}

export default config