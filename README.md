# Memory Card Game

A responsive, interactive memory card game built with React and CSS Modules. Test your memory skills by clicking on unique images without repeating. Play, compete with your best score, and enjoy a smooth and visually appealing experience!

## Features

- **Dynamic Image Fetching**: Uses the Unsplash API to dynamically fetch 12 unique images for every game.
- **Interactive Gameplay**: Tracks score and detects win/loss conditions based on user interaction.
- **Responsive Design**: Optimized layout for various screen sizes.
- **Modern Development Stack**: Built with React, Vite, and CSS Modules for fast and modular development.

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/memory-card-game.git
   cd memory-card-game
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up Unsplash API**:

   - Create a `.env` file in the root directory.
   - Add your Unsplash API key:
     ```env
     VITE_UNSPLASH_API_KEY=your-unsplash-api-key
     ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## How to Play

1. Start the game by clicking on any card.
2. Try to click all 12 images without repeating any.
3. Each unique click increases your score.
4. The game ends if you click an already selected image.

---

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build.

---

## Project Structure

```plaintext
src/
├── components/
│   └── Card.jsx        # Reusable Card component
├── styles/
│   ├── app.module.css  # Styles for App component
│   ├── card.module.css # Styles for Card component
│   └── index.css       # Global styles
├── App.jsx             # Main application logic
├── main.jsx            # Entry point for React
└── index.html          # HTML template
```

---

## Dependencies

- **React**: Component-based UI framework.
- **Vite**: Fast development build tool.
- **CSS Modules**: Scoped and maintainable styling.

---

## Environment Variables

| Variable Name           | Description             |
| ----------------------- | ----------------------- |
| `VITE_UNSPLASH_API_KEY` | Unsplash API access key |

---

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- **Unsplash API**: For providing high-quality images.
- **The Odin Project**: An open-source community for learning full-stack development.
- Inspired by classic memory card games.
