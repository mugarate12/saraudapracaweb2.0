import 'styled-components'

declare module 'styled-components' {
  export interface Themes {
    title: string;

    iconSize: string;

    colors: {
      background: string;
      font: string;
      generalIcons: string;

      sideBarBackground: string;
      sideBarIcon: string;
      sideBarFontColor: string;
      sideBarBoxShadow: string;

      containerBackground: string;
      containerFont: string;

      inputBackground: string;
      inputBorder: string;

      buttonbackground: string;
      buttonIcon: string;

      tableContentBorder: string;
    }
  }

  export interface DarkTheme extends Themes {}
  export interface DefaultTheme extends Themes {}
}