import Slider from "react-slick";

export interface Slide {
  id: number;
  image: string;
  h?: string;
  p?: string
}

export interface ArrowProps {
  onClick?: () => void;
  big?: boolean;
  noAbs?: boolean;
  black?: boolean;
}

export type SliderRef = React.RefObject<Slider | null>