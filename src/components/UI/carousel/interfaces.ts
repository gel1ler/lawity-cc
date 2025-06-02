import Slider from "react-slick";

export interface Slide {
  id: number;
  image: string;
}

export interface ArrowProps {
  onClick?: () => void;
  big?: boolean
}

export type SliderRef = React.RefObject<Slider | null>