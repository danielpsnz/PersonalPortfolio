import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M23,1 L29.354,9.388 L39,11.222 L32.651,18.777 L34.53,28 L23,23.333 L11.47,28 L13.349,18.777 L7,11.222 L16.646,9.388 L23,1 Z M23,7.778 L18.26,12.047 L19.256,17.667 L23,15.222 L26.744,17.667 L27.74,12.047 L23,7.778 Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});