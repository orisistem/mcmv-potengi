import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'filled' | 'tonal' | 'outlined' | 'text'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  icon?: ReactNode
}

const variantStyles: Record<Variant, string> = {
  filled:
    'bg-[#003366] text-white hover:bg-[#002244] disabled:bg-[#e5e4e7] disabled:text-[#9ca3af]',
  tonal:
    'bg-[#D4F0E0] text-[#002112] hover:bg-[#80D4A6] disabled:bg-[#e5e4e7] disabled:text-[#9ca3af]',
  outlined:
    'border-2 border-[#737880] text-[#003366] hover:bg-[#D6E6F5] disabled:border-[#e5e4e7] disabled:text-[#9ca3af]',
  text: 'text-[#003366] hover:bg-[#D6E6F5] disabled:text-[#9ca3af]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

export function Button({
  variant = 'filled',
  size = 'md',
  loading = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors cursor-pointer',
        variantStyles[variant],
        sizeStyles[size],
        loading && 'cursor-wait opacity-70',
        className,
      ].join(' ')}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {icon && !loading && icon}
      {children}
    </button>
  )
}
