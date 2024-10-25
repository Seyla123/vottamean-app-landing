import React, { useState, createContext, useContext, forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Typography } from "../common/Typography";

const TabsContext = createContext(null);
const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider");
  }
  return context;
};

export function TabsProvider({ children, defaultValue, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, isDesktop }}>
      <div className={cn("w-full h-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export const TabList = forwardRef(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cn("rounded-sm h-fit", className)}>
      {children}
    </div>
  );
});
TabList.displayName = "TabList";

export const TabItem = forwardRef(({ children, value, index }, ref) => {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <motion.div
      ref={ref}
      className={`rounded-lg overflow-hidden mb-2 ${
        activeTab === value
          ? "active border border-dashed bg-primary"
          : "border border-dashed"
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </motion.div>
  );
});
TabItem.displayName = "TabItem";

export const TabHeader = forwardRef(({ children, value }, ref) => {
  const { activeTab } = useTabs();
  return (
    <Typography
      ref={ref}
      variant="h4"
      className={`p-4 lg:p-6 cursor-pointer transition-all flex justify-between items-center ${
        activeTab === value ? "active text-background" : "bg-background"
      }`}
    >
      {children}
    </Typography>
  );
});
TabHeader.displayName = "TabHeader";

export const TabDes = forwardRef(({ children, value }, ref) => {
  const { activeTab } = useTabs();
  return (
    <AnimatePresence mode="sync">
      {activeTab === value && (
        <motion.div
          ref={ref}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.14,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});
TabDes.displayName = "TabDes";

export const TabImageContainer = forwardRef(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cn("h-full", className)}>
      <AnimatePresence mode="popLayout">{children}</AnimatePresence>
    </div>
  );
});
TabImageContainer.displayName = "TabImageContainer";

export const TabImage = forwardRef(({ children, value, index }, ref) => {
  const { activeTab, isDesktop } = useTabs();

  if (activeTab !== value || !isDesktop) return null;

  return (
    <motion.div ref={ref} className="h-full">
      <motion.div
        className="h-full"
        initial={{ opacity: 0, overflow: "hidden" }}
        animate={{ opacity: 1, overflow: "hidden" }}
        exit={{ opacity: 0, overflow: "hidden" }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
});
TabImage.displayName = "TabImage";
