export default function Index() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-110 contrast-110"
        >
          <source src="https://www.dropbox.com/scl/fi/dxpi8uu0cusim3z4nqx1f/5616686-sd_960_540_25fps.mp4?rlkey=feg6qa30aozpqn6igetuux5hk&dl=1" type="video/mp4" />
        </video>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-10">
        <svg
          className="w-full h-full fill-white opacity-95"
          viewBox="0 0 1440 1024"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            opacity="0.85" 
            d="M1440 1024H0V0H1440V1024ZM899.789 711.16C969.84 584.79 994.876 404.58 807.695 380.67C774.961 376.49 725.571 377.61 679.724 384.14L679.454 657.91C679.063 682.64 691.916 705.71 713.158 718.41L836.114 791.92C861.299 769.77 883.342 740.83 899.789 711.16ZM1071.59 535.67C992.493 528.16 959.68 637.36 931.561 693.14C918.918 718.22 905.124 742.5 889.038 765.51C879.458 779.21 869.007 792.29 858.136 805.07L974.044 874.37C995.296 887.07 1021.71 887.49 1043.35 875.46L1218.86 777.87C1218.17 689.05 1163.34 544.39 1071.59 535.68V535.67ZM924.274 286.78C942.232 252.5 943.994 211.36 932.722 174.26L715.931 294.81C694.299 306.84 680.725 329.49 680.335 354.22L680.124 367.55C695.22 365.42 710.305 363.55 725.22 361.79C794.411 353.65 886.715 358.49 924.274 286.78ZM1059.63 477.06C1116.09 544.75 1327.52 693.61 1347.8 700.27C1351.21 692.2 1349.36 364.66 1349.36 364.66C1349.75 339.93 1336.89 316.86 1315.65 304.16L1054.78 148.19C1048.01 144.14 1040.7 141.35 1033.2 139.81C967.047 241.77 989.4 392.85 1059.63 477.07V477.06Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-30 w-full">
        <div className="flex justify-center items-center h-20 border-b border-gray-200 bg-white">
          <div className="flex max-w-7xl w-full px-8 items-center">
            {/* Nuri Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2Fc8489f4c1bc64aaaaa97f70cdb0141ca?format=webp&width=800"
              alt="Nuri Logo"
              className="h-12 w-auto flex-shrink-0"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-20 flex items-center min-h-[calc(100vh-5rem)]">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="text-black">Rewire Fear.<br />Restore </span>
                <span className="text-nuri-gold">Control.</span>
              </h1>
              
              <p className="text-lg sm:text-xl leading-relaxed text-black max-w-lg">
                The first brain-computer interface for trauma resolution. Built for patients who've tried everything, and deserve something that works.
              </p>
            </div>

            {/* Hero Image Area */}
            <div className="hidden lg:flex justify-center items-center">
              {/* Clean space for future hero image */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
