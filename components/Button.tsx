interface ButtonProps {
  variant?: 'primary' | 'secondary'
  href?: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  variant = 'primary',
  href,
  children,
  className,
  disabled,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded font-sans font-semibold text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold focus-visible:ring-offset-2'
  const variants = {
    primary: 'bg-fort-gold text-white hover:bg-[#b89540] disabled:opacity-50',
    secondary:
      'border-2 border-fort-gold text-fort-gold hover:bg-fort-gold hover:text-white disabled:opacity-50',
  }
  const classes = `${base} ${variants[variant]} ${className ?? ''}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
