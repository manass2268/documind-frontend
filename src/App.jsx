import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import LandingPage from "./components/LandingPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <LandingPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}