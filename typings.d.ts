declare module '*.css';
declare module '*.less';
declare module "*.png";
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}


declare module 'js-cookie'
declare module 'postcss-import'
declare module 'postcss-url'
declare module 'postcss-aspect-ratio-mini'
declare module 'postcss-write-svg'
declare module 'postcss-cssnext'
declare module 'postcss-px-to-viewport'
declare module 'cssnano'
declare module 'redux-logger'
declare module 'store'
