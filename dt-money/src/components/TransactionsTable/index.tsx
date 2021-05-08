import * as React from 'react';

import api from '../../services/api';

import * as S from './styles';

type Transaction = {
  id: string;
  title: string;
  amount: number;
  parsedAmount: string;
  type: string;
  category: string;
  createdAt: string;
  parsedCreatedAt: string;
};

type TransactionsAPIResponse = {
  transactions: Omit<Transaction, 'parsedAmount' | 'parsedCreatedAt'>[];
};

export default function TransactionsTable() {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  React.useEffect(() => {
    api.get<TransactionsAPIResponse>('transactions').then(response => {
      const incomingTransactions = response.data.transactions;

      const parsedTransactions = incomingTransactions.map(transaction => ({
        ...transaction,
        parsedAmount: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(transaction.amount),
        parsedCreatedAt: new Intl.DateTimeFormat('pt-BR').format(
          new Date(transaction.createdAt)
        ),
      }));

      setTransactions(parsedTransactions);
    });
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="title">{transaction.title}</td>
              <td className={transaction.type}>{transaction.parsedAmount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.parsedCreatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}
