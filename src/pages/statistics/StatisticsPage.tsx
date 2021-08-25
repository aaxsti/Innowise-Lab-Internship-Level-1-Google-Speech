import { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import StatisticsPageWrapper from './styled/StatisticsPageWrapper.styled';
import Colors from '../../core/constants/colors';
import Preloader from '../../core/components/styled/Preloader.styled';
import ElementsSizes from '../../core/constants/sizes';
import { requestStatistics } from '../../core/redux/statistics/statistics.actions';
import selectStatistics from '../../core/redux/statistics/statistics.selectors';
import StatisticsTable from './styled/StatisticsTable.styled';
import StatisticsTitle from './styled/StatisticsTitle.styled';
import Routes from '../../core/constants/routes';
import CustomLink from '../../core/components/styled/CustomLink.styled';
import ExitStatisticsButton from './styled/ExitStatisticsButton.styled';
import { GameStatistics } from '../../core/interfaces/game-statistics';
import { MyTimestamp } from '../../core/firebase/firebase';
import columns from './table-columns';
import countTotalScores from '../../core/utils/count-total-scores';

const StatisticsPage: FC = () => {
  const [t] = useTranslation();
  const statistics = useSelector(selectStatistics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestStatistics());
  }, [dispatch]);

  const convertedStatistics = useMemo(() => statistics
    .reduce((acc: Array<GameStatistics>,
      el: GameStatistics) => (
      [...acc, {
        ...el,
        total: countTotalScores(el.level, el.correct),
        date: (el.date as MyTimestamp).toDate()
          .toLocaleString(),
      }]
    ), []), [statistics]);

  if (statistics.length === 0) {
    return <Preloader colored={Colors.primary} size={ElementsSizes.LargePreloader} />;
  }

  return (
    <StatisticsPageWrapper>
      <StatisticsTitle color={Colors.mainText} size={ElementsSizes.StatisticsPageTitle}>
        {t('statistics-page.statistics-title')}
      </StatisticsTitle>
      <StatisticsTable
        disableExtendRowFullWidth
        headerHeight={40}
        autoHeight
        columns={columns}
        disableSelectionOnClick
        disableColumnMenu
        pageSize={10}
        rows={convertedStatistics}
        sortingOrder={['asc', 'desc']}
      />
      <ExitStatisticsButton variant="outlined" to={Routes.Main} component={CustomLink}>
        {t('statistics-page.statistics-exit-button')}
      </ExitStatisticsButton>
    </StatisticsPageWrapper>
  );
};

export default StatisticsPage;
