# 🐱 Site of Cats

This is a simple web application that displays random cat pictures and cat breed information using [TheCatAPI](https://thecatapi.com/). It was built as a pre-work assignment using HTML, CSS, JavaScript, and Vite for fast development and secure API key handling.

---

## What This Project Does

- Displays a list of cat breeds (name + description)
- Shows random cat images from the internet
- Uses TheCatAPI to fetch data securely
- Uses buttons to navigate between the two endpoints (breeds & images)

---

## Techns Used

- **HTML** for structure
- **CSS** for styling
- **JavaScript** for logic and API communication
- **Vite** as a build tool and local development server
- **.env** file to securely store the API key

---

##  How I Built It — Step-by-Step

- Used Visual Studio software
  
### 1. Created a new Vite project

```bash
npm create vite@latest site-of-cats-vite
cd site-of-cats-vite
npm install
```

### 2. Organized my project files

- Edited `index.html` for structure and layout
- Wrote a custom `main.js` file to fetch and display data
- Created `style.css` to style the layout and buttons
- Created a `.env` file to securely store the API key from TheCatAPI

### 3. Fetched data from two API endpoints

- `/v1/breeds` – to get breed names and descriptions
- `/v1/images/search` – to get random cat images

### 4. Connected buttons to make requests to each endpoint

- Clicking **"Show Cat Breeds"** shows the first 10 cat breeds and their descriptions
- Clicking **"Show Random Cats"** shows 6 random cat images

### 5. Ran and tested the app locally

```bash
npm run dev
```

The site was then accessed at `http://localhost:5173` (or a similar port shown in the terminal).

### 6. Pushed the project to GitHub using commands like:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/lissethjacqueline/site-of-cats.git
git branch -M main
git push -u origin main
```

---

##  How to Use This Project

### To run it on your own computer:

1. Clone the repo:
```bash
git clone https://github.com/lissethjacqueline/site-of-cats.git
cd site-of-cats
```

2. Install dependencies:
```bash
npm install
```

3. Add your own `.env` file in the root folder:
```
VITE_CAT_API_KEY=your_api_key_here
```

4. Start the local  server:
```bash
npm run dev
```

5. Visit the URL shown in the terminal (e.g., http://localhost:5173) to view the site.

---

## Notes

- The API key is stored in a `.env` file and never committed to GitHub
- `.env` is included in `.gitignore` to keep it private
- The app is secure for local development and can be deployed with tools like Netlify or Vercel

---

## Author

Made by [Lisseth Jacqueline](https://github.com/lissethjacqueline)  
Pre-work assignment: Site of Cats 🐾
