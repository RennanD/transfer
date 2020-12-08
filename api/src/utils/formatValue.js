const { format: formatValue } = new Intl.NumberFormat('ptBR', {
  style: 'currency',
  currency: 'BRL',
});

module.exports = formatValue;