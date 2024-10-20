# Book Wishlist Web Application

## Project Overview

The **Book Wishlist Web Application** is a dynamic and user-friendly web platform that allows users to explore, view details, and manage a wishlist of books. Built using **React.js** on the frontend and powered by **localStorage** for data persistence, this app allows users to search for books, view their details, and add or remove them from their wishlist. The application is designed with a clean and responsive UI that works seamlessly across various devices.

This project is an excellent demonstration of full-stack web development skills, including API consumption, state management, UI design, and storage management.

## Key Features

- **Book Search**: Easily search for books from a vast collection using an external API (Gutenberg Books).
- **Book Details**: View comprehensive details of each book, including title, author(s), genres, bookshelves, and more.
- **Wishlist Management**: Add or remove books to/from a personal wishlist stored in the browser's `localStorage`.
- **Responsive Design**: The UI adapts seamlessly to different screen sizes, ensuring a smooth user experience on both desktop and mobile devices.
- **Interactive UI**: Includes animated buttons and feedback mechanisms (e.g., showing a "❤️ Added to Wishlist" button after a book is added).

## Tech Stack

- **Frontend**: React.js, HTML5, CSS3, JavaScript ES6+
- **Backend**: None (External API used for data fetch)
- **State Management**: React state and hooks
- **Data Storage**: Local Storage for wishlist management
- **UI Framework**: Responsive design using custom CSS
- **Deployment**: GitHub Pages / Netlify

## Demo

[Live Demo](https://gutenberg-books-fronted.vercel.app/)

## Screenshots

![Book Wishlist Screenshot](https://i.ibb.co.com/g7xXVKc/screencapture-gutenberg-books-fronted-vercel-app-2024-10-20-21-32-51.png)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/md-mobarak/gutenberg-books-fronted
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## How It Works

### 1. **Fetching Book Data**
The app utilizes the [Gutenberg API](https://www.gutenberg.org/) to fetch book details. Users can search for any book, and the app will display relevant books with detailed information like authors, genres, and cover images.

### 2. **Adding Books to Wishlist**
When a user clicks on the "Add to Wishlist" button, the selected book's information is saved in the browser's `localStorage`. This allows users to maintain a wishlist across sessions.

### 3. **Responsive Layout**
The app is fully responsive, ensuring it looks great on all devices.

### 4. **User-Friendly Interface**
The interface features interactive elements such as animated buttons that provide feedback when books are added to or removed from the wishlist.

## Technical Challenges & Solutions

- **Managing Local Storage**: Using `localStorage` for storing the wishlist meant ensuring the data was correctly parsed and updated with each action (add/remove). This was achieved by creating helper functions for easy data manipulation.
  
- **Responsive Design**: Ensuring the app looked good on all devices required implementing responsive CSS using media queries. The app adjusts the book cover size and button layout based on the viewport.

## Future Improvements

- **Backend Integration**: Integrating a backend to allow users to save their wishlist to a database and manage their account for personalized features.
  
- **Authentication**: Adding user authentication and allowing users to store their wishlist and preferences across devices.

- **Pagination & Infinite Scroll**: Implementing pagination or infinite scroll to enhance the browsing experience when dealing with large datasets.

- **Book Reviews & Ratings**: Adding functionality for users to leave reviews and rate books they’ve read.

## How to Contribute

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Contact Information

For inquiries or feedback, feel free to reach out to me:

- **Email**: mdmobarakhossen112@gmail.com
- **GitHub**: [your-github-username](https://github.com/md-mobarak)
- **LinkedIn**: [your-linkedin-profile](https://www.linkedin.com/in/mohammad-mobarak-hossen-75b535240/)
