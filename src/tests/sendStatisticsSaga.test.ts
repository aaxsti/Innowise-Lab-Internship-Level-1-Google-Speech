import { call } from 'redux-saga/effects';
import statisticsAPI from '../core/api/statistics-api';
import { StatisticsActionTypes } from '../core/redux/statistics/statistics.action-types';
import sendStatisticsSagaWorker from '../core/redux/statistics/sagas/sendStatisticsSaga';
import { GameStatistics } from '../core/interfaces/game-statistics';

const statisticMock = {
  login: '1@mail.com',
  level: 1,
  correct: 9,
  incorrect: 1,
  date: new Date(),
} as GameStatistics;

describe('sendStatisticsSaga', () => {
  it('success triggers, success action with statistics', () => {
    const generator = sendStatisticsSagaWorker({
      type: StatisticsActionTypes.SEND_STATISTICS,
      payload: statisticMock,
    });

    expect(generator.next().value)
      .toEqual(call({
        context: statisticsAPI,
        fn: statisticsAPI.sendStatistics,
      }, statisticMock));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});
