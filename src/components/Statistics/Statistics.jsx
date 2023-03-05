import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../utils/GetRandomColor';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsLabel,
  StatisticsList,
  StatisticsItem,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(item => (
          <StatisticsItem color={getRandomHexColor()} key={item.id}>
            <StatisticsLabel>{item.label} </StatisticsLabel>
            <Percentage>{item.percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsContainer>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};