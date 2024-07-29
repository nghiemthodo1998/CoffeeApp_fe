export interface SpecialProductProps {
  type?: string;
  ingredients?: string;
}

const useSpecialProduct = (props: SpecialProductProps) => {
  return {
    ...props,
  };
};

export default useSpecialProduct;
