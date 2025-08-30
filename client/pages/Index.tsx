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
          className="w-full h-full fill-white opacity-85" 
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
            <svg 
              width="80" 
              height="46" 
              viewBox="0 0 80 46" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path d="M54.9735 24.665C50.3237 24.2227 48.3993 30.6297 46.7736 33.9168C46.0325 35.4109 45.2436 36.8095 44.2754 38.1721C43.7017 38.9611 43.092 39.75 42.4824 40.4911L49.2838 44.5671C50.515 45.3082 52.0928 45.356 53.3599 44.6149L63.6635 38.8654C63.6635 33.6419 60.4242 25.1431 55.0213 24.6172L54.9735 24.665Z" fill="#6AA7BA"/>
              <path d="M46.3439 10.0596C47.3957 8.03949 47.4794 5.62494 46.822 3.4375L34.1038 10.5497C32.8367 11.2549 32.0478 12.5698 32 14.052V14.8409C32.8726 14.7094 33.7571 14.6257 34.6297 14.4942C38.7058 14.0161 44.0967 14.3149 46.3319 10.0596H46.3439Z" fill="#F2B842"/>
              <path d="M44.8856 34.9702C49.0094 27.5592 50.4558 16.9447 39.4947 15.5462C37.5702 15.2832 34.6775 15.3669 32 15.7613V31.8504C32 33.3087 32.7052 34.6594 33.9723 35.4124L41.204 39.7514C42.6981 38.4366 43.9652 36.7751 44.9334 35.018L44.8856 34.9702Z" fill="#4A90A4"/>
              <path d="M55.1531 20.8054C58.488 24.7978 70.8954 33.5236 72.0788 33.9181C72.294 33.4399 72.1625 14.1833 72.1625 14.1833C72.1625 12.737 71.4214 11.3743 70.1902 10.6332C70.1902 10.6332 54.1012 0.939141 53.6589 0.855469C49.7621 6.86794 51.0292 15.8568 55.1531 20.8054Z" fill="#4A90A4"/>
              <path d="M69.9263 4.62109C71.1934 4.62109 71.9823 5.49368 71.9823 6.64119C71.9823 7.7887 71.1934 8.66128 69.9622 8.66128C68.731 8.66128 67.9062 7.7887 67.9062 6.64119C67.9062 5.49368 68.6952 4.62109 69.9263 4.62109ZM69.9263 8.26683C70.9782 8.26683 71.552 7.56159 71.552 6.64119C71.552 5.72079 70.9424 5.01555 69.9263 5.01555C68.9103 5.01555 68.3485 5.72079 68.3485 6.64119C68.3485 7.56159 68.9581 8.26683 69.9742 8.26683H69.9263ZM69.7112 6.8683V7.70502H69.3167V5.55344H69.9742C70.4523 5.55344 70.7153 5.81642 70.7153 6.21087C70.7153 6.60533 70.5838 6.689 70.4045 6.78463L70.7989 7.75284H70.3567L70.0459 6.91611H69.7351L69.6873 6.8683H69.7112ZM69.7112 5.9479V6.52166H70.022C70.2013 6.52166 70.2849 6.39017 70.2849 6.21087C70.2849 6.03157 70.2013 5.9479 70.022 5.9479H69.7112Z" fill="#4A90A4"/>
            </svg>
            <span className="ml-4 text-2xl font-bold text-nuri-dark-blue">Nuri</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-20 flex items-center min-h-[calc(100vh-5rem)]">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-black">Rewire Fear.<br />Restore </span>
                <span className="text-nuri-gold">Control.</span>
              </h1>
              
              <p className="text-lg sm:text-xl leading-relaxed text-black max-w-lg">
                The first brain-computer interface for trauma resolution. Built for patients who've tried everything, and deserve something that works.
              </p>
            </div>

            {/* Hero Image Area */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-96 h-96">
                {/* Organic shapes with image content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 relative">
                    {/* Abstract organic background shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full transform -rotate-12 opacity-80"></div>
                    <div className="absolute top-8 right-8 w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl transform rotate-12 opacity-70"></div>
                    <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl transform -rotate-6 opacity-60"></div>

                    {/* Placeholder for hero image - can be replaced with actual image */}
                    <div className="absolute inset-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl flex items-center justify-center text-gray-400 text-sm font-medium">
                      Hero Visual
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
