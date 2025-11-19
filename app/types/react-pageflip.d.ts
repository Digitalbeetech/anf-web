declare module "react-pageflip" {
  import * as React from "react";

  export interface HTMLFlipBookProps {
    children: React.ReactNode;
    width?: number;
    height?: number;
    size?: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    startPage?: number;
    flippingTime?: number;
    startZIndex?: number;
    drawShadow?: boolean;
    useMouseEvents?: boolean;
    clickEventForward?: boolean;
    usePortrait?: boolean;
    showPageCorners?: boolean;
    className?: string;
    style?: React.CSSProperties;
    ref?: React.Ref<any>;
    [key: string]: any; // fallback for extra props
  }

  export default class HTMLFlipBook extends React.Component<HTMLFlipBookProps> {}
}