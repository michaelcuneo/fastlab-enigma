import { useSpring } from 'react-spring';

export const CustomAnimation = hoverState => {
  const spring = useSpring({
    minHeight: !hoverState ? 110 : 250,
    maxHeight: !hoverState ? 110 : 250,
    background: !hoverState ? '#151417' : '#EC184A',
  });

  return spring;
};

export const CustomHideAnimation = hoverState => {
  const spring = useSpring({
    display: !hoverState ? 'none' : 'flex',
  });

  return spring;
};

export const CustomDetailAnimation = hoverState => {
  const spring = useSpring({
    display: !hoverState ? 'none' : 'flex',
  });

  return spring;
};
