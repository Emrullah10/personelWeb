import classNames from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ children, variant = 'primary', as: Component = 'button', className, ...props }) => (
  <Component className={classNames(styles.button, styles[variant], className)} {...props}>
    {children}
  </Component>
);
