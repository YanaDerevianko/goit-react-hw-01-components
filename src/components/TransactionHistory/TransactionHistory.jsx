import propTypes from 'prop-types';
import {Transactions,TransactionsTableTitle, TransactionItems, TransactionItemsBody} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <Transactions>
        <TransactionsTableTitle>
          <tr>
            <TransactionItems>Type</TransactionItems>
            <TransactionItems>Amount</TransactionItems>
            <TransactionItems>Currency</TransactionItems>
          </tr>
        </TransactionsTableTitle>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TransactionItemsBody>{item.type}</TransactionItemsBody>
              <TransactionItemsBody>{item.amount}</TransactionItemsBody>
              <TransactionItemsBody>{item.currency}</TransactionItemsBody>
            </tr>
          ))}
        </tbody>
      </Transactions>
    </>
  );
};
TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }),
  ),
};
