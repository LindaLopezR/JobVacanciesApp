import mainStyles from './../../assets/styles/mainStyles.js';

export function orderFunction(arrayCollection) {
  return arrayCollection.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
};


export function findItem (item, collection) {
  const dataItem = collection.find(i => i._id == item);
  if (dataItem && dataItem.profile) {
    return dataItem ? dataItem.profile.name : '--';
  }
  return dataItem ? dataItem.name : '--';
};

export function getTypeWork(item) {
  let type = '';

  switch(parseInt(item)) {
    case 1:
      type = 'Jornada completa';
      break;
    case 2:
      type = 'Media jornada';
      break;
    case 3:
      type = 'Contrato por obra';
      break;
    case 4:
      type = 'Temporal';
      break;
    case 5:
      type = 'Voluntario';
      break;
    case 6:
      type = 'Prácticas';
      break;
    default:
      type = '--';
      break;
  }
  return type;
};

export function getTypeSite(item) {
  let type = '';

  switch(parseInt(item)) {
    case 1:
      type = 'Presencial';
      break;
    case 2:
      type = 'Híbrido';
      break;
    case 3:
      type = 'Remoto';
      break;
    default:
      type = '--';
      break;
  }
  return type;
};

export function colorLineStatus(item) {
  let color = '';
  switch(item) {
    case 'PENDIENT':
      color = mainStyles.badge_line_orange;
      break;
    case 'APPROVED':
      color = mainStyles.badge_line_success;
      break;
    case 'CANCELLED':
      color = mainStyles.badge_line_danger;
      break;
  }
  return color;
};

export function textStatus(item, type) {
  let text = '';

  switch(item) {
    case 'PENDIENT':
      text = 'PENDIENTE';
      break;
    case 'APPROVED':
      text = 'ACEPTADO';
      break;
    case 'CANCELLED':
      text = 'CANCELADO';
      break;
    default:
      text = '--';
      break;
  }
  return text;
};
