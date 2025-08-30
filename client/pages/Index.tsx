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
          <source
            src="https://www.dropbox.com/scl/fi/dxpi8uu0cusim3z4nqx1f/5616686-sd_960_540_25fps.mp4?rlkey=feg6qa30aozpqn6igetuux5hk&dl=1"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Desktop Background Shapes */}
      <div className="absolute inset-0 z-10 hidden lg:block">
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

      {/* Tablet Background Shapes */}
      <div className="absolute inset-0 z-10 hidden md:block lg:hidden">
        <svg
          className="w-full h-full fill-white opacity-85"
          viewBox="0 0 768 480"
          preserveAspectRatio="xMidYMid slice"
        >
          <g opacity="0.85">
            <path
              d="M526.87 331.13C557.29 278.11 568.15 202.53 486.88 192.49C472.68 190.74 451.21 191.21 431.33 193.96L431.2 308.79C431.04 319.18 436.62 328.85 445.83 334.17L499.21 365C510.14 355.7 519.71 343.56 526.87 331.14V331.13ZM601.49 257.53C567.15 254.37 552.91 300.19 540.68 323.57C535.2 334.09 529.2 344.29 522.23 353.93C518.08 359.69 513.54 365.17 508.8 370.52L559.13 399.59C568.34 404.91 579.82 405.1 589.23 400.06L665.44 359.12C665.15 321.88 641.34 261.19 601.49 257.53ZM537.51 153.12C545.29 138.75 546.07 121.48 541.17 105.92L447.02 156.46C437.65 161.53 431.75 171.01 431.58 181.4L431.48 187C438.03 186.09 444.58 185.31 451.07 184.59C481.1 181.18 521.18 183.21 537.5 153.14V153.11L537.51 153.12ZM602.76 229.8C627.28 258.19 719.09 320.62 727.88 323.44C729.37 320.06 728.56 182.67 728.56 182.67C728.72 172.28 723.14 162.61 713.93 157.29C713.93 157.29 595.04 88 591.8 87.34C563.07 130.12 572.28 194.47 602.76 229.8ZM767.84 479.74H0V0H767.84V479.74Z"
              fill="white"
            />
          </g>
        </svg>
      </div>

      {/* Mobile Background Shapes */}
      <div className="absolute inset-0 z-10 block md:hidden">
        <svg
          className="w-full h-full fill-white opacity-85"
          viewBox="0 0 376 798"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            opacity="0.85"
            d="M134.73 382.87C165.15 329.85 176.01 254.27 94.74 244.23C80.54 242.48 59.07 242.95 39.19 245.7L39.06 360.53C38.9 370.92 44.48 380.59 53.69 385.91L107.07 416.74C118 407.44 127.57 395.3 134.73 382.88V382.87ZM209.35 309.27C175.01 306.11 160.77 351.93 148.54 375.31C143.06 385.83 137.06 396.03 130.09 405.67C125.94 411.43 121.4 416.91 116.66 422.26L166.99 451.33C176.2 456.65 187.68 456.84 197.09 451.8L273.3 410.86C273.01 373.62 249.2 312.93 209.35 309.27ZM145.37 204.86C153.15 190.49 153.93 173.22 149.03 157.66L54.88 208.2C45.51 213.27 39.61 222.75 39.44 233.14L39.34 238.74C45.89 237.83 52.44 237.05 58.93 236.33C88.96 232.92 129.04 234.95 145.36 204.88V204.85L145.37 204.86ZM210.62 281.54C235.14 309.93 326.95 372.36 335.74 375.18C337.23 371.8 336.42 234.41 336.42 234.41C336.58 224.02 331 214.35 321.79 209.03C321.79 209.03 202.9 139.74 199.66 139.08C170.93 181.86 180.14 246.21 210.62 281.54ZM375.69 797.52H0V0H375.69V797.52Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-30 w-full">
        <div className="flex justify-center items-center h-20 border-b border-gray-200 bg-white">
          <div className="flex max-w-7xl w-full px-4 md:px-8 items-center">
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="text-black">
                  Rewire Fear.
                  <br />
                  Restore{" "}
                </span>
                <span style={{ color: "#F4B942" }}>Control.</span>
              </h1>

              <p className="text-lg sm:text-xl leading-relaxed text-black max-w-lg">
                The first brain-computer interface for trauma resolution. Built
                for patients who've tried everything, and deserve something that
                works.
              </p>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              {/* Clean space for future hero image */}
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            <div className="space-y-6 text-left max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                <span className="text-black">
                  Rewire Fear.
                  <br />
                  Restore{" "}
                </span>
                <span style={{ color: "#F4B942" }}>Control.</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-black">
                The first brain-computer interface for trauma resolution. Built
                for patients who've tried everything, and deserve something that
                works.
              </p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="flex flex-col justify-end min-h-[calc(100vh-8rem)] pb-8">
              <div className="space-y-6 text-left">
                <h1 className="text-3xl xs:text-4xl font-extrabold leading-tight tracking-tight">
                  <span className="text-black">
                    Rewire Fear.
                    <br />
                    Restore{" "}
                  </span>
                  <span style={{ color: "#F4B942" }}>Control.</span>
                </h1>

                <p className="text-lg leading-relaxed text-black">
                  The first brain-computer interface for trauma resolution.
                  Built for patients who've tried everything, and deserve
                  something that works.
                </p>

                <button className="w-full mt-8 text-white font-semibold py-3 px-6 rounded-lg border-2 border-white/10 shadow-lg" style={{ backgroundColor: "#397282" }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
