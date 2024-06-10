export const formatCPF = (cpfString: string) => {
  const numericCPF = cpfString.replace(/\D/g, '');

  const formattedCPF = numericCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  return formattedCPF;
};


export const formatPhone = (phone: string) => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

export const formatDistance = (distance: number) => {
  if (distance < 1) {
    const meters = Math.round(distance * 1000);
    return `${meters} metros`;
  }
  return `${distance.toFixed(2)} km`;
};