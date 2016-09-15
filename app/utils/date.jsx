import moment from 'moment';

function timestampToDate(timestamp) {
  const gameDate = moment(timestamp);

  if (!gameDate.isValid()) {
    return 'Invalid date';
  }

  return gameDate.format('D MMM');
}

export default timestampToDate;
