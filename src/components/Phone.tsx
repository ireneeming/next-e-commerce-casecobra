/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
 className?: string;
 props?: any;
 src: string;
 dark?: boolean;
}
const Phone = ({ className, dark = false, src, ...props }: PhoneProps) => {
 return (
  <div
   className={cn(
    "relative pointer-events-none z-50 overflow-hidden",
    className
   )}
   {...props}
  >
   <img
    src={
     dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"
    }
    className="pointer-events-none z-50 select-none"
    alt="phone image"
   />
   <div className="absolute inset-0 -z-10">
    <img
     src={src}
     alt="overlay phone image"
     className="object-cover min-w-full min-h-full"
    />
   </div>
  </div>
 );
};

export default Phone;
