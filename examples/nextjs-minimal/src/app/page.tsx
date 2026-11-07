export default function Home() {
  const branchMarker = process.env.BRANCH_MARKER || 'local-dev'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">
          Next.js Preview Example
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Minimal app for Beforeprod preview deployments
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-500 mb-2">Branch marker:</p>
          <code className="text-lg font-mono bg-white dark:bg-gray-900 px-4 py-2 rounded">
            {branchMarker}
          </code>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-2">Next.js 16</h2>
            <p className="text-sm text-gray-600">App Router with TypeScript</p>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-2">React 19</h2>
            <p className="text-sm text-gray-600">Latest React features</p>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-2">Port 4522</h2>
            <p className="text-sm text-gray-600">Beforeprod expected port</p>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-2">Standalone Build</h2>
            <p className="text-sm text-gray-600">Production-ready output</p>
          </div>
        </div>
      </div>
    </main>
  )
}
