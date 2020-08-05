const formatDate = (value: Date): string => {
  const data = new Date(value);
  return Intl.DateTimeFormat('pt-BR').format(data); // TODO
};
export default formatDate;
