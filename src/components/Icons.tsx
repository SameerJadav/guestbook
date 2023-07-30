import { type SVGProps } from "react"
import {
  GitHubLogoIcon,
  ReloadIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons"

export interface IconsProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: string | number
  absoluteStrokeWidth?: boolean
}

export const Icons = {
  github: GitHubLogoIcon,
  loader: ReloadIcon,
  mail: EnvelopeClosedIcon,
  google: (props: IconsProps) => (
    <svg fill="currentColor" viewBox="0 0 64 64" {...props}>
      <path d="M 32.521484 6 C 18.158484 6 6.515625 17.642 6.515625 32 C 6.515625 46.358 18.158484 58 32.521484 58 C 54.209484 58 59.098453 37.865969 57.064453 27.667969 L 51.181641 27.667969 L 49.269531 27.667969 L 32.515625 27.667969 L 32.515625 36.333984 L 49.279297 36.333984 C 47.351759 43.804816 40.588119 49.332031 32.515625 49.332031 C 22.943625 49.332031 15.181641 41.572 15.181641 32 C 15.181641 22.428 22.943625 14.667969 32.515625 14.667969 C 36.868625 14.667969 40.834906 16.283594 43.878906 18.933594 L 50.033203 12.779297 C 45.410203 8.5672969 39.266484 6 32.521484 6 z"></path>
    </svg>
  ),
}
