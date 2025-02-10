import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import type React from "react" // Added import for React

export interface CyberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const CyberInput = forwardRef<HTMLInputElement, CyberInputProps>(({ className, icon, type, ...props }, ref) => {
  return (
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">{icon}</div>}
      <input
        type={type}
        className={cn(
          "h-12 w-full rounded-md border border-primary/50 bg-background px-8 text-foreground transition-all",
          "placeholder:text-foreground/50",
          "focus:border-primary focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          icon && "pl-10",
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})
CyberInput.displayName = "CyberInput"

export { CyberInput }

