export default function DebugPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Debug Page (Server-Side Rendered)</h1>
      <p className="mb-4">This is a server-side rendered page to help with debugging.</p>
      <div className="p-4 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Environment Info:</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Node.js version: {process.version}</li>
          <li>Server time: {new Date().toISOString()}</li>
          <li>Next.js is running</li>
        </ul>
      </div>
    </div>
  );
}
