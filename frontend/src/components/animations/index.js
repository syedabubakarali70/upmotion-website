import {
  fadeUpVariants,
  scaleInVariants,
  underlineVariants,
  fadeRightVariants,
  fadeLeftVariants,
} from "./variants";
import withAnimation from "./withAnimation";

export const FadeUp = withAnimation(fadeUpVariants);
export const ScaleIn = withAnimation(scaleInVariants);
export const Underline = withAnimation(underlineVariants);
export const FadeRight = withAnimation(fadeRightVariants);
export const FadeLeft = withAnimation(fadeLeftVariants);
export { default as StaggerParent } from "./StaggerParent";
