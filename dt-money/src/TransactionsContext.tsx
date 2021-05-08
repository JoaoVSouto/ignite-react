import * as React from 'react';

import api from './services/api';

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

type TransactionsProviderProps = {
  children: React.ReactNode;
};

export const TransactionsContext = React.createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
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
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}