import { forwardRef, type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-[#1A1D24]"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={[
            'rounded-lg border-2 px-4 py-2.5 text-base outline-none transition-colors',
            'text-[#1A1D24] placeholder:text-[#737880]',
            error
              ? 'border-[#C62828] focus:border-[#C62828]'
              : 'border-[#C3C7CF] focus:border-[#003366]',
            'disabled:bg-[#f4f3ec] disabled:text-[#9ca3af]',
            className,
          ].join(' ')}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />

        {error && (
          <span id={`${inputId}-error`} className="text-sm text-[#C62828]">
            {error}
          </span>
        )}

        {helperText && !error && (
          <span className="text-sm text-[#737880]">{helperText}</span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
