import { createChatBotMessage } from "react-chatbot-kit";

const botName = 'Tia'

const config = {
  initialMessages: 
  [    createChatBotMessage(`Hi! I'm  ${botName}, your PCOS companion.`), ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
    
  }
}

export default config


