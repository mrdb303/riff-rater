"use client";

import React from 'react';
import { styled, keyframes } from '@stitches/react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { blackA, gray } from '@radix-ui/colors';


const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});




const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,
});

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'black',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  boxShadow: `0 2px 10px ${blackA.blackA10}`,
});

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: 'white',
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${blackA.blackA7}` },
  '&:hover': { backgroundColor: blackA.blackA6 },
};

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
});

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: 'white',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
});

const StyledTriggerWithCaret = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledTrigger {...props} ref={forwardedRef}>
    {children}
    <StyledCaret aria-hidden />
  </StyledTrigger>
));

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
});

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 320px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
});

const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: 'black',
  width: 15,
  height: 15,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
});

const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow />
  </StyledIndicator>
));

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: 'black',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 320px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});




/* 
  Exports (These link the styles defined to the navigation categories)

*/
const NavigationMenu = StyledMenu;
const NavigationMenuList = StyledList;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = StyledTriggerWithCaret;
const NavigationMenuLink = StyledLink;
const NavigationMenuContent = StyledContent;
const NavigationMenuViewport = StyledViewport;
const NavigationMenuIndicator = StyledIndicatorWithArrow;

/*
  Three types of dropdown menu are defined here.
  gridTemplateRows is the minimum number of sub-menu links.
  For example, if a default number of three is set, 3 positions are set aside.
  This will leave a third gap if only two are present. However, the number
  is not a maximum, so will not limit the number of items that the sub-menu
  will display.
*/
const ContentList = styled('ul', {
  display: 'grid',
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: 'none',

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 320px)': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@media only screen and (min-width: 320px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
      three: {
        '@media only screen and (min-width: 320px)': {
          width: 300,
          gridTemplateRows: 'repeat(2, 1fr)',
        },
      },
    },
  },
});

const ListItem = styled('li', {});

const LinkTitle = styled('div', {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: 'white',
});

const LinkText = styled('p', {
  all: 'unset',
  color: 'white',
  lineHeight: 1.4,
  fontWeight: 'initial',
});

const ContentListItem = React.forwardRef(({ children, title, ...props }, forwardedRef) => (
  <ListItem>
    <NavigationMenuLink
      {...props}
      ref={forwardedRef}
      css={{
        padding: 12,
        borderRadius: 6,
        '&:hover': { backgroundColor: blackA.blackA12 },
      }}
    >
      <LinkTitle>{title}</LinkTitle>
      <LinkText>{children}</LinkText>
    </NavigationMenuLink>
  </ListItem>
));

const ContentListItemCallout = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <ListItem css={{ gridRow: 'span 3' }}>
    <NavigationMenuLink
      {...props}
      href="/"
      ref={forwardedRef}
      css={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        background: `linear-gradient(140deg, ${gray.gray12} 3%, ${gray.gray12} 12%);`,
        borderRadius: 7,
        padding: 15,
      }}
    >
     <svg aria-hidden width="0.8in" height="0.8in" viewBox="0 0 100 100" fill="white">
        <path d="M 32.00,9.52
           C 39.24,8.37 47.36,8.60 54.00,11.99
             70.18,20.27 74.27,44.23 62.67,57.99
             55.74,66.21 48.26,68.12 38.00,68.00
             19.59,67.78 9.80,54.45 10.00,37.00
             10.07,31.51 11.14,26.70 14.13,22.00
             18.58,15.00 24.20,11.62 32.00,9.52 Z
           M 40.00,25.77
           C 35.91,25.99 32.38,26.87 29.65,30.21
             22.56,38.86 29.15,52.60 41.00,51.15
             55.08,49.42 57.35,28.17 40.00,25.77 Z
           M 38.00,37.00
           C 38.00,37.00 41.00,37.00 41.00,37.00
             41.00,37.00 41.00,40.00 41.00,40.00
             41.00,40.00 38.00,40.00 38.00,40.00
             38.00,40.00 38.00,37.00 38.00,37.00 Z"></path>
      </svg>
      <LinkTitle
        css={{
          fontSize: 18,
          color: 'white',
          marginTop: 10,
          marginBottom: 7,
        }}
      >
        Album Reviews
      </LinkTitle>
      <LinkText
        css={{
          fontSize: 14,
          color: 'white',
          lineHeight: 1.3,
        }}
      >
        Rate your favourite albums.
      </LinkText>
    </NavigationMenuLink>
  </ListItem>
));

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
});

export const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="one">
              <ContentListItemCallout />
              <ContentListItem href="/pages/about" 
                title="About">
                Rate your favourite albums.
              </ContentListItem>
              <ContentListItem href="/pages/reviews" 
                title="Reviews">
                Rate your favourite albums.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Reviews</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="two">
              <ContentListItem title="Beef &amp; onion" href="/pages/beef">
                The original crowd pleaser.
              </ContentListItem>
              <ContentListItem title="Vegetable extravaganza" href="/pages/veg">
                Just what the Doctor ordered.
              </ContentListItem>
              <ContentListItem title="Chicken" href="/pages/chicken">
                Just cluckin&apos; good.
              </ContentListItem>
              <ContentListItem title="Chilli beef" href="/pages/chilli">
                Will repeat more often than the Dave cable TV channel.
              </ContentListItem>
              <ContentListItem title="Turnip surprise" href="/pages/turnip">
                Still a surprise that it keeps on selling.
              </ContentListItem>
              <ContentListItem title="Minced beef" href="/pages/minced">
                The football stadium half-time treat.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Your Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="three">
              <ContentListItem 
                title="Fast distribution" href="/pages/fast">
                Our lorries have no speed limiters.
              </ContentListItem>
              <ContentListItem
                title="International" href="/pages/int">
                We shipped a pie to France once.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

{/* 
        <NavigationMenuItem>
          <NavigationMenuTrigger>Training</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="three">
              <ContentListItem 
                title="Tech Educators" href="https://techeducators.co.uk">
                Educator folk of choice.
              </ContentListItem>
              <ContentListItem
                title="Tech Educators Blog" href="https://techeducators.co.uk/blog">
                The latest blog posts.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com">
            Our Bakery
          </NavigationMenuLink>
        </NavigationMenuItem>
*/}

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  );
};

export default NavigationMenuDemo;

