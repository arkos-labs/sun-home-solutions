import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

type Message = {
  id: string;
  sender: 'bot' | 'user';
  content: string;
  options?: string[];
  requiresInput?: boolean;
  inputType?: string;
};

type FormData = {
  name: string;
  phone: string;
  email: string;
  surface: string;
  heating: string;
  roof: string;
  bill: string;
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // State machine for conversation
  const [conversationState, setConversationState] = useState<string>("init");
  const [hasStarted, setHasStarted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "", phone: "", email: "", surface: "", heating: "", roof: "", bill: ""
  });

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, open]);

  // Start conversation when opening for the first time
  useEffect(() => {
    if (open && !hasStarted) {
      setHasStarted(true);
      simulateBotResponse("init");
    }
  }, [open]);

  const simulateBotResponse = async (state: string, delay = 800) => {
    setIsTyping(true);
    setConversationState(state);

    window.setTimeout(() => {
      let botMessages: Message[] = [];

      switch (state) {
        case "init":
          botMessages = [
            { id: Date.now().toString(), sender: 'bot', content: "Bonjour ! 👋 Bienvenue chez Sun Home Solutions." },
            { id: (Date.now() + 1).toString(), sender: 'bot', content: "Avant de continuer, acceptez-vous d'être recontacté par nos conseillers et le traitement de vos données ?", options: ["J'accepte", "Refuser"] }
          ];
          break;

        case "choose_path":
          botMessages = [
            { id: Date.now().toString(), sender: 'bot', content: "Comment puis-je vous aider aujourd'hui ?", options: ["Audit solaire gratuit", "Être rappelé"] }
          ];
          break;

        case "consent_refused":
          botMessages = [
            { id: Date.now().toString(), sender: 'bot', content: "Pas de souci. Vous pouvez consulter nos informations sans fournir vos données. Si vous changez d'avis, rouvrez le chat." }
          ];
          break;

        // Path Entry Points
        case "path_audit":
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "Excellent choix ! Pour réaliser votre étude personnalisée, j'ai besoin de quelques infos. 😉" }];
          // Chain to first question
          setTimeout(() => simulateBotResponse("ask_name", 1000), 1000);
          break;

        case "path_callback":
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "Aucun problème. Pour que le bon expert vous rappelle, commençons par vos coordonnées. 📞" }];
          setTimeout(() => simulateBotResponse("ask_name", 1000), 1000);
          break;

        // Data Collection Loop (Sequential)
        case "ask_name":
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "Quel est votre nom complet ?", requiresInput: true, inputType: "text" }];
          break;

        case "ask_phone":
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "A quel numéro de téléphone peut-on vous joindre ?", requiresInput: true, inputType: "tel" }];
          break;

        case "ask_email":
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "Et votre adresse email ?", requiresInput: true, inputType: "email" }];
          break;

        case "ask_surface":
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "Quelle surface de toiture est disponible environ (m²) ?", requiresInput: true, inputType: "number" }];
          break;

        case "ask_heating":
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "Quel est votre type de chauffage actuel ?", options: ["Électrique", "Gaz", "Fioul", "Pompe à chaleur", "Autre"] }];
          break;

        case "ask_roof":
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "Quel est le type de votre toiture ?", options: ["Tuiles", "Ardoises", "Bac acier", "Toit plat", "Autre"] }];
          break;

        case "ask_bill":
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "Dernière question : quel est le montant mensuel de votre facture d'électricité ?", options: ["< 50€", "50-100€", "100-200€", "200-300€", "> 300€"] }];
          break;

        // End
        case "end":
          botMessages = [
            { id: Date.now().toString(), sender: 'bot', content: "Merci beaucoup ! ✅" },
            { id: (Date.now() + 1).toString(), sender: 'bot', content: "Votre demande a bien été transmise à notre bureau d'étude. Un conseiller vous recontactera sous 24h avec votre étude personnalisée. À très vite !" }
          ];
          // Here you would typically submit formData to backend
          console.log("Form Completed:", formData);
          break;

        default:
          botMessages = [{ id: Date.now().toString(), sender: 'bot', content: "Je ne suis pas sûr de comprendre." }];
      }

      setIsTyping(false);

      // If messages are empty (intermediate state), simply return
      if (botMessages.length === 0) return;

      // Add messages sequentially
      const addNextMessage = (index: number) => {
        if (index >= botMessages.length) return;

        setMessages(prev => [...prev, botMessages[index]]);

        if (index < botMessages.length - 1) {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addNextMessage(index + 1);
          }, 1000);
        }
      };

      addNextMessage(0);

    }, delay);
  };

  const handleUserResponse = (text: string) => {
    // 1. Add User Message
    const newMessage: Message = { id: Date.now().toString(), sender: 'user', content: text };
    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // 2. State Transition & Data Saving
    let nextState = "";

    // -- Branching Logic --
    if (conversationState === "init") {
      if (text.includes("J'accepte")) nextState = "choose_path";
      else if (text.includes("Refuser")) nextState = "consent_refused";
      else nextState = "init"; // Fallback
    }
    else if (conversationState === "choose_path") {
      if (text.includes("Audit")) nextState = "path_audit";
      else if (text.includes("appelé")) nextState = "path_callback";
      else nextState = "choose_path"; // Fallback
    }

    // -- Collection Logic --
    else if (conversationState === "ask_name") {
      setFormData(prev => ({ ...prev, name: text }));
      nextState = "ask_phone";
    }
    else if (conversationState === "ask_phone") {
      setFormData(prev => ({ ...prev, phone: text }));
      nextState = "ask_email";
    }
    else if (conversationState === "ask_email") {
      setFormData(prev => ({ ...prev, email: text }));
      nextState = "ask_surface";
    }
    else if (conversationState === "ask_surface") {
      setFormData(prev => ({ ...prev, surface: text }));
      nextState = "ask_heating";
    }
    else if (conversationState === "ask_heating") {
      setFormData(prev => ({ ...prev, heating: text }));
      nextState = "ask_roof";
    }
    else if (conversationState === "ask_roof") {
      setFormData(prev => ({ ...prev, roof: text }));
      nextState = "ask_bill";
    }
    else if (conversationState === "ask_bill") {
      setFormData(prev => ({ ...prev, bill: text }));
      nextState = "end";
    }

    // 3. Trigger Bot Response
    if (nextState) {
      simulateBotResponse(nextState);
    }
  };

  const handleInputSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;
    handleUserResponse(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[90vw] max-w-[380px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl flex flex-col h-[500px] max-h-[70vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-primary/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-sm">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Assistant Solaire</p>
                  <p className="flex items-center text-xs text-green-600">
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    En ligne
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setOpen(false)}>
                  <X className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-slate-950/20 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-white dark:bg-slate-800 border border-border text-foreground rounded-bl-none'
                        }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white dark:bg-slate-800 border border-border rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Actions Area */}
            <div className="border-t border-border bg-background p-3">
              {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].options ? (
                <div className="flex flex-wrap gap-2">
                  {messages[messages.length - 1].options!.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      size="sm"
                      className="rounded-full border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all"
                      onClick={() => handleUserResponse(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              ) : (
                <form onSubmit={handleInputSubmit} className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={messages.length > 0 && messages[messages.length - 1].inputType === 'number' ? "120" : messages.length > 0 && messages[messages.length - 1].inputType === 'tel' ? "06 00 00 00 00" : "Écrivez votre message..."}
                    type={messages.length > 0 && messages[messages.length - 1].inputType ? messages[messages.length - 1].inputType : "text"}
                    className="rounded-full bg-slate-50 dark:bg-slate-900 border-border focus-visible:ring-primary/20"
                    disabled={isTyping}
                    autoFocus
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!inputValue.trim() || isTyping}
                    className="rounded-full bg-primary hover:bg-primary/90 shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setOpen((prev) => !prev)}
        size="lg"
        className={`h-14 w-14 rounded-full shadow-solar transition-transform hover:scale-110 ${open ? 'bg-slate-800 hover:bg-slate-900' : 'gradient-solar'}`}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default ChatWidget;
