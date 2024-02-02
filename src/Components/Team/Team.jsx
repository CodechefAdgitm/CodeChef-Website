import React from 'react';

function Team() {
  return (
    <div className='bg-cover bg-black item-center min-h-screen' style={{
      backgroundImage: "url(src/assets/teamBackground.png)",
      backgroundPositionY: "60%",
      backgroundColor: "black",
      backgroundAttachment: "fixed",
    }}>
      <div className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-8 lg:mb-12 w-fit p-2 px-5 rounded-full sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24" style={{ backgroundColor: "rgba(149, 0, 240, 0.6)" }}>
          <h2 className="text-2xl font-bold poppins md:text-4xl md:leading-tight dark:text-white" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", WebkitTextStroke: '1px black', textStroke: '1px black', color: 'white', fontSize: "2rem" }}>
            CORE&nbsp;&nbsp;&nbsp;TEAM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {[1, 2, 3, 4, 5].map((index) => (
            <div className="text-center" key={index}>
              <img className="rounded-xl p-1 bg-white w-90 h-56 mx-auto mb-2 md:mb-4" src="src/assets/teamphoto.png" alt={`Team Member ${index}`} />
              <div className="mt-1 sm:mt-2">
                <h3 className="text-sm md:text-sm text-gray-200 font-semibold sm:text-base lg:text-4xl ">
                  Name
                </h3>
                <p className="text-2xs md:text-xs text-white font-semibold md:text-sm lg:text-lg xl:text-xl">
                  Position
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 mx-auto text-center" style={{ color: "#FFFF", fontFamily: "Prosto One", fontSize: "14px", fontWeight: 500, lineHeight: "180%", letterSpacing: "8px" }}>
          <span style={{ position: 'relative', display: 'inline-block',top:"30px" }}>
            <span style={{ position: 'absolute', top: '50%', left: '-45px', width: '32px', height: '1px', backgroundColor: 'white', WebkitTextStroke: '0.3px white', textStroke: '0px white' }}></span>
            CODECHEF ADGITM
            <span style={{ position: 'absolute', top: '50%', right: '-40px', width: '32px', height: '1px', backgroundColor: 'white' }}></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Team;
