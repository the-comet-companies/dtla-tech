"use client"

import React, {
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  /** Time (ms) between each item reveal — shared across instances to sync per-item timing. */
  delay?: number
  /** Total loop length (ms) — instances sharing this value restart together regardless of item count. */
  cycleDuration?: number
}

export const AnimatedList = React.memo(
  ({
    children,
    className,
    delay = 1000,
    cycleDuration,
    ...props
  }: AnimatedListProps) => {
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    const totalCycle =
      cycleDuration ?? childrenArray.length * delay + 4000

    const [tick, setTick] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setTick((t) => t + 1)
      }, 100)
      return () => clearInterval(interval)
    }, [])

    // Time-based index — synchronized across instances by wall clock
    const elapsed = (Date.now() % totalCycle)
    const index = Math.min(
      childrenArray.length - 1,
      Math.floor(elapsed / delay)
    )
    void tick // re-render trigger

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        {childrenArray.map((item, i) => (
          <motion.div
            key={(item as React.ReactElement).key ?? i}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              i <= index
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{ type: "spring", stiffness: 350, damping: 40 }}
            style={{ originY: 0 }}
            className="w-full"
          >
            {item}
          </motion.div>
        ))}
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
