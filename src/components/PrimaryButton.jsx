import { Link } from 'react-router-dom'
import clsx from 'clsx'
import AnimatedIcon from './icons/AnimatedIcon'
import { ArrowRight } from './icons/icons'

const styles = {
  base:
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-navy-300 disabled:cursor-not-allowed disabled:opacity-60',
  primary:
    'bg-navy-500 text-white shadow-lg shadow-navy-900/30 hover:bg-navy-400 active:bg-navy-600 border border-white/15',
  secondary:
    'bg-white/10 text-white border border-white/20 hover:bg-white/15 active:bg-white/20',
  ghost:
    'bg-transparent text-white border border-white/20 hover:bg-white/10',
}

function PrimaryButton({
  children,
  to,
  href,
  variant = 'primary',
  className,
  showIcon = false,
  ...props
}) {
  const Element = href ? 'a' : to ? Link : 'button'
  const elementProps = href ? { href, target: '_blank', rel: 'noreferrer' } : to ? { to } : {}

  return (
    <Element className={clsx(styles.base, styles[variant], className)} {...elementProps} {...props}>
      {children}
      {showIcon && <AnimatedIcon icon={ArrowRight} size={16} animationType="hover-slide" />}
    </Element>
  )
}

export default PrimaryButton
