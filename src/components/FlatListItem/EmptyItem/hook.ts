export interface EmptyItemProps {
  text: string;
}

const useEmptyItem = (props: EmptyItemProps) => {
  return {
    ...props,
  };
};

export default useEmptyItem;
