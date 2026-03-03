import { cssInterop } from 'nativewind';
import { PrimitiveIcon } from '@gluestack-ui/core/icon/creator';

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});