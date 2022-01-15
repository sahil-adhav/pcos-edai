import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options/Options.jsx";
import FAQs from "./FAQs/FAQ";
import T from "./detection/test.jsx";

const botName = 'Tia';  

const config = {
  initialMessages: 
  [
    createChatBotMessage(`Hi! I'm  ${botName}, your PCOS companion.`),

    createChatBotMessage(`How can I help you?`, 
    { withAvatar: false,
      delay: 500,
      widget: "options",}
    ),
  ],
  customComponents:{
    
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "FAQs",
      widgetFunc: (props) => <FAQs {...props} />,
      props: {
        questions: [
          {
            question: "What does PCOS mean?",
            answer:
              "PCOS stands for Polycystic Ovary Syndrome.",
            id: 1,
          },
          {
            question: "What causes PCOS?",
            answer:
              "Presently, the exact cause of PCOS is unknown. Some experts lean toward the theory that it might be a genetic, inherited condition since women who have it are more likely to have a sister or mother who also has it. Most feel that women with PCOS have a defect in insulin or insulin secretion that leads to the disease, that is why women with PCOS are more likely to get diabetes. ",
            id: 2,
          },
          {
            question: "Can PCOS affect your chances of getting pregnant?",
            answer:
              "It might. Because it is a hormonal imbalance, it can hamper normal ovulation and cause female infertility as well as sub-fertility.",
            id: 3,
          },
          {
            question: "Is there a cure for PCOS?",
            answer:
              "No, there isn’t. It can be managed with the appropriate treatment at a fertility clinic in Denver depending on symptoms, but not cured. Weight loss may help improve the symptoms in a lot of women with PCOS.",
            id: 4,
          },
          {
            question: "What causes PCOS?",
            answer:
              "Presently, the exact cause of PCOS is unknown. Some experts lean toward the theory that it might be a genetic, inherited condition since women who have it are more likely to have a sister or mother who also has it. Most feel that women with PCOS have a defect in insulin or insulin secretion that leads to the disease, that is why women with PCOS are more likely to get diabetes. ",
            id: 5,
          },
        ],
      },      
    },
    {
      widgetName: "Test",
      widgetFunc: (props) => <T{...props} />,
    },
          
        ],
      }
    
 

export default config