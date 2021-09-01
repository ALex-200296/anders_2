export interface IRoutes {
  path: string;
  component: JSX.Element | any;
  routes?: IRoutes[];
  exact?: boolean;
}
