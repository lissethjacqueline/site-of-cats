# 🐱 Site of Cats

A simple web app built with Vite that displays random cat images and breed information using [TheCatAPI](https://thecatapi.com/). Built with HTML, CSS, JavaScript, and a secure `.env` file for your API key.

---

## Features

- View random cat images
- Explore cat breed names and descriptions
- Built with Vite for fast local development
- API key hidden securely using `.env`

---

## Running the Project Locally

### 1. Clonning/Download the Repository

```bash
git clone https://github.com/lissethjacqueline/site-of-cats.git
cd site-of-cats
```

### 2. Install Dependencies

Making sure Node.js and npm are installed. Then I ran:

```bash
npm install
```

### 3. Adding API Key

Creating a `.env` file in the root of the project with the following:
```env
VITE_CAT_API_KEY=your_real_api_key_here
```
>Getting the free API key by signing up at https://thecatapi.com

---

### 4. Starting the Vite Dev Server

```bash
npm run dev
```
Then openning the browser to the local URL shown in my terminal. 
---


## 📁 Project Structure

```
site-of-cats/
├── index.html
├── .env              # (you create this)
├── src/
│   ├── main.js
│   └── style.css
├── package.json
├── vite.config.js
├── .gitignore
```

##  Security Note

- Your `.env` file keeps your API key safe during development

--
by Jacqueline 
