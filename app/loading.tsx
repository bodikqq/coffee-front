export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">П</span>
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-warm-gray">Доктор Петренко</h1>
            <p className="text-coffee">Приватна клініка</p>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-sage rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-coffee rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-sage rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-warm-gray font-medium mb-2">Завантаження...</p>
        <p className="text-gray-500 text-sm">Підготовка медичної інформації</p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mt-6">
          <div className="w-full bg-beige rounded-full h-2">
            <div className="bg-sage h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}