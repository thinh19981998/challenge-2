import './style.scss';

function Button({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
}) {
  const VARIANTS = ['text', 'outline'];
  const SIZES = ['sm', 'md', 'lg'];
  const COLORS = ['default', 'primary', 'secondary', 'danger'];

  const btnVariant = VARIANTS.includes(variant) ? 'btn--' + variant : '';
  const btnSize = SIZES.includes(size) ? 'btn--' + size : 'btn--md';
  const btnColor = COLORS.includes(color) ? 'btn--' + color : '';
  const btnDisableShadow = disableShadow ? 'btn--disableShadow' : '';
  const btnStartIcon = startIcon ? 'btn--Icon btn--startIcon' : '';
  const btnEndIcon = endIcon ? 'btn--Icon btn--endIcon' : '';
  const label =
    color === 'secondary'
      ? 'Secondary'
      : color === 'danger'
      ? 'Danger'
      : 'Default';

  const btnClass = `btn ${btnVariant} ${btnSize} ${btnColor} ${btnDisableShadow} ${btnStartIcon} ${btnEndIcon}`;
  return (
    <button className={btnClass} disabled={disabled}>
      {startIcon !== '' && <span class='material-icons'>{startIcon}</span>}
      {label}
      {endIcon !== '' && <span class='material-icons'>{endIcon}</span>}
    </button>
  );
}

export default Button;
