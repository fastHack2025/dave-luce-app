# 🚀 Dave & Luce Solutions — Web App IA

Une application moderne, performante, intelligente et responsive pour gérer les services de **Dave & Luce Solutions**.

✨ Intégration de GPT-4, services dynamiques, design UX/UI professionnel et base Next.js 15 avec App Router.

---

## 🔧 Stack technique

- **Next.js 15+ (App Router)**
- **React 19 (use client/server)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **OpenAI GPT-4 (API)**
- **Vercel (déploiement prévu)**

---

## 🧠 Fonctionnalité IA

💬 **Assistant IA GPT-4 intégré**  
- Comprend les besoins du client  
- Propose la bonne solution (CRM, formation, etc.)  
- Peut générer un devis ou lancer une commande automatiquement

---

## 🧱 Structure du projet

```txt
src/
├── app/                → Pages & API avec App Router
│   └── api/chat/       → Endpoint GPT-4
├── components/         → UI (Hero, Services, ChatBot)
├── hooks/              → Hooks React (ex: useChatGPT)
├── lib/                → Libs globales (ex: openai.ts)
├── types/              → Interfaces (chat, messages, etc.)
├── config/, utils/, features/ → Briques métiers
