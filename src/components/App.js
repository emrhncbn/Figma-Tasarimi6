const App = () => {
    return (
      <div className="bg-black h-screen overflow-hidden relative flex justify-center items-center">
        <div className="absolute top-[-100px] right-[-150px] rounded-tl-[100px] -skew-x-[10deg] -rotate-90 bg-gradient-to-r from-[#b82424] to-[#051d58] w-[600px] h-[550px] -skew-y-[20deg]"></div>
        <div className="absolute bottom-[-100px] left-[-120px] rounded-tl-[100px] rotate-90 bg-gradient-to-r from-[#363cf3] to-[#061b4e] w-[600px] h-[550px] -skew-x-[9deg] -skew-y-[14deg]"></div>
        <div className="flex flex-col bg-slate-700 bg-opacity-20 p-14 w-[500px] h-[600px] shadow-xl z-10">
          <h1 className="text-7xl font-bold text-gray-100 opacity-55">LOGIN</h1>
          <input type="text" placeholder="Username" className="border bg-black text-gray-400 border-black rounded-md p-4 mt-6 pl-4"></input>
          <input type="password" placeholder="Password" className="border bg-black text-gray-400 border-black rounded-md p-4 mt-6 pl-4"></input>
          <button className="flex justify-center items-center text-2xl font-semibold text-gray-400 bg-slate-100 bg-opacity-10 hover:bg-slate-100 hover:bg-opacity-40 hover:text-gray-800 w-[180px] h-[50px] mt-7 rounded-lg">Login</button>
          <div className="flex items-center my-6 pt-5">
            <hr className="flex flex-grow bg-gray-800"></hr>
            <span className="mx-4 text-gray-400 text-xl">OR</span>
            <hr className="flex flex-grow bg-gray-800"></hr>
          </div>
          <div className="flex justify-center pt-5">
            <a href="#" className="pr-5">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
            </a>
            <a href="#" className="pl-5">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="blue" style={{ color: 'blue' }} height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute top-[10%] left-[20%] transform rotate-[-10deg] w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-[#27B902]"></div>
        <div className="absolute bottom-[10%] right-[20%] transform rotate-[10deg] w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-[#27B902]"></div>
      </div>
    );
  };
  
  export default App;
  