interface IReturnUseSelect {
  selectedValue: string;
  selectedTextAreaValue: string;
}

export const useSelect = (
  listForSelect: Array<any>,
  e: any
): IReturnUseSelect => {
  const text: string = e.target.innerHTML;
  const filteredList: Array<typeof listForSelect[0]> = listForSelect.filter(
    (el: typeof listForSelect[0]): boolean => el.title === text
  );

  return {
    selectedValue: text,
    selectedTextAreaValue: filteredList[0]?.template,
  };
};
