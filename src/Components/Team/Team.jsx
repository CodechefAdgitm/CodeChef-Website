import React from 'react';

function Team() {
  return (
    <div className='bg-cover bg-black item-center  ' style={{
      
      backgroundImage: "url(src/assets/teamBackground.png)",
      backgroundPositionY: "50%",
      backgroundColor: "black",
      backgroundAttachment: "fixed",
    }}>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 w-fit p-2 px-5 rounded-full" style={{ backgroundColor: "rgba(149, 0, 240, 0.6)" }}>
          <h2 className="text-2xl font-bold poppins md:text-4xl md:leading-tight dark:text-white" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", WebkitTextStroke: '1px black', textStroke: '1px black', color: 'white', fontSize: "40px" }}>
            CORE&nbsp;&nbsp;&nbsp;TEAM
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
          {[1, 2, 3, 4, 5].map((index) => (
            <div className="text-center" key={index}>
              <img className="rounded-xl p-1 bg-white w-150 h-212 mx-auto" src="src/assets/teamphoto.png" alt={`Team Member ${index}`} />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm text-gray-200 font-semibold sm:text-base lg:text-4xl">
                  Name
                </h3>
                <p className="text-xs text-white font-semibold sm:text-sm lg:text-lg">
                  Position
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 mx-auto text-center" style={{  color: "#FFFF", fontFamily: "Prosto One", fontSize: "16px", fontWeight: 500, lineHeight: "210%", letterSpacing: "10px" }}>
          <span style={{ position: 'relative', display: 'inline-block',top:"37px" }}>
            <span style={{ position: 'absolute', top: '50%', left: '-70px', width: 52.01, height: '1px', backgroundColor: 'white', WebkitTextStroke: '0.3px white', textStroke: '0px white' }}></span>
            CODECHEF ADGITM
            <span style={{ position: 'absolute', top: '50%', right: '-65px', width: 52.01, height: '1px', backgroundColor: 'white' }}></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Team;



