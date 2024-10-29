import * as React from 'react'

const Card = React.forwardRef(({ className, ...props }, ref) => (
    <div 
        ref={ref}
        className=''
        {...props}
    />
));
Card.displayName = 'Card'

const CustomButton = React.forwardRef(({ className, ...props }, ref) => (
    <div 
        ref={ref}
        className=''
        {...props}
    />
));
CustomButton.displayName = 'CustomButton'

export { Card, CustomButton }