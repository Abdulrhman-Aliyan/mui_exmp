import React from 'react'
import Badge from '@mui/joy/Badge';


const BadgeDwt = ({
    color='primary',
    children,
    badgeContent,
    sx,
    variant='solid',
    anchorX='right',
    anchorY='top',
    invisible=false,
    max=99,
    showZero=false,
    size="sm", // sm md lg
}) => {
  return (
    <Badge 
    color={color}
    badgeContent={badgeContent} 
    invisible={invisible}
    max={max}
    size={size}
    showZero={showZero}
    anchorOrigin={
        {
        vertical: anchorY,
        horizontal: anchorX,
        }
    }
    sx={sx} 
    variant={variant}
    >
        {children}
    </Badge>

  )
}

export default BadgeDwt