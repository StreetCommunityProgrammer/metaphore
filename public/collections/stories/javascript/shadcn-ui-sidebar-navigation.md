---
layout: post
title: Shadcn UI - Sidebar Navigation
author: darkterminal
created_at: 2023-05-23T21:08:23Z
language: javascript
---

### The Back Story about your Javascript Metaphor

I was super thrilled when I found out about Shadcn-UI, and guess what? It's NOT just another component library. It's a collection of reusable components that you can simply copy and paste into your app.

OhMyPunk! It's going to be so much fun creating a user interface with tools made by fellow Punks.

> Punk is all about capitalism and freedom for those who believe in big things in the future for themselves.

![Peek 2023-05-24 03-07](https://github.com/StreetCommunityProgrammer/metaphore/assets/32319439/4bfc2805-966e-41d6-b18d-1781beac04cb)

### The javascript Story!

I don't want to beat around the bush too much this time because this is an extraordinary story for me.

To create a sidebar and collapsible menu using Shadcn UI, we need to define a type (yeah, let's use TypeScript, whatever you say!)

## The Sidebar Definition
```typescript
// Filename: types/sidebar.ts
export interface SubmenuItems {
    label: string;
    link: string;
}

export interface NavItems {
    label: string;
    icon: React.ReactElement;
    link: string;
    isParent: boolean;
    subMenu?: SubmenuItems[];
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    menus: NavItems[];
}
```
With the above definition, we will achieve something unforgettable about the experience of creating sidebar navigation along with a collapsible menu using just an `Array` of `Object`.
## Get The Accordion
After writing the sidebar definition, we need to copy & paste the `accordion` component from Shadcn UI using the following command:
```shell
npx shadcn-ui add accordion
```
## The Sidebar Component
OhMyPunk! Let me tell you a little story about this magical thing called the Sidebar! So, imagine this: I stumbled upon a whimsical place called [Shadcn UI - Examples - Music](https://ui.shadcn.com/examples/music), and it was like stepping into a sweet bakery full of delicious treats. Now, with a sprinkle of imagination and a dash of creativity, I took that Sidebar component and transformed it into something truly scrumptious, just like kneading dough for a delightful cake. It was like giving it a life of its own, ready to add a pinch of charm to any project. Oh, the wonders we can create with a little bit of inspiration and a touch of magic!
```typescript
// Filename: components/sidebar.tsx
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProps } from "@/types/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

export function Sidebar({ className, menus }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="py-2">
          <ScrollArea className="h-[300px] px-2">
            <div className="space-y-1 p-2">
              {menus?.map((menu, i) => {
                if (menu.isParent) {
                  return (
                    <Accordion key={`${menu}-${i}`} type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className={buttonVariants({ size: 'sm', variant: 'ghost', align: 'flexBetween', className: 'hover:no-underline' })}>
                          <span className="inline-flex items-center justify-center gap-1">{menu.icon} {menu.label}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          {menu.subMenu?.map((subItem, subIndex) => (
                            <Button
                              key={`${subIndex}-${i}`}
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start font-normal"
                            >
                              &mdash; {subItem.label}
                            </Button>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                } else {
                  return (
                    <Link
                      key={`${menu}-${i}`}
                      className={buttonVariants({ size: 'sm', variant: 'ghost', align: 'flexLeft' })}
                      href={menu.link}
                    >
                      <span className="inline-flex items-center justify-center gap-1">{menu.icon} {menu.label}</span>
                    </Link>
                  );
                }
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
```
## The Little Secret Sauce
But hey, here's a little secret sauce! While we're on the topic, let me spill the beans about a little tweak I made. I couldn't resist giving some love to the `button.tsx` file nestled snugly in the cozy folder of `components/ui`. It was like giving it a fashionable makeover, adding a sprinkle of pizzazz and a dash of flair. Trust me, it's the kind of modification that makes you want to do a little happy dance. So, keep your eyes peeled for that delightful surprise when you delve into the magical world of code!
```typescript
// Filename: components/ui/button.tsx
import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 py-1.5 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
      align: {
        flexLeft: 'flex items-start justify-start',
        flexCenter: 'flex items-center justify-center',
        flexRight: 'flex items-end justify-end',
        flexBetween: 'flex items-center justify-between',
        inlineLeft: 'inline-flex items-start justify-start',
        inlineCenter: 'inline-flex items-center justify-center',
        inlineRight: 'inline-flex items-end justify-end',
        inlineBetween: 'inline-flex items-center justify-between'
      },
      
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      align: 'flexCenter'
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```
## Usage
Time to put our creation to the test and bring it to life! After following those steps above, it's now time to unleash our masterpiece into the wild. Get ready to work your magic story and implement what we've cooked up so far, just like following a scrumptious recipe. Remember, you're the master chef here, so trust your instincts and let your creativity shine. Brace yourself for the excitement as you witness your creation come alive in all its glory.
```typescript
// Filename: app/page.tsx
import { Icons } from "@/components/icons"
import { Sidebar } from "@/components/sidebar"
import { NavItems } from "@/types/sidebar"

const menus: NavItems[] = [
  {
    label: "Home",
    icon: <Icons.home className="w-4 h-4" />,
    link: "/home",
    isParent: false,
  },
  {
    label: "About",
    icon: <Icons.info className="w-4 h-4" />,
    link: "/about",
    isParent: false,
  },
  {
    label: "Settings",
    icon: <Icons.settings className="w-4 h-4" />,
    link: "/settings",
    isParent: true,
    subMenu: [
      {
        label: "Profile",
        link: "/settings/profile",
      },
      {
        label: "Preferences",
        link: "/settings/preferences",
      },
    ],
  },
]

export default function IndexPage() {
  return (
    <div className="grid lg:grid-cols-5">
      <Sidebar menus={menus} className="hidden lg:block" />
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <h1>Hello</h1>
      </div>
    </div>
  )
}
```

### A Javascript demo/repos link

_No response_

### PayPal Link for Donation (Javascript Storyteller)

_No response_
