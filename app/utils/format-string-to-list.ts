export const formatStringToList = ({text, separator = '-'}: {text: string, separator?: string}) => {
    const items = text.split(separator).filter(item => item.trim() !== '');
  
    const listItems = items.map(item => item.trim());
  
    return listItems;
  }
