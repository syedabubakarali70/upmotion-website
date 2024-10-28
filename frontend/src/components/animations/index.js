import { fadeUpVariants, scaleInVariants, underlineVariants } from "./variants";
import withAnimation from "./withAnimation";

export const FadeUp = withAnimation(fadeUpVariants);
export const ScaleIn = withAnimation(scaleInVariants);
export const Underline = withAnimation(underlineVariants);
export { default as StaggerParent } from "./StaggerParent";
