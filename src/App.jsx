import { Button } from "./components/ui/button";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
      <div className="w-full max-w-lg rounded-2xl border border-white bg-white p-10 text-center shadow-xl">
        <div className="mb-4 text-5xl">🚀</div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-700">
          Hello World!
        </h1>

        <p className="mb-8 text-lg leading-7 text-gray-600">
          Welcome to my Frontend Internship Project.
          I am learning React, Tailwind CSS and shadcn UI.
        </p>

        <Button
          size="lg"
          onClick={() => alert("Hello! Welcome to React!")}
        >
          Get Started
        </Button>

        <p className="mt-6 text-sm text-gray-400">
          Built with React + Vite + Tailwind CSS
        </p>
      </div>
    </div>
  );
}

export default App;