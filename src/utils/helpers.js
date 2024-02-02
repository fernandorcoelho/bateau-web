export function validateCpf(v) {
  const cpfClean = v.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (cpfClean.length !== 11) {
    return 'CPF inválido';
  }
  let sum = 0;
  let remainder;
  for (let i=1; i<=9; i++) sum = sum + parseInt(cpfClean.substring(i-1, i)) * (11 - i);
  remainder = (sum * 10) % 11;
  
  if ((remainder === 10) || (remainder === 11))  remainder = 0;
  if (remainder !== parseInt(cpfClean.substring(9, 10)) ) return 'CPF inválido';
  
  sum = 0;
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpfClean.substring(i-1, i))*(12-i);
  remainder = (sum * 10) % 11;
  
  if ((remainder === 10) || (remainder === 11))  remainder=0;
  if (remainder !== parseInt(cpfClean.substring(10, 11) ) ) return 'CPF inválido';
  return true;
}

export function cleanCpf(v) {
  return v.replace(/\D/g, '')
}
