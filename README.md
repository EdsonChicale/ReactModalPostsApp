# React Modal Posts App

This project is a simple React application that demonstrates how to build a posts feed with modal dialogs for post details. It is designed as a learning project to showcase modern React features, routing, and modular CSS.

## Features

- **Post Feed:** View a list of posts fetched from a backend API.
- **Post Details Modal:** Click on a post to view its details in a modal dialog, implemented using the native `<dialog>` element and React Router for navigation.
- **Create Post:** Add new posts via a form.
- **Routing:** Uses React Router for navigation between the feed, post creation, and modal dialogs.
- **CSS Modules:** Scoped, modular CSS for component styling.
- **API Integration:** Fetches and submits post data to a backend API (`http://localhost:8080/posts`).
- **Vite Powered:** Fast development and build tooling with Vite.

## Technologies Used

- React
- React Router
- CSS Modules
- Vite

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Start the development server:**
   ```
   npm run dev
   ```

3. **Backend API:**
   - Make sure you have a backend running at `http://localhost:8080/posts` for fetching and submitting posts.

## Project Structure

- Modal.jsx: Modal dialog component using React Router for navigation and CSS modules for styling.
- components: Other UI components (PostList, PostForm, etc.).
- `src/pages/`: Page components for routing.
- `src/App.jsx`: Main application component with routing setup.

## Usage

- View the list of posts on the home page.
- Click a post to open its details in a modal.
- Click outside the modal or the backdrop to close it and return to the feed.
- Use the "Create Post" button to add a new post.

## License

This project is for educational purposes. Feel free to use and modify it for your own learning!

---

**Author:** Edson Chicale  
**Repository:** https://github.com/EdsonChicale/ReactModalPostsApp.git
