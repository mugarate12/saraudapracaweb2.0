import 'styled-components'

declare module 'styled-components' {
  export interface Themes {
    title: string;

    colors: {
      background: string;
      font: string;
      generalIcons: string;

      sideBarBackground: string;
      sideBarIcon: string;
      sideBarFontColor: string;
    }
  }

  export interface DarkTheme extends Themes {}
  export interface DefaultTheme extends Themes {}
}