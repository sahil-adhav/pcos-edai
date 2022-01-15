class ActionProvider {
  constructor(
   createChatBotMessage,
   setStateFunc,
   createClientMessage,
   stateRef,
   createCustomMessage,
   ...rest
 ) 
 {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
   this.createClientMessage = createClientMessage;
   this.stateRef = stateRef;
   this.createCustomMessage = createCustomMessage;
 }

  
 handleHello() {
  const message = this.createChatBotMessage('Hello. Nice to meet you. How can I help you?', 
    {widget: "options",}
  );

  this.addMessageToState(message);

  }

  handleFAQs = () => {
    const message = this.createChatBotMessage(
      "Here are some popular FAQs",
      {
        widget:"FAQs",
      });
      
      this.addMessageToState(message);      
    }

  handleTest = () => {
    const message = this.createChatBotMessage(
        "Testing",
        {
          widget:"Test",
        });
        
        this.addMessageToState(message);      
    }

    handleexplore = () => {
      const message = this.createChatBotMessage(
          "Please feel free explore the website",
          );
          
          this.addMessageToState(message);      
      }

      handleend = () => {
        const message = this.createChatBotMessage(
            "I had a lovely conversation so, thank you. Come back soon",
            );
            
            this.addMessageToState(message);      
        }


  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

}


export default ActionProvider;