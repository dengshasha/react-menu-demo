# React + Vite Menu Demo

## Tech Stack
- React: For building the user interface.
- React Router: Page routing management library. 
- Vite: Build tool.
- Tailwind CSS: For styling and fast layout development.
- GitHub Actions: For CI/CD automation.
- GitHub Pages: For hosting and publishing the site.
- Eslint: Static code analysis tool

## Project Structure
```
/react-menu-demo
├── /dist            # Compiled production build files
|-- /public          # Statice resources
├── /src             # Source code
│   ├── /components  
|   |    |-- MenuDetail.jsx
|   |    |-- Navbar.jsx
|   |-- main.jsx     # Entrance file
│   ├── App.jsx      # Main application component
│   └── style.css    # Styling file
├── .github          # GitHub Actions configuration files
│   └── workflows    # Automated workflows
├── package.json      
│── vite.config.js       # Vite config
└── eslint.config.js     # Eslint config
└── tailwind.config.js   # Tailwind config  
└── README.md   
```

## Install and Run

1. Clone
```
git clone https://github.com/dengshasha/react-menu-demo.git
```
2. Install

```
npm install
```
3. Run

```
npm run dev
```
4. Build
```
npm run build
```
5. Deploy
Push to the master branch will automatically build and deploy the project to GitHub Pages. The deployed URL will be: https://dengshasha.github.io/react-menu-demo

## CI/CD Configuration 

This project uses GitHub Actions for automated building and deployment to GitHub Pages.

Every time you push to the master branch, GitHub Actions will perform the following steps:
- Install project dependencies.
- Run ESLint to check code quality.
- Build the production version.
- Push the built content to the gh-pages branch, triggering GitHub Pages deployment.