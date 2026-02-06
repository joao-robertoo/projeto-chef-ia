# 👨‍🍳 Chef IA

### Seu assistente culinário inteligente com base nos ingredientes que você já tem

O **Chef IA** é um aplicativo mobile desenvolvido em **React Native com Expo** que utiliza **Inteligência Artificial** para sugerir receitas com base nos ingredientes que o usuário possui no momento.

Nada de ficar pesquisando receita e descobrindo que falta metade das coisas. Aqui você cozinha com o que tem 🧠🍅🥔

---

## <h2>🎥 Demonstração do Projeto</h2>

<table>
  <tr>
    <th>📱 Mobile</th>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/joao-robertoo/projeto-chef-ia/blob/main/assets/mobile.gif?raw=true" width="250"/>
    </td>
  </tr>
</table>

---

## 🌐 Simulador Web do Aplicativo

Você pode testar a experiência do app diretamente pelo navegador através do simulador:

[![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel\&logoColor=white)](https://simulador-chef-ia.vercel.app/)


---

## 📲 Como baixar o aplicativo (Android)

O app pode ser instalado diretamente no seu celular Android através do arquivo `.apk`.

### Passo a passo:

1. Baixe o arquivo do aplicativo clicando no link abaixo
2. Ative a opção **"Permitir instalação de fontes desconhecidas"** no seu celular
3. Abra o arquivo baixado
4. Toque em **Instalar**
5. Pronto! Agora é só abrir e cozinhar 👨‍🍳🔥

<a href="https://github.com/joao-robertoo/projeto-chef-ia/releases/download/v1.0.0/chef-ia.apk" download>
  <img src="https://img.shields.io/badge/Baixar%20APK-Android-green?style=for-the-badge&logo=android&logoColor=white" />
</a>

---

## 🍏 Como testar no iPhone (iOS)

| 📱 Teste pelo Expo Go                                                                                                                                                                                                                                                                                                                                     | 📷 QR Code do Projeto                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Por limitações da Apple, não é possível instalar o app diretamente por arquivo como no Android. Mas você pode testar facilmente usando o **Expo Go**. <br><br> **Passo a passo:** <br><br> 1️⃣ Baixe o app **Expo Go** na App Store <br> 2️⃣ Abra a câmera do seu iPhone <br> 3️⃣ Escaneie o QR Code ao lado <br> 4️⃣ O app abrirá automaticamente no Expo Go <br> | <img src="COLOQUE_AQUI_O_LINK_DA_IMAGEM_DO_QRCODE" width="300"/> |

---

## 🧠 Como funciona a IA

O usuário informa os ingredientes disponíveis, e o app envia esses dados para uma **API de IA** que:

✔ Analisa os ingredientes<br>
✔ Sugere pratos possíveis<br>
✔ Retorna instruções de preparo<br>
✔ Evita receitas com ingredientes ausentes<br>

Tudo isso em segundos ⚡

---

## 🛠 Tecnologias Utilizadas

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge\&logo=expo\&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)
![Groq API](https://img.shields.io/badge/Groq%20AI-FF4F00?style=for-the-badge)

---

## 📁 Estrutura do Projeto

```bash
CHEF-IA/
├── .expo/             
├── assets/              
├── node_modules      
├── .gitignore         
├── App.js        
├── app.json
├── eas.json
├── index.js
├── package.lock.json           
└── package.json          
```

---

## ⚙️ Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/chef-ia.git

# Entre na pasta
cd chef-ia

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

Depois disso você pode abrir no:

📱 Emulador Android<br>
🍏 Simulador iOS (Mac)<br>
📷 Ou escanear o QR Code com o Expo Go

---

## 🔐 Variáveis de Ambiente

Este projeto utiliza uma API de IA, portanto é necessário configurar sua chave:

Crie um arquivo `.env` na raiz do projeto:

```
GROQ_API_KEY=SUA_CHAVE_AQUI
```

E use uma biblioteca como `expo-constants` ou `react-native-dotenv` para acessar a variável.

---

## 📌 Funcionalidades

✔ Inserção de ingredientes disponíveis<br>
✔ Sugestão inteligente de receitas<br>
✔ Interface simples e intuitiva<br>
✔ Integração com IA<br>
✔ Simulador Web para demonstração<br>
✔ Versão Android instalável

---

## 🎯 Objetivo do Projeto

Demonstrar habilidades em:

* Desenvolvimento Mobile com React Native
* Integração com APIs de Inteligência Artificial
* Experiência do Usuário (UX)
* Publicação e distribuição de apps
* Criação de solução prática para o dia a dia

---

## 👨‍💻 Autor

Desenvolvido por ***João Roberto***<br>
📚 Em transição para a área de tecnologia<br>
🚀 Focado em desenvolvimento mobile e IA

---

