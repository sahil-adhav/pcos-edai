class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    
    message = message.toLowerCase();
    if(message.includes('hello')||message.includes('hey')||message.includes('hi')){
      this.actionProvider.handleHello();
    }
    if(message.includes('symptoms')){
      this.actionProvider.handleTest()
    }
    if(message.includes('explore')){
      this.actionProvider.handleexplore()
    }
    if(message.includes('faqs')){
      this.actionProvider.handleFAQs()
    }
    if(message.includes('thank')){
      this.actionProvider.handleend()
    }
    
  }
}

export default MessageParser;