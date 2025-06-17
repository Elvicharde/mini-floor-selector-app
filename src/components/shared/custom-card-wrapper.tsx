import { useHoverTouch } from "@/hooks/use-hover-touch";

const CustomCardWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isActive, handlers } = useHoverTouch();
  return (
    <div
      className={`card  ${
        isActive ? "group/wrapper transition-all duration-300 scale-[1.03]" : ""
      }`}
      {...handlers}
    >
      {children}
    </div>
  );
};

export default CustomCardWrapper;
