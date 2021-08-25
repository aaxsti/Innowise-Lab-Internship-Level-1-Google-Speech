import { call, put } from 'redux-saga/effects';
import getStatisticsSagaWorker from '../core/redux/statistics/sagas/getStatisticsSaga';
import statisticsAPI from '../core/api/statistics-api';
import { fetchStatistics } from '../core/redux/statistics/statistics.actions';

const statisticsMock = [
  {
    id: 'ONToZRco0zHLR8QMzQXH',
    correct: 10,
    incorrect: 0,
    level: 1,
    login: '1@mail.com',
    date: new Date(),
  },
];

describe('getStatisticsSaga', () => {
  it('success triggers, success action with statistics', () => {
    const generator = getStatisticsSagaWorker();
    const payload = statisticsMock;

    expect(generator.next().value)
      .toEqual(call({
        context: statisticsAPI,
        fn: statisticsAPI.getStatistics,
      }));

    expect(generator.next(payload).value)
      .toEqual(put(fetchStatistics(payload)));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});
