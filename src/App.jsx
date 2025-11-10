import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import AuthPanel from "./AuthPanel";

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <div>
      <motion.div
        className="absolute z-10 h-screen w-72 bg-neutral-500/80 flex flex-col items-center px-5  text-center text-white overflow-hidden"
        initial={false}
        animate={{ right: showSignIn ? 0 : "calc(100% - 18rem)" }}
        transition={{
          ease: "easeInOut",
          duration: 1.2,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.h2
            className="mt-16 font-bold text-xl relative overflow-hidden"
            key={showSignIn ? "signIn" : "signUp"}
            initial={{
              translateX: showSignIn ? "98%" : "-98%",
            }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{
              translateX: showSignIn ? "100%" : "-100%",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {showSignIn
              ? "If you already have an account. Just sign in."
              : "Don't have an account ? Please Sign up! "}
          </motion.h2>
        </AnimatePresence>
        <button
          className="border-2 border-gray-300 mt-62 px-8 py-1 text-md rounded-full cursor-pointer overflow-hidden"
          onClick={() => setShowSignIn(!showSignIn)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.h2
              key={showSignIn ? "signIn" : "signUp"}
              initial={{ translateY: showSignIn ? "100%" : "-100%" }}
              animate={{ translateY: 0 }}
              exit={{ translateY: showSignIn ? "100%" : "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {showSignIn ? "SIGN IN" : "SIGN UP"}
            </motion.h2>
          </AnimatePresence>
        </button>
      </motion.div>
      <AuthPanel showSignIn={showSignIn} />
    </div>
  );
};

export default App;
