## Chess Game

This is a web-based chess game built using HTML, CSS, JavaScript, and Socket.IO with Node.js. Users can play chess against each other in real-time through a web browser.

### Features

- Real-time multiplayer chess game
- User authentication and account management
- Lobby system to find and join games
- Chat functionality to communicate with opponents
- Move history and game replay

### Technologies Used

**Front-end:**

- HTML
- CSS
- JavaScript
- [Chess.js](https://github.com/jhlywa/chess.js) library for chess game logic
- [Chessboard.js](https://github.com/oakmac/chessboardjs) library for rendering the chessboard

**Back-end:**

- Node.js
- Express.js for web server
- Socket.IO for real-time communication
- MongoDB for user accounts and game data

### Getting Started

#### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or remote)

#### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chess-game.git
   ```

2. Install the dependencies:

   ```bash
   cd chess-game
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file in the project root directory.
   - Add the following variables:

     ```
     MONGODB_URI=your-mongodb-connection-string
     PORT=3000
     ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to access the chess game.

### Usage

1. Create an account or log in to the application.
2. Join or create a new game lobby.
3. Wait for an opponent to join your game.
4. Make moves on the chessboard and chat with your opponent.
5. The game will automatically end when a player wins or the game is drawn.

### Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository.

### License

This project is licensed under the [MIT License](LICENSE).
