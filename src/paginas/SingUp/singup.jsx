import React from "react";

export default function SingUp() {
  return (
    <div className="grid md:grid-cols-2 m-5">
      <div className="border-4 bg-sky-500 rounded-3xl border-gray-500 mx-auto flex flex-col align-start p-5">
        <a href="/">
          <img className="w-40 mx-auto" src="singin.png" alt="home" />
        </a>

        <div className="flex flex-row items-centser justify-between ">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold tracking-tight leading-9 text-black">
              Crear una
            </h2>
            <h2 className="text-4xl font-bold tracking-tight leading-9 text-black">
              Cuenta
            </h2>
          </div>
        </div>

        <form className="font-normal mx-auto">
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-1">
              Correo
            </label>
            <input
              className="w-full px-3 text-[grey] border-[grey] py-2 border-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              key="email"
              type="email"
              name="email"
              placeholder="ejemplo@gmail.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Nombres
              </label>
              <input
                className="w-full px-3 py-2 text-[grey] border-[grey] border-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                key="name"
                type="name"
                name="name"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Apellidos
              </label>
              <input
                className="w-full px-3 py-2 text-[grey] border-[grey] border-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                key="last_name"
                type="last_name"
                name="last_name"
                placeholder="Gonzales"
              />
            </div>
          </div>
          <label className="block text-grey font-normal mt-3 mb-1 ml-1">
            RUT
          </label>
          <input
            className="w-full px-3 text-[grey] border-[grey] py-2 border-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            key="DNI"
            type="DNI"
            name="DNI"
            placeholder="15234265-1"
          />
          <div>
            <label className="block text-grey font-normal mt-3 mb-1 ml-1">
              Contraseña
            </label>
            <div className="flex relative mb-4">
              <input
                className="w-full px-3 py-2 rounded-md text-[grey] border-[grey] border-2 focus:outline-none focus:ring focus:border-blue-500 font-normal"
                key="password"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <label className="block text-grey font-normal mt-3 mb-1 ml-1">
              Repetir-Contraseña
            </label>
            <div className="flex relative mb-4">
              <input
                className="w-full px-3 py-2 rounded-md text-[grey] border-[grey] border-2 focus:outline-none focus:ring focus:border-blue-500 font-normal"
                key="Reapet Password"
                type="password"
                name="Reapet Password"
                placeholder="Reapet Password"
              />
            </div>
          </div>
          <div className="mt-2 mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Mi Foto
            </label>
            <input
              className="w-full px-3 py-2 text-[#e94040] border-[#e24646] border-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="file"
              name="file"
            />
          </div>
          <button
            className={`w-full py-3 px-4 rounded-md font-medium bg-cyan-400 hover:bg-cyan-800 text-black`}
            type="submit"
          >
            Crear cuenta
          </button>
        </form>
      </div>

      {/* <div className="hidden md:inline">
        <img
          className="w-full h-[125%] object-cover"
          src=""
          alt="SignupImage"
          width={1036}
          height={820}
        />
      </div> */}
    </div>
  );
}
