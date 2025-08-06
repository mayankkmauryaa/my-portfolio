import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


// 🧠 Summary
// cn(...) is a powerful shortcut for:

// "Merge dynamic and conditional Tailwind classes cleanly and conflict-free."

// It's used in nearly all modern React + Tailwind projects to simplify styling logic.