export default function Index() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fc8489f4c1bc64aaaaa97f70cdb0141ca?format=webp&width=800"
          alt="Nuri Logo"
          className="h-16 w-auto mx-auto mb-8"
        />
        
        <h1 className="text-5xl font-extrabold mb-6">
          <span className="text-black">Rewire Fear. Restore </span>
          <span className="text-yellow-500">Control.</span>
        </h1>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          The first brain-computer interface for trauma resolution. Built for patients who've tried everything, and deserve something that works.
        </p>
        
        <button className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}
