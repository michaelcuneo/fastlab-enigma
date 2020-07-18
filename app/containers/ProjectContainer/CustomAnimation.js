import { useSpring } from 'react-spring';

export const CustomAnimation = hoverState => {
  const spring = useSpring({
    opacity: !hoverState ? '0' : '1',
    right: !hoverState ? '-200px' : '0px',
  });

  return spring;
};
