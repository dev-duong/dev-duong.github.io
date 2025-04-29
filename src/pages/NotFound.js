// NotFound.jsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white font-mono p-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <a
        href="/home"
        className="text-blue-400 underline hover:text-blue-600 transition"
      >
        Go back Home
      </a>
    </div>
  );
}
