/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import type { theme } from "./theme";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
