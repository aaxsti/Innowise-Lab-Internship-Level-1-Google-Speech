import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import StatisticsPageWrapper from './styled/StatisticsPageWrapper.styled';
import Colors from '../../core/constants/colors';
import Preloader from '../../core/components/styled/Preloader.styled';
import ElementsSizes from '../../core/constants/sizes';
import { fetchStatistics } from '../../core/redux/statistics/statistics.actions';
import selectStatistics from '../../core/redux/statistics/statistics.selectors';
import StatisticsTable from './styled/StatisticsTable.styled';
import StatisticsTitle from './styled/StatisticsTitle.styled';
import Routes from '../../core/constants/routes';
import CustomLink from '../../core/components/styled/CustomLink.styled';
import ExitStatisticsButton from './styled/ExitStatisticsButton.styled';

const columns = [
  {
    field: 'login',
    headerName: 'Login',
    type: 'string',
    width: 250,
  },
  {
    field: 'level',
    headerName: 'Level',
    type: 'number',
    width: 105,
  },
  {
    field: 'correct',
    headerName: 'Correct',
    type: 'number',
    width: 120,
  },
  {
    field: 'incorrect',
    headerName: 'Incorrect',
    type: 'number',
    width: 130,
  },
  {
    field: 'total',
    headerName: 'Total',
    type: 'number',
    width: 100,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'string',
    width: 200,
  },
];

const StatisticsPage = () => {
  const [t] = useTranslation();
  const statistics = useSelector(selectStatistics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  const countTotalScores = (level: number, correct: number) => correct * (correct * parseFloat(`0.${level === 1 ? 1 : level}`));

  const convertedStatistics = useMemo(() => statistics.reduce((acc: any, el: any) => (
    [...acc, {
      ...el,
      total: countTotalScores(el.level, el.correct),
      date: el.date.toDate().toLocaleString(),
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
        headerHeight={40}
        autoHeight
        columns={columns}
        disableSelectionOnClick
        disableColumnMenu
        pageSize={10}
        rows={convertedStatistics}
      />
      <ExitStatisticsButton variant="outlined" to={Routes.Main} component={CustomLink}>
        {t('statistics-page.statistics-exit-button')}
      </ExitStatisticsButton>
    </StatisticsPageWrapper>
  );
};

export default StatisticsPage;
