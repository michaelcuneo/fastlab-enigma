import { useSpring } from 'react-spring';

export const CustomAnimation = ({ hoverState, shadow }) => {
  const Spring = useSpring({
    boxShadow: !hoverState
      ? `0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)`
      : `-10px -10px 40px rgba(255, 255, 255, 0.1), 10px 10px 40px ${shadow}`,
  });

  return Spring;
};
