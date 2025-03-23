import React from "react";

const Settings = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center">
        <div className="flex flex-col h-full border border-gray-300 min-w-80 max-w-80 bg-[#F7F8F9]">
          <header className="  shadow-[0px_3px_6px_rgba(0,0,0,0.25)] bg-[#FFFFFF] p-4 flex items-center h-15">
            Account Setting
          </header>
          <div className="flex  items-center gap-4 pt-8 p-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&h=80&q=80"
              alt=""
            />
            <div className="font-medium ">
              <div className="font-bold text-[#1D2226]">Marry Doe</div>
              <div className="font-light text-xs text-[#1D2226] ">
                Marry@gmail.com
              </div>
            </div>
          </div>
          <div className="p-4 pt-4 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio alias tenetur veritatis error, adipisci distinctio?</div>
          <div className="w-full h-1 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-repeat-x bg-[length:5px_1px]"></div>
          <div className="mt-auto mb-10 w-full h-1 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-repeat-x bg-[length:5px_1px]"></div>

          </div>
      </div>
    </>
  );
};

export default Settings;
