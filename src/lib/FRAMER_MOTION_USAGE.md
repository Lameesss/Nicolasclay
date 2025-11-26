# Framer Motion Setup Guide

Framer Motion is now fully configured in your project with reusable utilities and animation presets.

## 📦 Installation Status

✅ Framer Motion v11.18.0 is installed and configured
✅ Next.js config optimized for Framer Motion
✅ Reusable animation utilities created

## 🚀 Quick Start

### Basic Usage

```tsx
"use client";
import { motion } from "framer-motion";

export function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      Hello World
    </motion.div>
  );
}
```

### Using Pre-built Components

```tsx
"use client";
import { MotionDiv, MotionH, MotionP } from "@/lib";

export function MyComponent() {
  return (
    <MotionDiv delay={0.2}>
      <MotionH as="h1" delay={0.3}>Title</MotionH>
      <MotionP delay={0.4}>Description</MotionP>
    </MotionDiv>
  );
}
```

### Using Animation Variants

```tsx
"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib";

export function MyComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={staggerItem}>
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

## 📚 Available Utilities

### Animation Variants (`src/lib/animations.ts`)

- **Fade**: `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- **Scale**: `scaleIn`, `scaleUp`
- **Slide**: `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`
- **Stagger**: `staggerContainer`, `staggerItem`
- **Hover**: `hoverScale`, `hoverLift`
- **Page**: `pageTransition`

### Motion Components (`src/lib/motion.ts`)

- `MotionDiv` - Animated div with fade-in-up
- `MotionSection` - Animated section
- `MotionH` - Animated heading (h1-h6)
- `MotionP` - Animated paragraph
- `MotionButton` - Animated button with hover
- `StaggerContainer` - Container for staggered animations
- `StaggerItem` - Item for stagger container

### Transitions

- `defaultTransition` - Standard transition
- `smoothTransition` - Smooth transition
- `springTransition` - Spring animation
- `bounceTransition` - Bounce animation
- `withDelay(delay)` - Add delay to transition

## 💡 Examples

### Staggered List Animation

```tsx
"use client";
import { StaggerContainer, StaggerItem } from "@/lib";

export function FeatureList({ features }) {
  return (
    <StaggerContainer staggerDelay={0.1}>
      {features.map((feature) => (
        <StaggerItem key={feature.id}>
          {feature.title}
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
```

### Hover Effects

```tsx
"use client";
import { motion } from "framer-motion";
import { hoverScale } from "@/lib";

export function Card() {
  return (
    <motion.div
      variants={hoverScale}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      Card Content
    </motion.div>
  );
}
```

### Custom Variants

```tsx
"use client";
import { motion } from "framer-motion";
import { createVariants } from "@/lib";

const customVariants = createVariants(
  { opacity: 0, rotate: -180 },
  { opacity: 1, rotate: 0 }
);

export function SpinningCard() {
  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      animate="visible"
    >
      Content
    </motion.div>
  );
}
```

## ⚙️ Configuration

The Next.js config has been updated to transpile Framer Motion for better performance:

```ts
// next.config.ts
transpilePackages: ["framer-motion"]
```

## 🎨 Best Practices

1. **Always use "use client"** for components with Framer Motion
2. **Use variants** for reusable animations
3. **Leverage pre-built components** for common patterns
4. **Add delays** for sequential animations
5. **Use stagger** for list animations

## 📖 Documentation

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

