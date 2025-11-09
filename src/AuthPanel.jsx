import { AnimatePresence, motion } from "motion/react";

const AuthPanel = ({ showSignIn }) => {
  return (
    <motion.div
      className="absolute z-1 right-0 h-screen w-[calc(100%-18rem)] flex justify-center items-center"
      animate={{ left: showSignIn ? 0 : "18rem" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="w-80 text-center"
          key={showSignIn ? "signIn" : "signUp"}
          animate={{ display: "block" }}
          exit={{ display: "none" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {showSignIn ? (
            <form className="flex flex-col gap-y-5 text-center p-4">
              <h2 className="font-bold text-3xl">Create Your Account</h2>
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-neutral-400 text-md"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full p-2 text-center outline-none border-b border-neutral-400"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-neutral-400 text-md"
                >
                  EMAIL
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full p-2 text-center outline-none border-b border-neutral-400"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-neutral-400 text-md "
                >
                  PASSOWRD
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full p-2 text-center outline-none border-b border-neutral-400"
                />
              </div>
              <button className="bg-amber-500 p-2 rounded-full text-white">
                {showSignIn ? "SIGN IN" : "SIGN UP"}
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-y-5 text-center p-4">
              <h2 className="font-bold text-3xl">Welcome</h2>
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-neutral-400 text-md"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full p-2 text-center outline-none border-b border-neutral-400"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-neutral-400 text-md "
                >
                  PASSOWRD
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full p-2 text-center outline-none border-b border-neutral-400"
                />
              </div>
              <p className="text-neutral-400">forgot password?</p>
              <button className="bg-amber-500 p-2 rounded-full text-white cursor-pointer">
                {showSignIn ? "SIGN IN" : "SIGN UP"}
              </button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default AuthPanel;
