export const HOC = (WrappedComponent) => {
  return function EnhanceComponent({ isloading, ...props }) {
    if (isloading) {
      return <h1>Loading.....</h1>;
    }
    return <WrappedComponent {...props} />;
  };
};
