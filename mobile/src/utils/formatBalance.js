import Intl from 'intl';

import ptBR from 'intl/locale-data/jsonp/pt-BR';

const formatValue = new Intl.NumberFormat(ptBR, {
  style: 'currency',
  currency: 'BRL',
});


export default formatValue;