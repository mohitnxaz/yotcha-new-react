import React from "react";

interface Props<T> {
  component: React.FC<T>;
  layout: any;
  minified?: boolean;
  notification?: boolean;
  noScroll?: boolean;
  navBg?: string;
  [key: string]: any;
}

const WithLayout = <T extends {}>(props: Props<T>) => {
  const {
    layout: Layout,
    component: Component,
    minified,
    notification,
    navBg,
    noScroll = false,
    hideTopbar = false,
    isMaxWidth = false,
    showFindYacht = false,
    ...rest
  } = props;

  const layout = {
    minified,
    notification,
    navBg,
    hideTopbar,
    noScroll,
    isMaxWidth,
    showFindYacht,
  };

  return (
    <Layout {...layout}>
      <Component {...(rest as T)} />
    </Layout>
  );
};

export default WithLayout;
