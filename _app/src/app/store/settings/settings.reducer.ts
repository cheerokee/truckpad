import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';

export interface SettingsState {
  // app layout
  fixedHeader: boolean;
  fixedNavigation: boolean;
  minifyNavigation: boolean;
  hideNavigation: boolean;
  topNavigation: boolean;
  boxedLayout: boolean;

  // mobile menu
  pushContent: boolean;
  noOverlay: boolean;
  offCanvas: boolean;

  // accessibility
  biggerContentFont: boolean;
  highContrastText: boolean;
  daltonism: boolean;
  preloaderInside: boolean;
  rtl: boolean;

  // global modifications
  cleanPageBackground: boolean;
  hideNavigationIcons: boolean;
  disableCSSAnimation: boolean;
  hideInfoCard: boolean;
  leanSubheader: boolean;
  hierarchicalNavigation: boolean;

  // global font size
  globalFontSize: string;
}

// here you can configure initial state of your app
// for all your users
export const initialState: SettingsState = {
  // app layout
  fixedHeader: false,
  fixedNavigation: false,
  minifyNavigation: false,
  hideNavigation: false,
  topNavigation: false,
  boxedLayout: false,

  // mobile menu
  pushContent: false,
  noOverlay: false,
  offCanvas: false,

  // accessibility
  biggerContentFont: false,
  highContrastText: false,
  daltonism: false,
  preloaderInside: false,
  rtl: false,

  // global modifications
  cleanPageBackground: false,
  hideNavigationIcons: false,
  disableCSSAnimation: false,
  hideInfoCard: false,
  leanSubheader: false,
  hierarchicalNavigation: false,

  // global font size
  globalFontSize: 'md',

};

const settingsReducer = createReducer(
  initialState, // TENTAR EXECUTAR A FUNÇÃO PARA SALVAR A CONFIGURAÇÃO AQUI
  on(SettingsActions.toggleFixedHeader, (state, action) => ({ ...state, fixedHeader: action.check })),
  on(SettingsActions.toggleFixedNavigation, (state, action) => ({...state, fixedNavigation: action.check })),
  on(SettingsActions.toggleMinifyNavigation, (state, action) => ({...state, minifyNavigation: action.check })),
  on(SettingsActions.toggleHideNavigation, (state, action) => ({...state, hideNavigation: action.check })),
  on(SettingsActions.toggleTopNavigation, (state, action) => ({...state, topNavigation: action.check })),
  on(SettingsActions.toggleBoxedLayout, (state, action) => ({...state, boxedLayout: action.check })),
  on(SettingsActions.togglePushContent, (state, action) => ({...state, pushContent: action.check })),
  on(SettingsActions.toggleNoOverlay, (state, action) => ({...state, noOverlay: action.check })),
  on(SettingsActions.toggleOffCanvas, (state, action) => ({...state, offCanvas: action.check })),
  on(SettingsActions.toggleBiggerContentFont, (state, action) => ({...state, biggerContentFont: action.check })),
  on(SettingsActions.toggleHighContrastText, (state, action) => ({...state, highContrastText: action.check })),
  on(SettingsActions.toggleDaltonism, (state, action) => ({...state, daltonism: action.check })),
  on(SettingsActions.toggleRtl, (state, action) => ({...state, rtl: action.check })),
  on(SettingsActions.togglePreloaderInsise, (state, action) => ({...state, preloaderInside: action.check })),
  on(SettingsActions.toggleCleanPageBackground, (state, action) => ({...state, cleanPageBackground: action.check })),
  on(SettingsActions.toggleHideNavigationIcons, (state, action) => ({...state, hideNavigationIcons: action.check })),
  on(SettingsActions.toggleDisableCSSAnimation, (state, action) => ({...state, disableCSSAnimation: action.check })),
  on(SettingsActions.toggleHideInfoCard, (state, action) => ({...state, hideInfoCard: action.check })),
  on(SettingsActions.toggleLeanSubheader, (state, action) => ({...state, leanSubheader: action.check })),
  on(SettingsActions.toggleHierarchicalNavigation, (state, action) => ({...state, hierarchicalNavigation: action.check })),
  on(SettingsActions.setGlobalFontSize, (state, action) => ({...state, globalFontSize: action.size })),

  on(SettingsActions.appReset, () => ({...initialState})),


);

export function reducer(state: SettingsState, action: Action) {
  return settingsReducer(state, action);
}
