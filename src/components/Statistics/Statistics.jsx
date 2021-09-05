import propTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, statisticalData }) => {
  const isTitle = title;
  return (
    <StatisticsSection>
      {isTitle && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {statisticalData.map(item => (
          <StatisticsListItem key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: propTypes.string,
  statisticalData: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ),
};
