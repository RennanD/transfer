import Intl from 'intl';
import ptBR from 'intl/locale-data/jsonp/pt-BR';

const { format: formatValue } = new Intl.NumberFormat(ptBR, {
  style: 'currency',
  currency: 'BRL',
});

export default formatValue;
